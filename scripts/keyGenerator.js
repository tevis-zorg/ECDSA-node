const secp = require ('ethereum-cryptography/secp256k1');
const {keccak256} = require('ethereum-cryptography/keccak');
const {toHex} = require('ethereum-cryptography/utils');

const privateKey = secp.utils.randomPrivateKey();

const publicKey = secp.getPublicKey(privateKey);
const address = keccak256(publicKey.slice(1)).slice(-20);

console.log({
    privateKey : toHex(privateKey),
    publicKey : toHex(publicKey),
    address : `0x${toHex(address)}`,
})

console.log(address.length);
