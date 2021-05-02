// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-dna-pairing/16009

function pairElement(str) {
  const pair = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  }
  return str.split('').map((char) => [char, pair[char]])
}

pairElement("GCG");