import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

async function checkBalance() {
  const publicKey = new PublicKey("9pkSVGCkeA2LyLa4ekQaPFZ9EnGi1ZQ1tMavFL46zyNu");
  const connection = new Connection("https://api.devnet.solana.com", "confirmed");

  const balanceInLamports = await connection.getBalance(publicKey);
  const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

  console.log(
    `💰 Finished! The balance for the wallet at address ${publicKey} is ${balanceInSOL} SOL!`,
  );
}

checkBalance().catch((error) => {
  console.error("Error checking balance:", error);
});