// src/context/WalletContext.tsx
import React, { createContext, useState, ReactNode, useEffect } from 'react';

interface WalletContextType {
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
}

export const WalletContext = createContext<WalletContextType | undefined>(undefined);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Check if the wallet is already connected on page load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
        }
      }
    };

    checkWalletConnection();
  }, []);

  // Function to connect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('MetaMask not detected! Please install MetaMask.');
    }
  };

  // Function to disconnect the wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
  };

  return (
    <WalletContext.Provider value={{ walletAddress, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
