// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   let revStr = str.split("").reverse();
//   for(let i = 0; i < str.length; i++) {
//     if(str[i] !== revStr[i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function palindrome(str) {
//   const revStr = str.split('').reverse().join('');
//   return str === revStr;
// }

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


module.exports = palindrome;
