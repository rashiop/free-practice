// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-all-letters-and-numbers

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;