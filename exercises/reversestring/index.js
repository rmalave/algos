// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Using reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

// Using loop to add each character to start of a new string.
// function reverse(str) {
//   let reversed = '';
//
//   for(let char of str) {
//     reversed = char + reversed;
//   }
//
//   return reversed;
// }


// Using reverse() built in methods.
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

module.exports = reverse;
