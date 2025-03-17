// Pinata Configuration
const PINATA_API_KEY = '04b078e0ad30bb4a6dc1';
const PINATA_API_SECRET = '6302b6e79fbe0818f878fe2ac1694d6335a19f2c19c27947eef0d1cc70359184';
const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI0YTc5MTIyMC1mOTg2LTQ2OGEtYWFkMC04Y2VmMDU3ZmE4MDYiLCJlbWFpbCI6InNidmo3MjdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjA3OGUwYWQzMGJiNGE2ZGMxIiwic2NvcGVkS2V5U2VjcmV0IjoiNjMwMmI2ZTc5ZmJlMDgxOGY4NzhmZTJhYzE2OTRkNjMzNWExOWYyYzE5YzI3OTQ3ZWVmMGQxY2M3MDM1OTE4NCIsImV4cCI6MTc3MzczOTg1NX0.7zh6EHGHS-LssWoAFCG90Vtp0sIIbosKslm8n7-D2OA';

// Contract ABI - This would be generated when compiling the contract
const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			}
		],
		"name": "AccessApproved",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "AccessRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			}
		],
		"name": "AccessRevoked",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "enum DataRoots.DataCategory",
				"name": "category",
				"type": "uint8"
			}
		],
		"name": "DataUploaded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "dataId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "requestId",
				"type": "uint256"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefundIssued",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "DATA_PRICE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "REFUND_PERCENTAGE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accessRequests",
		"outputs": [
			{
				"internalType": "address",
				"name": "requester",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isApproved",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "isRevoked",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "approveAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dataEntries",
		"outputs": [
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "enum DataRoots.DataCategory",
				"name": "category",
				"type": "uint8"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "uploadTime",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dataRequests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "getAccessRequest",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "requester",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "startTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "isApproved",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRevoked",
						"type": "bool"
					}
				],
				"internalType": "struct DataRoots.AccessRequest",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			}
		],
		"name": "getDataEntry",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "enum DataRoots.DataCategory",
						"name": "category",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "isActive",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "uploadTime",
						"type": "uint256"
					}
				],
				"internalType": "struct DataRoots.DataEntry",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			}
		],
		"name": "getDataRequests",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserData",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getUserRequests",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "paymentTransferred",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_duration",
				"type": "uint256"
			}
		],
		"name": "requestAccess",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_dataId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_requestId",
				"type": "uint256"
			}
		],
		"name": "revokeAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ipfsHash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "enum DataRoots.DataCategory",
				"name": "_category",
				"type": "uint8"
			}
		],
		"name": "uploadData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "userRequests",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
];




// Contract address - This would be the deployed contract address
const contractAddress = "0x0049cb70A812CA1A8616e36af659f94aC372e9c5"; // Replace with actual address

// Global variables
let provider;
let signer;
let contract;
let currentAccount;

// DOM Elements
const connectWalletBtn = document.getElementById('connect-wallet');
const disconnectWalletBtn = document.getElementById('disconnect-wallet');
const accountInfo = document.getElementById('account-info');
const accountAddress = document.getElementById('account-address');
const accountBalance = document.getElementById('account-balance');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const closeNotificationBtn = document.getElementById('close-notification');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const uploadForm = document.getElementById('upload-form');
const userDataList = document.getElementById('user-data-list');
const allDataList = document.getElementById('all-data-list');
const incomingRequests = document.getElementById('incoming-requests');
const outgoingRequests = document.getElementById('outgoing-requests');
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close-modal');
const requestAccessForm = document.getElementById('request-access-form');
const dataIdInput = document.getElementById('data-id');
const fileUpload = document.getElementById('file-upload');
const ipfsHashInput = document.getElementById('ipfs-hash');

// Initialize the application
async function init() {
    setupEventListeners();
    
    // Check if MetaMask is installed
    if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Check if already connected
        const accounts = await provider.listAccounts();
        if (accounts.length > 0) {
            await connectWallet();
        }
    } else {
        showNotification('Please install MetaMask to use this application', 'error');
    }
}

// Setup event listeners
function setupEventListeners() {
    const connectWalletBtn = document.getElementById('connect-wallet');
    const disconnectWalletBtn = document.getElementById('disconnect-wallet');
    const uploadForm = document.getElementById('upload-form');
    const requestAccessForm = document.getElementById('request-access-form');
    const fileUpload = document.getElementById('file-upload');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');

    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', async () => {
            try {
                await connectWallet();
            } catch (error) {
                console.error('Failed to connect wallet:', error);
                showNotification('Failed to connect wallet. Please try again.', 'error');
            }
        });
    }

    if (disconnectWalletBtn) {
        disconnectWalletBtn.addEventListener('click', disconnectWallet);
    }

    if (uploadForm) {
        uploadForm.addEventListener('submit', handleUpload);
    }

    if (requestAccessForm) {
        requestAccessForm.addEventListener('submit', handleRequestAccess);
    }

    if (fileUpload) {
        fileUpload.addEventListener('change', handleFileSelect);
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }
    
    // Close notification
    closeNotificationBtn.addEventListener('click', () => {
        notification.classList.add('hidden');
    });
    
    // Tab navigation
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to selected tab
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
}

// Connect to wallet
async function connectWallet() {
    try {
        if (!window.ethereum) {
            showNotification('Please install MetaMask to use this application', 'error');
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const balance = await provider.getBalance(address);
        const formattedBalance = ethers.utils.formatEther(balance);

        // Update UI
        document.getElementById('connect-wallet').classList.add('hidden');
        document.getElementById('disconnect-wallet').classList.remove('hidden');
        document.getElementById('account-info').classList.remove('hidden');
        document.getElementById('account-address').textContent = `${address.slice(0, 6)}...${address.slice(-4)}`;
        document.getElementById('account-balance').textContent = parseFloat(formattedBalance).toFixed(4);

        showNotification('Wallet connected successfully!', 'success');
    } catch (error) {
        console.error('Error connecting wallet:', error);
        showNotification('Failed to connect wallet. Please try again.', 'error');
    }
}

async function disconnectWallet() {
    try {
        // Clear any stored wallet data
        localStorage.removeItem('walletAddress');
        localStorage.removeItem('walletBalance');

        // Reset UI
        document.getElementById('connect-wallet').classList.remove('hidden');
        document.getElementById('disconnect-wallet').classList.add('hidden');
        document.getElementById('account-info').classList.add('hidden');
        document.getElementById('account-address').textContent = '0x0000...0000';
        document.getElementById('account-balance').textContent = '0.00';

        showNotification('Wallet disconnected successfully', 'success');
    } catch (error) {
        console.error('Error disconnecting wallet:', error);
        showNotification('Failed to disconnect wallet. Please try again.', 'error');
    }
}

// Load user's data
async function loadUserData() {
    try {
        userDataList.innerHTML = '<p class="loading">Loading your data...</p>';
        
        // Get data you own
        const ownedDataIds = await contract.getUserData(currentAccount);
        
        // Get your approved requests
        const userRequestIds = await contract.getUserRequests(currentAccount);
        const approvedDataIds = new Set();
        
        // Check each request to find approved ones
        for (const requestId of userRequestIds) {
            try {
                const request = await contract.getAccessRequest(requestId, requestId);
                if (request.isApproved && !request.isRevoked && Date.now() / 1000 < request.endTime) {
                    approvedDataIds.add(requestId);
                }
            } catch (error) {
                continue;
            }
        }
        
        // Combine owned and approved data IDs
        const allDataIds = [...new Set([...ownedDataIds, ...approvedDataIds])];
        
        if (allDataIds.length === 0) {
            userDataList.innerHTML = '<p class="empty-message">You have no data or approved access yet</p>';
            return;
        }
        
        let html = '';
        
        for (const dataId of allDataIds) {
            const data = await contract.getDataEntry(dataId);
            const isOwner = data.owner.toLowerCase() === currentAccount.toLowerCase();
            
            html += `
                <div class="data-card">
                    <h3>${data.name}</h3>
                    <p><strong>IPFS Hash:</strong> <span class="ipfs-hash">${data.ipfsHash}</span>
                        <button class="copy-btn" onclick="copyToClipboard('${data.ipfsHash}')">Copy</button>
                    </p>
                    <p><strong>Category:</strong> ${data.category === 0 ? 'Personal' : 'Educational'}</p>
                    <p><strong>Upload Time:</strong> ${formatDate(data.uploadTime)}</p>
                    <p><strong>Status:</strong> ${data.isActive ? 'Active' : 'Inactive'}</p>
                    <p><strong>Access Type:</strong> ${isOwner ? 'Owner' : 'Granted Access'}</p>
                    <div class="actions">
                        <a href="https://ipfs.io/ipfs/${data.ipfsHash}" target="_blank" class="view-btn">View File</a>
                        ${isOwner ? `
                            <button onclick="toggleDataListing(${dataId}, ${data.isActive})" class="list-btn">
                                ${data.isActive ? 'Remove from Marketplace' : 'List in Marketplace'}
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
        }
        
        userDataList.innerHTML = html;
    } catch (error) {
        console.error('Error loading user data:', error);
        userDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
    }
}

// Add copy to clipboard function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('IPFS hash copied to clipboard', 'success');
    }).catch(err => {
        showNotification('Failed to copy hash', 'error');
    });
}

// Load all data
async function loadAllData() {
    try {
        allDataList.innerHTML = '<p class="loading">Loading available data...</p>';
        
        // In a real application, you would need a way to get all data IDs
        // For this example, we'll assume data IDs are sequential from 1 to 10
        const maxDataId = 10; // This would be dynamic in a real app
        let html = '';
        let dataCount = 0;
        
        for (let i = 1; i <= maxDataId; i++) {
            try {
                const data = await contract.getDataEntry(i);
                
                // Skip if data is not active or if it's the current user's data
                if (!data.isActive || data.owner.toLowerCase() === currentAccount.toLowerCase()) {
                    continue;
                }
                
                dataCount++;
                
                html += `
                    <div class="data-card">
                        <h3>${data.name}</h3>
                        <p><strong>Owner:</strong> ${truncateString(data.owner, 10)}</p>
                        <p><strong>IPFS Hash:</strong> ${truncateString(data.ipfsHash, 20)}</p>
                        <p><strong>Category:</strong> ${data.category === 0 ? 'Personal' : 'Educational'}</p>
                        <p><strong>Upload Time:</strong> ${formatDate(data.uploadTime)}</p>
                        <div class="actions">
                            <button onclick="openRequestModal(${i})">Request Access</button>
                        </div>
                    </div>
                `;
            } catch (error) {
                // Skip if data doesn't exist
                continue;
            }
        }
        
        if (dataCount === 0) {
            allDataList.innerHTML = '<p class="empty-message">No data available</p>';
        } else {
            allDataList.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading all data:', error);
        allDataList.innerHTML = '<p class="empty-message">Error loading data. Please try again.</p>';
    }
}

// Load requests
async function loadRequests() {
    try {
        incomingRequests.innerHTML = '<p class="loading">Loading incoming requests...</p>';
        outgoingRequests.innerHTML = '<p class="loading">Loading outgoing requests...</p>';
        
        // Get user's data
        const dataIds = await contract.getUserData(currentAccount);
        
        // Process incoming requests
        let incomingHtml = '';
        let incomingCount = 0;
        
        for (const dataId of dataIds) {
            const requestIds = await contract.getDataRequests(dataId);
            
            for (const requestId of requestIds) {
                try {
                    const request = await contract.getAccessRequest(dataId, requestId);
                    const data = await contract.getDataEntry(dataId);
                    
                    incomingCount++;
                    
                    let statusClass = 'pending';
                    let statusText = 'Pending';
                    let actions = `<button onclick="approveRequest(${dataId}, ${requestId})">Approve</button>`;
                    
                    if (request.isApproved) {
                        statusClass = 'approved';
                        statusText = 'Approved';
                        
                        if (!request.isRevoked && Date.now() / 1000 < request.endTime) {
                            actions = `<button onclick="revokeRequest(${dataId}, ${requestId})">Revoke</button>`;
                        } else if (request.isRevoked) {
                            statusClass = 'revoked';
                            statusText = 'Revoked';
                            actions = '';
                        } else {
                            statusText = 'Expired';
                            actions = '';
                        }
                    }
                    
                    incomingHtml += `
                        <div class="request-card">
                            <h4>Request for "${data.name}"</h4>
                            <span class="status ${statusClass}">${statusText}</span>
                            <p><strong>Requester:</strong> ${truncateString(request.requester, 10)}</p>
                            <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                            <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                            <div class="actions">
                                ${actions}
                            </div>
                        </div>
                    `;
                } catch (error) {
                    console.error('Error processing request:', error);
                    continue;
                }
            }
        }
        
        if (incomingCount === 0) {
            incomingRequests.innerHTML = '<p class="empty-message">No incoming requests</p>';
        } else {
            incomingRequests.innerHTML = incomingHtml;
        }
        
        // Process outgoing requests
        const userRequestIds = await contract.getUserRequests(currentAccount);
        let outgoingHtml = '';
        
        if (userRequestIds.length === 0) {
            outgoingRequests.innerHTML = '<p class="empty-message">No outgoing requests</p>';
            return;
        }
        
        for (const requestId of userRequestIds) {
            try {
                // Try to find the data ID associated with this request
                let foundDataId = null;
                for (let i = 1; i <= 10; i++) { // Assuming max data ID is 10
                    try {
                        const request = await contract.getAccessRequest(i, requestId);
                        if (request.requester.toLowerCase() === currentAccount.toLowerCase()) {
                            foundDataId = i;
                            break;
                        }
                    } catch (error) {
                        continue;
                    }
                }
                
                if (foundDataId) {
                    const request = await contract.getAccessRequest(foundDataId, requestId);
                    const data = await contract.getDataEntry(foundDataId);
                    
                    let statusClass = 'pending';
                    let statusText = 'Pending';
                    
                    if (request.isApproved) {
                        statusClass = 'approved';
                        statusText = 'Approved';
                        
                        if (request.isRevoked) {
                            statusClass = 'revoked';
                            statusText = 'Revoked';
                        } else if (Date.now() / 1000 > request.endTime) {
                            statusText = 'Expired';
                        }
                    }
                    
                    outgoingHtml += `
                        <div class="request-card">
                            <h4>Request for "${data.name}"</h4>
                            <span class="status ${statusClass}">${statusText}</span>
                            <p><strong>Start Time:</strong> ${formatDate(request.startTime)}</p>
                            <p><strong>End Time:</strong> ${formatDate(request.endTime)}</p>
                        </div>
                    `;
                }
            } catch (error) {
                console.error('Error processing outgoing request:', error);
                continue;
            }
        }
        
        outgoingRequests.innerHTML = outgoingHtml;
    } catch (error) {
        console.error('Error loading requests:', error);
        incomingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
        outgoingRequests.innerHTML = '<p class="empty-message">Error loading requests. Please try again.</p>';
    }
}

// Handle upload data
async function handleUploadData(e) {
    e.preventDefault();
    
    const file = fileUpload.files[0];
    const category = parseInt(document.getElementById('data-category').value);
    const dataName = document.getElementById('data-name').value;
    
    if (!file) {
        showNotification('Please select a file to upload', 'error');
        return;
    }
    
    if (!dataName) {
        showNotification('Please enter a name for your data', 'error');
        return;
    }
    
    try {
        showNotification('Uploading file to IPFS...', 'info');
        
        // Create FormData for file upload
        const formData = new FormData();
        formData.append('file', file);
        
        // Upload file to Pinata using their API
        const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${PINATA_JWT}`
            },
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Failed to upload to IPFS');
        }
        
        const result = await response.json();
        const ipfsHash = result.IpfsHash;
        
        // Update the IPFS hash input
        ipfsHashInput.value = ipfsHash;
        
        showNotification('File uploaded to IPFS, now uploading to blockchain...', 'info');
        
        // Upload to blockchain
        const tx = await contract.uploadData(ipfsHash, dataName, category);
        await tx.wait();
        
        showNotification('Data uploaded successfully', 'success');
        
        // Reset form
        fileUpload.value = '';
        ipfsHashInput.value = '';
        document.getElementById('data-name').value = '';
        
        // Reload data
        loadUserData();
    } catch (error) {
        console.error('Error uploading data:', error);
        showNotification('Failed to upload data: ' + error.message, 'error');
    }
}

// Open request access modal
function openRequestModal(dataId) {
    dataIdInput.value = dataId;
    modal.classList.remove('hidden');
}

// Handle request access
async function handleRequestAccess(e) {
    e.preventDefault();
    
    const dataId = dataIdInput.value;
    const duration = document.getElementById('access-duration').value;
    
    if (!dataId || !duration) {
        showNotification('Invalid request parameters', 'error');
        return;
    }
    
    try {
        showNotification('Requesting access...', 'info');
        
        // Get data price
        const dataPrice = await contract.DATA_PRICE();
        
        // Convert duration to seconds
        const durationInSeconds = duration * 24 * 60 * 60;
        
        const tx = await contract.requestAccess(dataId, durationInSeconds, {
            value: dataPrice
        });
        await tx.wait();
        
        showNotification('Access requested successfully', 'success');
        
        // Close modal
        modal.classList.add('hidden');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error requesting access:', error);
        showNotification('Failed to request access', 'error');
    }
}

// Approve request
async function approveRequest(dataId, requestId) {
    try {
        showNotification('Approving request...', 'info');
        
        const tx = await contract.approveAccess(dataId, requestId);
        await tx.wait();
        
        showNotification('Request approved successfully', 'success');
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error approving request:', error);
        showNotification('Failed to approve request', 'error');
    }
}

// Revoke request
async function revokeRequest(dataId, requestId) {
    try {
        showNotification('Revoking access...', 'info');
        
        // Get the request details first to check if it's still valid
        const request = await contract.getAccessRequest(dataId, requestId);
        console.log('Request details:', request);
        
        // Check if the request is already revoked or expired
        if (request.isRevoked) {
            showNotification('This access has already been revoked', 'warning');
            return;
        }
        
        if (Date.now() / 1000 > request.endTime) {
            showNotification('This access has already expired', 'warning');
            return;
        }
        
        // Get the data entry to verify ownership
        const data = await contract.getDataEntry(dataId);
        if (data.owner.toLowerCase() !== currentAccount.toLowerCase()) {
            showNotification('You are not authorized to revoke this access', 'error');
            return;
        }
        
        // Get contract balance before revoking
        const contractBalance = await provider.getBalance(contractAddress);
        console.log('Contract balance:', ethers.utils.formatEther(contractBalance));
        
        // Get the data price and refund percentage
        const dataPrice = await contract.DATA_PRICE();
        const refundPercentage = await contract.REFUND_PERCENTAGE();
        
        // Calculate remaining time for refund
        const remainingTime = request.endTime - Math.floor(Date.now() / 1000);
        const totalDuration = request.endTime - request.startTime;
        
        // Calculate refund amount
        const refundAmount = dataPrice.mul(remainingTime).mul(refundPercentage).div(totalDuration).div(100);
        
        console.log('Refund details:', {
            dataPrice: ethers.utils.formatEther(dataPrice),
            refundPercentage: refundPercentage.toString(),
            remainingTime: remainingTime,
            totalDuration: totalDuration,
            refundAmount: ethers.utils.formatEther(refundAmount)
        });
        
        // Check if contract has enough balance for refund
        if (contractBalance.lt(refundAmount)) {
            // If contract doesn't have enough balance, show a warning but still allow revoking
            showNotification('Warning: Contract has insufficient balance for refund. Access will be revoked without refund.', 'warning');
            
            // Add a small delay to let the user see the warning
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        // Estimate gas for the transaction
        const gasEstimate = await contract.estimateGas.revokeAccess(dataId, requestId);
        console.log('Estimated gas:', gasEstimate.toString());
        
        // Add 20% buffer to gas estimate
        const gasLimit = gasEstimate.mul(120).div(100);
        
        // Revoke access
        const tx = await contract.revokeAccess(dataId, requestId, {
            gasLimit: gasLimit
        });
        
        console.log('Transaction sent:', tx.hash);
        
        // Wait for transaction receipt
        const receipt = await tx.wait();
        console.log('Transaction receipt:', receipt);
        
        // Check if the refund was issued
        const refundEvent = receipt.events.find(e => e.event === 'RefundIssued');
        if (refundEvent) {
            showNotification('Access revoked successfully and refund issued', 'success');
        } else {
            showNotification('Access revoked successfully', 'success');
        }
        
        // Reload requests
        loadRequests();
    } catch (error) {
        console.error('Error revoking access:', error);
        
        // Log detailed error information
        if (error.data) {
            console.error('Error data:', error.data);
        }
        if (error.transaction) {
            console.error('Transaction:', error.transaction);
        }
        if (error.code) {
            console.error('Error code:', error.code);
        }
        if (error.reason) {
            console.error('Error reason:', error.reason);
        }
        
        // Provide more specific error messages
        if (error.message.includes('Refund transfer failed')) {
            showNotification('Failed to revoke access: Refund transfer failed. Please try again or contact support.', 'error');
        } else if (error.message.includes('insufficient funds')) {
            showNotification('Failed to revoke access: Insufficient funds for gas fee', 'error');
        } else if (error.message.includes('execution reverted')) {
            showNotification('Failed to revoke access: Transaction reverted. Please try again or contact support.', 'error');
        } else if (error.message.includes('nonce too low')) {
            showNotification('Failed to revoke access: Transaction nonce too low. Please try again.', 'error');
        } else if (error.message.includes('already known')) {
            showNotification('Failed to revoke access: Transaction already in progress. Please wait.', 'error');
        } else {
            showNotification('Failed to revoke access: ' + error.message, 'error');
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    // Add styles based on type
    if (type === 'success') {
        notification.style.backgroundColor = 'rgba(46, 204, 113, 0.9)';
        notification.style.borderLeft = '4px solid #2ecc71';
    } else if (type === 'error') {
        notification.style.backgroundColor = 'rgba(231, 76, 60, 0.9)';
        notification.style.borderLeft = '4px solid #e74c3c';
    }

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Helper function to truncate strings
function truncateString(str, length) {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
}

// Helper function to format dates
function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Make functions available globally
window.openRequestModal = openRequestModal;
window.approveRequest = approveRequest;
window.revokeRequest = revokeRequest;
window.copyToClipboard = copyToClipboard;

// Add function to toggle data listing
async function toggleDataListing(dataId, isCurrentlyActive) {
    try {
        showNotification(isCurrentlyActive ? 'Removing from marketplace...' : 'Listing in marketplace...', 'info');
        
        // Get the data entry to verify ownership
        const data = await contract.getDataEntry(dataId);
        if (data.owner.toLowerCase() !== currentAccount.toLowerCase()) {
            showNotification('You are not authorized to modify this data', 'error');
            return;
        }
        
        // For now, we'll just show a message that this feature requires a contract update
        showNotification('This feature requires a contract update. Please contact the administrator.', 'warning');
        
        // TODO: Once the contract is updated with toggleDataActive function, uncomment this code:
        /*
        const tx = await contract.toggleDataActive(dataId);
        const receipt = await tx.wait();
        
        if (receipt.status === 1) {
            showNotification(isCurrentlyActive ? 'Data removed from marketplace' : 'Data listed in marketplace', 'success');
            loadUserData();
            loadAllData();
        } else {
            throw new Error('Transaction failed');
        }
        */
    } catch (error) {
        console.error('Error toggling data listing:', error);
        showNotification('Failed to update marketplace status: ' + error.message, 'error');
    }
}
