/***********NodeJS*************


const ez = require("./lib")

ez.encrypt("Hello", 10)
=> "720:1010:1080:1080:1110"
ez.decrypt("720:1010:1080:1080:1110", 10)
=> "Hello"


******************************/
// SymKey from Array of Numbers
function getSymKeyFromArray(symKeys) {
    let SymKey = symKeys[0];
    symKeys.shift();
    symKeys.forEach(element => {
        SymKey = SymKey * parseInt(element)
    });
    return SymKey;
}
// Random
function random(min, max) {
    return Math.random() * (max - min) + min;
}
// Generate Keychain
function genKeyChain(strength) {
    const KeyChain = [];
    while (strength > 0) {
        const e = random(1, 15);
        KeyChain.push(Math.round(e))
        strength = strength - 1
    }
    return KeyChain
}

// ENCRYPTION
function encryptString(toEncrypt, symKey) {
    let output = "";
    const encrypted = [];
    const chars = [];
    let i = 0;
    toEncrypt.split("").forEach(element => {
        chars.push(element.charCodeAt());
        i++;
    });
    chars.forEach(element => {
        encrypted.push(parseInt(element) * symKey)
    });
    let iX = 0;
    encrypted.forEach(element => {
        output = `${output + element}:`
        iX++;
    });
    output = output.substring(0, output.length - 1);
    return output;

}
// DECRYPTION
function decryptString(encrypted, symKey) {
    const encryptedArray = encrypted.split(":");
    const decryptedAscii = [];
    let decrypted = "";
    encryptedArray.forEach(element => {
        decryptedAscii.push(element / symKey)
    });
    decryptedAscii.forEach(element => {
        decrypted = decrypted + String.fromCharCode(parseInt(element))
    });
    return decrypted;
}
// CREATION OF KEY AUTOMATED 
function createKey(strength) {
    const keyChain = genKeyChain(strength);
    return getSymKeyFromArray(keyChain);
}

// Module Export
export default {};

export {encryptString as encrypt};
export {decryptString as decrypt};
export {genKeyChain as keychainGen};
export {getSymKeyFromArray as getKey};
export {createKey as makeKey};
