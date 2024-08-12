import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
    Keypair,
} from "@solana/web3.js";

// Replace this with your actual secret key
const secretKey = Uint8Array.from([
    235, 197, 218, 220, 156, 111, 174, 211, 1, 220, 131, 144, 208, 250, 38, 165, 81, 230, 223, 101, 59, 94, 62, 251, 153, 193, 198, 24,
    200, 226, 224, 137, 131, 24, 233, 26, 185, 66, 150, 129, 165, 135, 45, 153, 79, 238, 191, 68, 91, 63, 223, 150, 120, 43, 201, 171, 205, 68, 7, 141, 209, 244, 250, 174
]);

const suppliedToPubkey = process.argv[2] || null;
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}

console.log(
  `✅ Loaded our own keypair, the destination public key, and connected to Solana`,
);

const senderKeypair = Keypair.fromSecretKey(secretKey);

async function transfer() {
    const connection = new Connection("https://api.devnet.solana.com", "confirmed");

    const toPubkey = new PublicKey(suppliedToPubkey);

    const transaction = new Transaction().add(
        SystemProgram.transfer({
            fromPubkey: senderKeypair.publicKey,
            toPubkey,
            lamports: 1000000, // Amount to transfer (in lamports)
        })
    );

    const signature = await sendAndConfirmTransaction(connection, transaction, [senderKeypair]);

    console.log(`💸 Finished! Sent 1000000 lamports to the address ${toPubkey}.`);
    console.log(`Transaction signature is ${signature}!`);
}

transfer().catch((error) => {
    console.error("Error during transfer:", error);
});