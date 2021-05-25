// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller44

// another option
// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-steamroller/16079

function flattenArray(input, allArray=[]) {
  if (Array.isArray(input)) {
    for (let value of input) {
      flattenArray(value, allArray)
    }
  } else {
    allArray.push(input)
  }
  return allArray
}

function steamrollArray(arr) {
  return flattenArray(arr, [])
}

steamrollArray([[["a"]], [["b"]]])
steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([1, [], [3, [[4]]]])
steamrollArray([1, {}, [3, [[4]]]])