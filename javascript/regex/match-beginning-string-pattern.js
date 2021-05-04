// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/match-beginning-string-patterns


let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);