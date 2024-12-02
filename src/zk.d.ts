// src/types/zkpass.d.ts
declare module '@zkpass/transgate-js-sdk' {
    export class Transgate {
      static verify(walletAddress: string): Promise<{ success: boolean }>;
    }
  }
  