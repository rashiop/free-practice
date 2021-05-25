// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// Jika boleh define 9 & 4

const romanArr = ['M', 'MC', 'D', 'CD', 'C', 'XC' ,'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
const numeralArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

function convertToRoman(num) {
  if (num == 0) return;

  let romans = [],
      currNum = num,
      size = romanArr.length;
  for (let i=0; i<size; i++) {
    if (currNum >= numeralArr[i] && currNum > 0) {
      const repeat = Math.floor(currNum/numeralArr[i]);
      currNum = currNum%numeralArr[i];
      if (repeat) romans.push(romanArr[i].repeat(repeat))
    }
  }

  console.log(num, romans.join(''))

  return romans.join('')
}

convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(400);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3999);