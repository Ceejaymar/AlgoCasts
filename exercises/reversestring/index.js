// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   var revStr = ""

//   for(var i = str.length - 1; i >= 0; i-- ) {
//     revStr += str[i];
//   }
//   return revStr;
// }

// function reverse(str) {
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed; // order matters here, adding backwards 
//     console.log(reversed);
//   }

//   return reversed;
// }

function reverse(str) {
  debugger;
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');
}

reverse('asdf');

module.exports = reverse;
