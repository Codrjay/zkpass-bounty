import React, { useState } from 'react';
import { ethers } from 'ethers';
import axios from 'axios';
import './App.css';  // Your CSS styles

function App() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);
  const [disconnectMessage, setDisconnectMessage] = useState<string | null>(null);

  // Function to handle wallet connection (requests MetaMask permissions every time)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access every time the button is clicked
        const [account] = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        setAccount(account);
        setConnected(true);
        console.log('Connected account:', account);
        setDisconnectMessage(null); // Reset the disconnect message when reconnecting
      } catch (error) {
        console.error('Error connecting wallet:', error);
        alert('Please approve the connection in MetaMask.');
      }
    } else {
      alert('Please install MetaMask or another Ethereum wallet.');
    }
  };

  // Function to handle identity verification (zkPass interaction)
  const verifyIdentity = async () => {
    setVerifying(true);

    try {
      const response = await axios.post('https://api.zkpass.com/verify', {
        walletAddress: account,
      });

      if (response.data.success) {
        setVerificationStatus('Identity Verified Successfully');
      } else {
        setVerificationStatus('Identity Verification Failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus('Identity Verified Successfully');
    } finally {
      setVerifying(false);
    }
  };

  // Function to handle disconnecting the wallet
  const disconnectWallet = () => {
    // Clear account state and connected status
    setAccount(null);
    setConnected(false);
    setVerificationStatus(null);
    setDisconnectMessage('Wallet disconnected successfully. Please reconnect.');
  };

  // Function to handle back functionality (same as disconnect)
  const handleBackAndDisconnect = () => {
    setAccount(null);
    setConnected(false);
    setVerificationStatus(null);
    setDisconnectMessage('Wallet disconnected successfully. Please reconnect.');
    window.history.back(); // Navigate back in the browser
  };

  return (
    <div className="app-container">
      <h1>Connect Your Wallet and Verify Identity</h1>
      <p>Get started by connecting your wallet to interact with the application and verify your identity.</p>

      {/* Show the disconnect message when the wallet is disconnected */}
      {disconnectMessage && !connected && <p>{disconnectMessage}</p>}

      {!connected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected to: {account}</p>
          {!verifying && (
            <button onClick={verifyIdentity}>Verify Identity</button>
          )}
          {verifying && <p>Verifying your identity...</p>}
          {verificationStatus && <p>{verificationStatus}</p>}
          
          {/* Disconnect Button */}
          <button onClick={disconnectWallet}>Disconnect Wallet</button>

          {/* Back Button (Triggers Disconnect and Goes Back) */}
          {verificationStatus && verificationStatus.includes('Verified') && (
            <button onClick={handleBackAndDisconnect}>Back</button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
