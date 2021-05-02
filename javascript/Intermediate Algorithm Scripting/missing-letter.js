const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function fearNotLetter(str) {
  if (str == alphabet) return;
  
  const startIdx = alphabet.indexOf(str[0]);
  const diffIdx = str.split('').findIndex((char, idx) => alphabet[startIdx+idx] != char)
  return alphabet[startIdx+diffIdx]
}

fearNotLetter("abce");