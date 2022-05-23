const VIM_NUMBER = "1HGCM82633A004352";

const getCesarKey = (vimNumber) => {
  let CESAR_KEY = 0;
  for (let i = 0; i < vimNumber.length; i++) {
    const currChar = vimNumber[i];
    if (!isNaN(currChar)) {
      // Sum all numbers from VIM_NUMBER to get cesar key
      // Soma todos Números do VIM_NUMBER para obter a chave césar
      CESAR_KEY += parseInt(currChar, 10);
    }
  }
  // Returns sum mod 10 to be a number between 0 and 9
  // Realiza um módulo de 10 para obter um número de 0 a 9 independente da soma
  return CESAR_KEY % 10;
}

const encrypt = (vimNumber) => {
  let result = "";
  const CESAR_KEY = getCesarKey(vimNumber);
  for (let i = 0; i < vimNumber.length; i++) {
    // Character to Ascii + 2 + cesar key and add to result string
    // Transforma o character em ASCII soma 2 fixo + a chave de césar
    result += String.fromCharCode(vimNumber.charCodeAt(i) + 2 + CESAR_KEY);
  }
  // ! Business rule
  // Add cesar key to the end of result for server to be able to decrypt.
  // ! Regra de negócio
  // Adiciona a chave de césar para o lado do servidor saber descriptografar
  result += CESAR_KEY;
  return result;
}

console.log(encrypt(VIM_NUMBER));

module.exports = encrypt
