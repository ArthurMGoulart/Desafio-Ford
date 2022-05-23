const decrypt = (encrypted) => {
  // Get cesar key used to encrypt, that is on last index of encrypted message
  // Pega a chave de césar que está contida na última posição da mensagem encriptada
  const CESAR_KEY = parseInt(encrypted[encrypted.length - 1], 10);
  // Remove last index
  // Retira a última posição
  encrypted = encrypted.slice(0, -1);
  let result = "";
  for (let i = 0; i < encrypted.length; i++) {
    // Character to Ascii - 2 - cesar key and add to result string
    // Transforma o character em ASCII subtrai 2 fixo - a chave de césar
    result += String.fromCharCode(encrypted.charCodeAt(i) - 2 - CESAR_KEY);
  }
  return result;
}

console.log(decrypt(":QPLVA;?<<J99=<>;7"));

module.exports = decrypt;
