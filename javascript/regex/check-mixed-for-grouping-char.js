// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/check-for-mixed-grouping-of-characters

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works