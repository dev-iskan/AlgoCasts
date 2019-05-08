// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// solution 1
// function reverse(str) {
//   return str.split('')
//             .reverse()
//             .join('');
// }

// solution 2
function reverse(str) {
  let reversedString = ''

  for (let char of str) {
    reversedString = char + reversedString
    debugger;
  }

  return reversedString
}

// solution 3
// function reverse(str) {
//   return str.split('').reduce((reversed, char) => char + reversed, '')
// }

reverse('rdsfo')

module.exports = reverse;
