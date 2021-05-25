// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/binary-agents

function binaryAgent(str) {
  const bytes = str.split(' ')
  let translated = [];
  for(let byte of bytes) {
    const char = String.fromCharCode(parseInt(byte, 2))
    translated.push(char)
  }
  return translated.join('')
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");