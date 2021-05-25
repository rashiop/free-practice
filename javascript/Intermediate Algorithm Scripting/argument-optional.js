// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional

const isNumber = (num) => typeof num == 'number' && !isNaN(num);

function addTogether(num1, num2) {
  if (!isNumber(num1)) return;
  if (num2) {
    if (isNumber(num2)) return num1 + num2;
    return;
  }
  return (num3) => {
    if (!isNumber(num3)) return;
    return num1 + num3;
  }
}

addTogether(2,3);
addTogether(5)(7)