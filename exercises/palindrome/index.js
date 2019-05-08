// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// sol 1 using strreverse
// function palindrome(str) {
//   const reversedStr = str.split('').reduce((reversed, char) => char + reversed, '')
//   return reversedStr === str
// }

// sol 2 compare each character of string to its opposite char
function palindrome(str) {
  return str.split('').every((char, i) => {
    // get access to opposite element in arr  -  str[str.length - i - 1]
    return char === str[str.length - i - 1]
  })
}

module.exports = palindrome;
