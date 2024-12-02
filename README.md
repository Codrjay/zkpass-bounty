
# Wallet Connection and Identity Verification Application

This application demonstrates how to connect a user's Ethereum wallet (such as MetaMask) and verify their identity using zkPass.

## Features

- **Connect Wallet**: Allows users to connect their Ethereum wallet to the application using MetaMask or another Ethereum-compatible wallet. 
- **Verify Identity**: Once the wallet is connected, users can verify their identity with zkPass, a service for privacy-preserving identity verification.
- **Back Button**: After successfully verifying the user's identity, a back button is displayed that allows the user to navigate back to the previous page.
- **Dynamic UI**: The UI updates to reflect the wallet connection status, verification status, and provides real-time feedback to the user.

## Flow

1. **Connect Wallet**: The user clicks the 'Connect Wallet' button. MetaMask will prompt the user to grant access to their wallet.
2. **Verify Identity**: After the wallet is connected, the 'Verify Identity' button will appear. Clicking this will send a request to zkPass for verification.
3. **Back Button**: After the identity is verified, the user will see a 'Back' button which will navigate them back to the previous page.

## Technologies Used

- **React.js**: Frontend framework used to build the user interface.
- **MetaMask / Ethereum**: For connecting the user's wallet and interacting with Ethereum.
- **zkPass**: Service used for identity verification based on zero-knowledge proofs (ZKPs).
- **Axios**: For making HTTP requests to the zkPass API.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/zkpass-wallet-verification.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Conclusion

This application serves as a simple demonstration of integrating Ethereum wallet connection and identity verification via zkPass, enabling privacy-preserving authentication in decentralized applications (dApps).
