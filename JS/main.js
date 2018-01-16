
// Keychain
var symKeysX = [4, 9, 5, 6, 18]
var toEncryptX = "Hallo!"
function getSymKeyFromArray(symKeys) {
  var SymKey = symKeys[0];
  symKeys.shift();
  symKeys.forEach(function(element) {
      SymKey = SymKey * parseInt(element)
  });
  return SymKey;
}
function random(min, max) {
    return Math.random() * (max - min) + min;
}
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
// var symKeyX = getSymKeyX(symKeysX)
var symKeyX = getSymKeyFromArray(genKeyChain(3))
console.log(symKeyX)
// Do the magic
function encrypt(toEncrypt, symKey) {
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
function decrypt(encrypted, symKey) {
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
var b = encrypt(toEncryptX, symKeyX)
console.log(b)
console.log(decrypt(b, symKeyX))
