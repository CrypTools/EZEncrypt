const cryptoX = require(`${__testDir}/../lib.js`);
const EncryptionText = "Hello";
const encryptedText = cryptoX.encrypt(EncryptionText, 10);
const expectedText = "720:1010:1080:1080:1110";
eye.describe("EZEncrypt", () => {
    eye.test("Encryption (Key is 10)", "node",
        $ => $(encryptedText === expectedText).Equal(true)
    )
    eye.test("Decryption (Key is 10)", "node",
        $ => $(cryptoX.decrypt(expectedText, 10) == EncryptionText).Equal(true)
    )
})
