// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-sorted-union/16077

function uniteUnique(...arr) {
  const uniqueSet = new Set([...arr.flat(Infinity)])
  return Array.from(uniqueSet);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);