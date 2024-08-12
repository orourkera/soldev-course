import "dotenv/config";
import { Keypair } from "@solana/web3.js";

// Debugging: Print the raw SECRET_KEY environment
console.log("Raw SECRET_KEY:", process.env.SECRET_KEY);

try {
  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    throw new Error('SECRET_KEY is not set in the environment variables.');
  }

  // Debugging: Print the parsed SECRET_KEY
  let parsedKey;
  try {
    parsedKey = JSON.parse(secretKey);
    console.log("Parsed SECRET_KEY:", parsedKey);
  } catch (parseError) {
    throw new Error('SECRET_KEY is not a valid JSON array.');
  }

  // Additional Debugging: Check the type and length of the parsed key
  if (!Array.isArray(parsedKey) || parsedKey.length !== 64) {
    throw new Error('SECRET_KEY must be an array of 64 numbers.');
  }

  // Create Keypair from parsed secret key
  const keypair = Keypair.fromSecretKey(Uint8Array.from(parsedKey));
  console.log(`✅ Finished! We've loaded our secret key securely, using an env file!`);
} catch (error) {
  console.error("Error loading keypair:", error.message);
}