# DataRoots Frontend

A simple HTML, CSS, and JavaScript frontend for interacting with the DataRoots smart contract.

## Overview

This frontend allows users to:

- Connect their Ethereum wallet (MetaMask)
- Upload data to the blockchain (by providing IPFS hashes)
- Browse available data from other users
- Request access to data
- Approve or revoke access requests
- View incoming and outgoing access requests

## Setup Instructions

1. Deploy the DataRoots smart contract to an Ethereum network (mainnet, testnet, or local)
2. Update the `contractAddress` variable in `js/app.js` with your deployed contract address
3. Serve the frontend files using a web server

### Quick Start with a Local Server

You can use any simple HTTP server to serve the files. For example:

#### Using Python:

```bash
cd frontend
python -m http.server 8000
```

Then open your browser and navigate to `http://localhost:8000`

#### Using Node.js:

Install a simple HTTP server:
```bash
npm install -g http-server
```

Then run:
```bash
cd frontend
http-server
```

## Usage

1. Connect your MetaMask wallet by clicking the "Connect Wallet" button
2. Use the tabs to navigate between different sections:
   - **Upload Data**: Add your data to the blockchain
   - **My Data**: View data you've uploaded
   - **Browse Data**: Discover and request access to data from others
   - **Access Requests**: Manage incoming and outgoing access requests

## Contract Integration

The frontend interacts with the DataRoots smart contract using ethers.js. The contract ABI is defined in `js/app.js`.

## Notes

- This is a simple frontend implementation and may need additional features for production use
- IPFS integration is simplified - in a real application, you would need to implement actual IPFS file uploads
- The contract address in the code is a placeholder and needs to be updated with your actual deployed contract address
- MetaMask or a similar Ethereum wallet is required to use this application 