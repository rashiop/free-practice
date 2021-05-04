// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/find-characters-with-lazy-matching

// https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-find-characters-with-lazy-matching/301341

/*

greedy vs lazy matching
1. greedy -> last idx of
You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between. Return titani

2. Lazy -> first idx of
However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].

*/

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/gi; // Change this line
let result = text.match(myRegex);