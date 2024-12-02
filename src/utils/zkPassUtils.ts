// src/utils/zkPassUtils.ts
import { Transgate } from '@zkpass/transgate-js-sdk';

export const verifyIdentityWithZKP = async (walletAddress: string) => {
  try {
    const transgate = new Transgate();
    const verificationResult = await Transgate.verify(walletAddress);

    if (verificationResult.success) {
      return true; // Verification successful
    } else {
      return false; // Verification failed
    }
  } catch (error) {
    console.error('Error verifying identity with ZKP:', error);
    throw new Error('Verification failed');
  }
};
