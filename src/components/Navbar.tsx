// src/components/Navbar.tsx
import React, { useContext } from 'react';
import { WalletContext } from '../context/WalletContext';

const Navbar = () => {
  const context = useContext(WalletContext);

  // Ensure the context is not undefined
  if (!context) {
    return <div>Error: WalletContext is not provided!</div>;
  }

  const { walletAddress, connectWallet, disconnectWallet } = context;

  return (
    <nav>
      <h1>zkPass Identity Verification</h1>
      {walletAddress ? (
        <div>
          <p>Connected: {walletAddress}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </nav>
  );
};

export default Navbar;
