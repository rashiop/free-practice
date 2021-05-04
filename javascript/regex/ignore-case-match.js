// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/ignore-case-while-matching

let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // Change this line
let result = fccRegex.test(myString);