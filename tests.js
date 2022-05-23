// Credits to https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
const encrypt = require("./encrypt");
const decrypt = require("./decrypt");
const randomVimNumber = (length, chars) => {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

const test = () => {
  for (let i = 0; i < 99; i++) {
    let randomVim = randomVimNumber(17, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const encrpyted = encrypt(randomVim);
    const decrypted = decrypt(encrpyted)
    if (randomVim !== decrypted) {
      console.log("Erro")
    }
  }
}

test();
