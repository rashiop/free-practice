// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-single-characters-not-specified

let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line