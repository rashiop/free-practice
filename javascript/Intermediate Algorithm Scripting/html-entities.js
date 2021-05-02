// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities

const dict = {
  '"': "&quot;",
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&apos;',
}
function convertHTML(str) {
  return str.split('').map((char) => dict[char] || char).join('');
}

convertHTML("Dolce & Gabbana");