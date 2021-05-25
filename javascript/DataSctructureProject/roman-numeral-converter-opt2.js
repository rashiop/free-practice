// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// Jika ga boleh define 9 & 4

const tenRoman = ['M', 'C', 'X', 'I']
const tenNumeral = [1000, 100, 10, 1]
const fiveRoman = ['D', 'L', 'V']
const fiveNumeral = [500, 50, 5]

const gteTenNum = (num, i) => num >= tenNumeral[i];

const getRomanChar = (num, i) => {
  const repeat = Math.floor(num/tenNumeral[i]);
    num = num%tenNumeral[i];
    
    let roman;    
    if (repeat == 9) {
      roman = tenRoman[i] + tenRoman[i-1];
    } else if (repeat == 4) {
      roman = tenRoman[i]+fiveRoman[i-1];
      num = num%fiveNumeral[i-1]
    } else if (repeat > 5 && repeat < 10) {
      num = num%fiveNumeral[i-1]
      roman = fiveRoman[i-1]+(tenRoman[i].repeat(repeat-5));
    } else if (repeat == 5) {
      roman = fiveRoman[i-1];
      num = num%fiveNumeral[i-1]
    } else if (repeat > 0) {
      roman = tenRoman[i].repeat(repeat);
    }

    return { roman, leftover: num }
}

function convertToRoman(num) {
  if (num == 0) return;

  let romans = [],
      currNum = num,
      size = tenRoman.length;
  for (let i=0; i<size; i++) {
    if (gteTenNum(currNum, i)) {
      const { roman, leftover } = getRomanChar(currNum, i);
      currNum = leftover;
      if (roman) romans.push(roman)
    }
  }

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