# Sui Dapp Frontend Starter

A starter template for a Sui dapp frontend, built with Next.js, Tailwind CSS, and Sui wallet integration.

## Features

- Sui wallet connect (Slush, Stashed, Phantom)
- Dashboard: balances, actions
- Transaction history
- Deployment history
- Modal confirmations
- Responsive design

## How to Use

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure Tailwind and environment.

3. Implement wallet and contract logic in `hooks/useSuiWallet.ts` and `hooks/useSuiContracts.ts`.

4. Run locally:

   ```bash
   npm run dev
   ```

## Next Steps

- Integrate @mysten/wallet-adapter for Sui wallet support.
- Connect to Sui chain using @mysten/sui.js.
- Build out UI for balances, transactions, deployments.
