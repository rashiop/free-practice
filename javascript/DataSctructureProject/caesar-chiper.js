// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

const CHAR_CODE_A = 65;
const CHAR_CODE_Z = 90;
const ROT13 = 13;

const isChar = (code) => code <= CHAR_CODE_Z && code >= CHAR_CODE_A;
const getStringCode = (code) => String.fromCharCode(code)
const getCharCode = (char) => {
  let code = char.charCodeAt(0);
  if (isChar(code)) {
    if (code + ROT13 > CHAR_CODE_Z) {
      code = CHAR_CODE_A - 1 + (code + ROT13) - CHAR_CODE_Z
    } else {
      code += ROT13
    }
  }
  return code;
}


function rot13(str) {
  return str
    .split('')
    .map((char) => {
      const code = getCharCode(char);
      const newChar = getStringCode(code);
      return newChar;
    })
    .join('')
}

rot13("SERR PBQR PNZC");