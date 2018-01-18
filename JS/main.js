// Sascha-T created this file

// SymKey from Array of Numbers
function getSymKeyFromArray(symKeys) {
  var SymKey = symKeys[0];
  symKeys.shift();
  symKeys.forEach(function(element) {
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
    var KeyChain = [];
    while(strength > 0) {
        var e = random(1, 15);
        KeyChain.push(Math.round(e))
        console.log(Math.round(e))
        strength = strength - 1
    }
    return KeyChain
}

// ENCRYPTION
function encryptString(toEncrypt, symKey) {
    var final = "";
    var encrypted = [];
    var chars = [];
    var i = 0;
    toEncrypt.split("").forEach(function(element) {
        chars.push(element.charCodeAt());
        i++;
    });
    chars.forEach(function(element) {
        encrypted.push(parseInt(element) * symKey)
    });
    var iX = 0;
    encrypted.forEach(function(element) {
        final = final + element + ":"
        iX++;
    });
    final = final.substring(0, final.length - 1);
    return final;

}
// DECRYPTION
function decryptString(encrypted, symKey) {
    var encryptedArray = encrypted.split(":")
    var decryptedAscii = [];
    var decrypted = "";
    encryptedArray.forEach(function(element) {
        decryptedAscii.push(element / symKey)
    });
    decryptedAscii.forEach(function(element) {
        decrypted = decrypted + String.fromCharCode(parseInt(element))
    });
    return decrypted;
}
// CREATION OF KEY AUTOMATED 
function createKey(strength) {
   var keyChain = genKeyChain(stength);
   return getSymKeyFromArray(keyChain);
}
// Module Export
module.exports = {}
module.exports.encrypt = encryptString
module.exports.decrypt = decryptString
module.exports.keychainGen = genKeyChain
module.exports.getKey = getSymKeyFromArray
module.exports.makeKey = createKey
