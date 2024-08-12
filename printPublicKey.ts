import "dotenv/config";
import { Keypair } from "@solana/web3.js";

// Function to load and parse the secret key from environment variables
function loadKeypairFromEnv(): Keypair {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('SECRET_KEY is not set in the environment variables.');
  }

  let parsedKey;
  try {
    parsedKey = JSON.parse(secretKey);
  } catch (parseError) {
    throw new Error('SECRET_KEY is not a valid JSON array.');
  }

  if (!Array.isArray(parsedKey) || parsedKey.length !== 64) {
    throw new Error('SECRET_KEY must be an array of 64 numbers.');
  }

  return Keypair.fromSecretKey(Uint8Array.from(parsedKey));
}

// Main function to print the public key
function main() {
  try {
    const keypair = loadKeypairFromEnv();
    const publicKey = keypair.publicKey.toString();
    console.log(`🔑 Your public key is: ${publicKey}`);
  } catch (error) {
    console.error("Error loading keypair:", error.message);
  }
}

main();