// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-upper-and-lower-number-of-matches

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6} no$/i; // Change this line
let result = ohRegex.test(ohStr);