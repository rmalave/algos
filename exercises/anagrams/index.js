// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// Second solution with sort.
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);      
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

// First solution with mapping strings to objects for comparison
//function anagrams(stringA, stringB) {
//  const aMap = buildCharMap(stringA);
//  const bMap = buildCharMap(stringB);
//
//  if(Object.keys(aMap).length !== Object.keys(bMap).length) {
//    return false;
//  }
//
//  for(let key in aMap) {
//    if(aMap[key] !== bMap[key]) {
//      return false;
//    }
//  }
//
//  return true;
//}
//
//function buildCharMap(string) {
//  const charMap = {};
//  let cleanStr = string.replace(/[^\w]/g, '').toLowerCase();
//
//  for(let char of cleanStr) {
//    charMap[char] = charMap[char] + 1 || 1;
//  }
//
//  return charMap;
//}
//

module.exports = anagrams;
