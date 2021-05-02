// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace


function myReplace(str, before, after='') {
  const regex = new RegExp(before, "g");
  return str.replace(regex, formatReplacer());

  function formatReplacer() {
    const isLowerCase = /^[a-z]/.test(before);
    return isLowerCase
      ? after[0].toLowerCase() + after.slice(1)
      : after[0].toUpperCase() + after.slice(1);
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting")
myReplace("This has a spellngi error", "spellngi", "spelling")
myReplace("His name is Tom", "Tom", "john")
myReplace("Let us get back to more Coding", "Coding", "algorithms")