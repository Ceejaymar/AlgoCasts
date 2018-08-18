// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA.replace(/[^\w]/g, "").toLowerCase();
  stringB.replace(/[^\w]/g, "").toLowerCase();

  let dict = {};

  // for(let elem of stringA) {
  //   if(dict[elem]) {
  //     dict[elem] += 1;
  //   }
  //   else {
  //     dict[elem] = 1;
  //   }
  // }

  // for(elem of stringB) {
  //   if(dict[elem] > 0) {
  //     dict[elem] -= 1;
  //   }
  //   else {
  //     return false;
  //   }
  // }
  // return true;

  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(aCharMap).length) {
    return false;
  }
  
  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for(let char of str.replace(/[^w]/g, '').toLowerCase()) {
    charMap[char] = charMarp[char] + 1 || 1
  }

  return charMap;
}

module.exports = anagrams;
