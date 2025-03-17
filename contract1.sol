// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract DataRoots is Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;

    // Constants
    uint256 public constant DATA_PRICE = 0.01 ether; // 0.01 EDU
    uint256 public constant REFUND_PERCENTAGE = 50; // 50% refund on revocation

    // Data Structures
    struct DataEntry {
        string ipfsHash;
        string name;
        address owner;
        DataCategory category;
        bool isActive;
        uint256 uploadTime;
    }

    struct AccessRequest {
        address requester;
        uint256 startTime;
        uint256 endTime;
        bool isApproved;
        bool isRevoked;
    }

    enum DataCategory {
        Personal,
        Educational
    }

    // State Variables
    Counters.Counter private _dataIds;
    Counters.Counter private _requestIds;
    
    mapping(uint256 => DataEntry) public dataEntries;
    mapping(uint256 => mapping(uint256 => AccessRequest)) public accessRequests; // dataId => requestId => AccessRequest
    mapping(uint256 => uint256[]) public dataRequests; // dataId => requestIds
    mapping(address => uint256[]) public userData; // user => dataIds
    mapping(address => uint256[]) public userRequests; // user => requestIds
    mapping(uint256 => mapping(uint256 => bool)) public paymentTransferred; // dataId => requestId => bool

    // Events
    event DataUploaded(uint256 indexed dataId, address indexed owner, string ipfsHash, string name, DataCategory category);
    event AccessRequested(uint256 indexed dataId, uint256 indexed requestId, address indexed requester, uint256 duration);
    event AccessApproved(uint256 indexed dataId, uint256 indexed requestId, address indexed requester);
    event AccessRevoked(uint256 indexed dataId, uint256 indexed requestId, address indexed requester);
    event RefundIssued(uint256 indexed dataId, uint256 indexed requestId, address indexed requester, uint256 amount);

    constructor() Ownable(msg.sender) {}

    function uploadData(string memory _ipfsHash, string memory _name, DataCategory _category) external {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");
        require(bytes(_name).length > 0, "Data name cannot be empty");
        
        _dataIds.increment();
        uint256 newDataId = _dataIds.current();
        
        dataEntries[newDataId] = DataEntry({
            ipfsHash: _ipfsHash,
            name: _name,
            owner: msg.sender,
            category: _category,
            isActive: true,
            uploadTime: block.timestamp
        });
        
        userData[msg.sender].push(newDataId);
        
        emit DataUploaded(newDataId, msg.sender, _ipfsHash, _name, _category);
    }

    function requestAccess(uint256 _dataId, uint256 _duration) external payable nonReentrant {
        require(dataEntries[_dataId].isActive, "Data entry does not exist or is inactive");
        require(msg.value == DATA_PRICE, "Incorrect payment amount");
        require(_duration > 0 && _duration <= 365 days, "Invalid duration");
        
        _requestIds.increment();
        uint256 newRequestId = _requestIds.current();
        
        AccessRequest memory newRequest = AccessRequest({
            requester: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            isApproved: false,
            isRevoked: false
        });
        
        accessRequests[_dataId][newRequestId] = newRequest;
        dataRequests[_dataId].push(newRequestId);
        userRequests[msg.sender].push(newRequestId);
        
        emit AccessRequested(_dataId, newRequestId, msg.sender, _duration);
    }

    function approveAccess(uint256 _dataId, uint256 _requestId) external nonReentrant {
        require(dataEntries[_dataId].owner == msg.sender, "Not the data owner");
        require(accessRequests[_dataId][_requestId].requester != address(0), "Request does not exist");
        require(!accessRequests[_dataId][_requestId].isApproved, "Request already approved");
        require(!accessRequests[_dataId][_requestId].isRevoked, "Request already revoked");
        
        accessRequests[_dataId][_requestId].isApproved = true;
        
        // Don't transfer payment immediately, keep it in contract for potential refund
        emit AccessApproved(_dataId, _requestId, accessRequests[_dataId][_requestId].requester);
    }

    function revokeAccess(uint256 _dataId, uint256 _requestId) external nonReentrant {
        require(dataEntries[_dataId].owner == msg.sender, "Not the data owner");
        require(accessRequests[_dataId][_requestId].isApproved, "Request not approved");
        require(!accessRequests[_dataId][_requestId].isRevoked, "Request already revoked");
        require(block.timestamp < accessRequests[_dataId][_requestId].endTime, "Access period ended");
        
        accessRequests[_dataId][_requestId].isRevoked = true;
        
        // Calculate refund based on remaining time
        uint256 remainingTime = accessRequests[_dataId][_requestId].endTime - block.timestamp;
        uint256 totalDuration = accessRequests[_dataId][_requestId].endTime - accessRequests[_dataId][_requestId].startTime;
        uint256 refundAmount = (DATA_PRICE * remainingTime * REFUND_PERCENTAGE) / (totalDuration * 100);
        
        // Transfer refund to requester
        (bool success, ) = accessRequests[_dataId][_requestId].requester.call{value: refundAmount}("");
        require(success, "Refund transfer failed");
        
        // Transfer remaining amount to data owner
        uint256 ownerAmount = DATA_PRICE - refundAmount;
        (success, ) = msg.sender.call{value: ownerAmount}("");
        require(success, "Owner payment transfer failed");
        
        emit RefundIssued(_dataId, _requestId, accessRequests[_dataId][_requestId].requester, refundAmount);
        emit AccessRevoked(_dataId, _requestId, accessRequests[_dataId][_requestId].requester);
    }

    // View Functions
    function getDataEntry(uint256 _dataId) external view returns (DataEntry memory) {
        return dataEntries[_dataId];
    }

    function getAccessRequest(uint256 _dataId, uint256 _requestId) external view returns (AccessRequest memory) {
        return accessRequests[_dataId][_requestId];
    }

    function getUserData(address _user) external view returns (uint256[] memory) {
        return userData[_user];
    }

    function getUserRequests(address _user) external view returns (uint256[] memory) {
        return userRequests[_user];
    }

    function getDataRequests(uint256 _dataId) external view returns (uint256[] memory) {
        return dataRequests[_dataId];
    }

    // Receive function to accept payments
    receive() external payable {}
}