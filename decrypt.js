const decrypt = (encrypted) => {
  // Pega a chave de césar que está contida na última posição da mensagem encriptada
  const CESAR_KEY = parseInt(encrypted[encrypted.length - 1], 10);
  // Retira a última posição
  encrypted = encrypted.slice(0, -1);
  let result = "";
  for (let i = 0; i < encrypted.length; i++) {
    // Transforma o character em ASCII subtrai 2 fixo - a chave de césar
    result += String.fromCharCode(encrypted.charCodeAt(i) - 2 - CESAR_KEY);
  }
  return result;
}

console.log(decrypt(":QPLVA;?<<J99=<>;7"));
