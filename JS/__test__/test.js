var cryptoX = require(__testDir + "/../main.js")
try {
	//if(process.env.TRAVIS === "true") {
		// Import Eye.JS
		eye.describe("Utility Test", () => {
		    eye.test("Randomizer Test", "node",
			   $ => $(cryptoX.random(1, 10)).is('number')
			)	
		    eye.test("Key Chain Test", "node",
			   $ => $(Array.isArray(cryptoX.keychainGen(5))).Equal(true)
			)
		})
		var EncryptionText = "Hello";
		var encryptedText = cryptoX.encrypt(EncryptionText, 10)
		var expectedText = "720:1010:1080:1080:1110"
		eye.describe("Crypto", () => {
		    eye.test("Encryption (Key is 10)", "node",
			   $ => $(encryptedText === expectedText).Equal(true)
			)	
		    eye.test("Decryption (Key is 10)", "node",
			   $ => $(cryptoX.decrypt(expectedText, 10) == EncryptionText).Equal(true)
			)
		})
		
		console.log("Hello Travis!")
	/*} else {
		console.log("Hello!")
	}*/
} catch (ex) {
	console.log(ex.trace)
}
