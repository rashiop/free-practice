// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it
function dropElements(arr, func) {
  const trueIdx = arr.findIndex(func)
  if (trueIdx == -1) {
    return [];
  }
  return arr.slice(trueIdx)
}

dropElements([1, 2, 3], function(n) {return n < 3; });