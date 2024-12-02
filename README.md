
# Connect and Verify Your Wallet

## Overview
This project is a decentralized web application designed to allow users to connect their Ethereum wallet (such as MetaMask) and verify their identity via zkPass, a zero-knowledge proof (ZKP)-based verification service. The app ensures a smooth user experience by allowing users to seamlessly connect their wallet, verify their identity, and handle wallet disconnections. Additionally, the user can navigate back to the previous page after completing the identity verification process.

This application combines the power of blockchain and privacy-focused identity verification with zkPass to deliver a secure and user-friendly experience.

## Features
### 1. Connect Wallet
- Users can easily connect their Ethereum wallet (e.g., MetaMask) by clicking the "Connect Wallet" button.
- Every time the button is clicked, the application requests permission from MetaMask to connect to the user’s wallet.
- Upon successful connection, the wallet address is displayed on the screen, confirming the connection.

### 2. Verify Identity
- After connecting the wallet, users can proceed to verify their identity using zkPass.
- When the "Verify Identity" button is clicked, the application sends the user's wallet address to the zkPass API for identity verification.
- The verification status is displayed, indicating whether the identity verification was successful or not.
- If verification fails, the app will notify the user accordingly.

### 3. Back Functionality
- After the user completes the identity verification process, the "Back" button appears.
- Clicking the "Back" button takes the user to the previous page using React Router’s `history.goBack()` method.

### 4. Disconnect Wallet
- Users can disconnect their wallet at any time by clicking the "Disconnect Wallet" button.
- When clicked, the wallet connection is cleared, and the app's state is reset, ensuring that the user is no longer connected.

## How It Works
### 1. MetaMask Integration
- The app utilizes the MetaMask extension to allow users to connect their Ethereum wallet.
- When the "Connect Wallet" button is clicked, the app requests access to the user's Ethereum account using `window.ethereum.request({ method: 'eth_requestAccounts' })`. This triggers MetaMask's prompt, asking the user to approve the connection.

### 2. Identity Verification with zkPass
- Once the wallet is connected, users can click the "Verify Identity" button to send a request to the zkPass API.
- The app makes an HTTP POST request with the user’s wallet address (and other necessary data) to the zkPass API endpoint.
- If the verification is successful, the user is notified that their identity is verified. If not, the app will notify the user of the failure.

### 3. Back and Disconnect Buttons
- The "Back" button will only appear after the identity verification process is complete.
- The "Back" button uses React Router’s `useHistory` hook and the `goBack()` method to navigate the user back to the previous page.
- The "Disconnect Wallet" button will clear the wallet’s connection and reset the app’s state, allowing the user to disconnect their wallet whenever they choose.

## Installation
1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/connect-wallet-verify.git
   cd connect-wallet-verify
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Conclusion

This application serves as a simple demonstration of integrating Ethereum wallet connection and identity verification via zkPass, enabling privacy-preserving authentication in decentralized applications (dApps).
