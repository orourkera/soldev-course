import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

async function generateNewWallet() {
  // Create a new keypair
  const keypair = Keypair.generate();

  // Connect to the Solana Devnet
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  // Airdrop 1 SOL to the new wallet
  const airdropSignature = await connection.requestAirdrop(
    keypair.publicKey,
    1 * LAMPORTS_PER_SOL
  );

  // Confirm the transaction
  await connection.confirmTransaction(airdropSignature);

  console.log("New wallet generated:");
  console.log("Public Key:", keypair.publicKey.toBase58());
  console.log("Secret Key:", JSON.stringify(Array.from(keypair.secretKey)));
}

generateNewWallet().catch((error) => {
  console.error("Error generating new wallet:", error);
});