const VIM_NUMBER = "1HGCM82633A004352";

const getCesarKey = (vimNumber) => {
  let CESAR_KEY = 0;
  for (let i = 0; i < vimNumber.length; i++) {
    const currChar = vimNumber[i];
    if (!isNaN(currChar)) {
      // Soma todos Números do VIM_NUMBER para obter a chave césar
      CESAR_KEY += parseInt(currChar, 10);
    }
  }
  // Realiza um módulo de 10 para obter um número de 0 a 9 independente da soma
  return CESAR_KEY % 10;
}

const encrypt = (vimNumber) => {
  let result = "";
  const CESAR_KEY = getCesarKey(vimNumber);
  for (let i = 0; i < VIM_NUMBER.length; i++) {
    // Transforma o character em ASCII soma 2 fixo + a chave de césar
    result += String.fromCharCode(VIM_NUMBER.charCodeAt(i) + 2 + CESAR_KEY);
  }
  // Adiciona a chave de césar para o lado do servidor saber descriptografar
  result += CESAR_KEY;
  return result;
}

console.log(encrypt(VIM_NUMBER));
