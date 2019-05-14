// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// solution 1
// function vowels(str) {
//   let counter = 0
//   const checker = ['a', 'e', 'i', 'o', 'u']
//   for(let char of str.toLowerCase()) {
//     if(checker.includes(char)) counter++
//   }

//   return counter
// }


// solution 2
function vowels(str) {
  // flag g - continue checking, i - case insensitive

  // if no matches null, else array
  const matches = str.match(/[aeuio]/gi)


  // returns length if matches not null else 0
  return matches && matches.length || 0
}

module.exports = vowels;
