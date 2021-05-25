// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

const clean = (str) => {
  const stripChar = new RegExp(/[ _,.\(\):-]/gi)
  return str.replace(stripChar, '').toLowerCase()
}

function palindrome(str) {
  const cleanStr = clean(str);
  const strArray = cleanStr.split('');
  const size = strArray.length - 1;
  for (let i=0; i<Math.ceil(size/2); i++) {
    if (strArray[i] !== strArray[size-i]) {
      return false;
    }
  }
  return true;
}



console.log(palindrome("five|\_/|four"));