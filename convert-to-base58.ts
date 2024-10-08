import bs58 from 'bs58';

// Your secret key as an array of numbers
const secretKeyArray = [
    235, 197, 218, 220, 156, 111, 174, 211, 1, 220, 131, 144, 208, 250, 38, 165, 81, 230, 223, 101, 59, 94, 62, 251, 153, 193, 198, 24,
    200, 226, 224, 137, 131, 24, 233, 26, 185, 66, 150, 129, 165, 135, 45, 153, 79, 238, 191, 68, 91, 63, 223, 150, 120, 43, 201, 171,
    205, 68, 7, 141, 209, 244, 250, 174
];

// Convert the array to a Uint8Array
const secretKeyUint8Array = Uint8Array.from(secretKeyArray);

// Encode the Uint8Array as a base58 string
const base58SecretKey = bs58.encode(secretKeyUint8Array);

console.log(base58SecretKey);