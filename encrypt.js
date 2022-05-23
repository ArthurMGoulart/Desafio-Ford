const VIM_NUMBER = "1HGCM82633A004352";
let result = "";

let CESAR_KEY = 0;

// Soma todos Números do VIM_NUMBER para obter a chave césar
for (let i = 0; i < VIM_NUMBER.length; i++) {
  const currChar = VIM_NUMBER[i];
  if (!isNaN(currChar)) {
    CESAR_KEY += parseInt(currChar, 10);
  }
}

// Realiza um módulo de 10 para obter um número de 0 a 9 independente da soma
CESAR_KEY = CESAR_KEY % 10;

for (let i = 0; i < VIM_NUMBER.length; i++) {
  // Transforma o character em ASCII soma 2 fixo + a chave de césar
  result += String.fromCharCode(VIM_NUMBER.charCodeAt(i) + 2 + CESAR_KEY);
}

// Adiciona a chave de césar para o lado do servidor saber descriptografar
result += CESAR_KEY;

console.log(result);

