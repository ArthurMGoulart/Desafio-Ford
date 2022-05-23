const VIM_NUMBER = "1HGCM82633A004352";
let result = "";

let CESAR_KEY = 0;

for (let i = 0; i < VIM_NUMBER.length; i++) {
  const currChar = VIM_NUMBER[i];
  if (!isNaN(currChar)) {
    CESAR_KEY += parseInt(currChar, 10);
  }
}

CESAR_KEY = CESAR_KEY % 10;

for (let i = 0; i < VIM_NUMBER.length; i++) {
  result += String.fromCharCode(VIM_NUMBER.charCodeAt(i) + 2 + CESAR_KEY);
}

result += CESAR_KEY;

console.log(result)

