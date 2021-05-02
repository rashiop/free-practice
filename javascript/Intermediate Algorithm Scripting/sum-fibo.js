https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs(num) {
  let
    num1 = 0,
    num2 = 1,
    total = 1,
    flag = true
  while (flag) {
    let sum = num1 + num2
    if (sum <= num) {
      num1 = num2
      num2 = sum
      if (sum%2) total += sum
    } else {
      flag = false
    }
  }
  return total;
}

sumFibs(75025);