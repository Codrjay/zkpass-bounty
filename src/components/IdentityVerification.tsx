// src/components/IdentityVerification.tsx
import React, { useState, useContext } from 'react';
import { WalletContext } from '../context/WalletContext';
import { verifyIdentityWithZKP } from '../utils/zkPassUtils';

const IdentityVerification = () => {
  const context = useContext(WalletContext);
  const { walletAddress } = context || {}; // Safe fallback if context is undefined
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleVerify = async () => {
    if (!walletAddress) {
      alert('Please connect your wallet first.');
      return;
    }

    setLoading(true);
    try {
      const result = await verifyIdentityWithZKP(walletAddress);
      setVerificationStatus(result ? 'Verification Successful' : 'Verification Failed');
    } catch (error) {
      console.error(error);
      setVerificationStatus('Error occurred during verification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Identity Verification</h2>
      <button onClick={handleVerify} disabled={loading}>
        {loading ? 'Verifying...' : 'Verify Identity'}
      </button>
      {verificationStatus && <p>{verificationStatus}</p>}
    </div>
  );
};

export default IdentityVerification;
