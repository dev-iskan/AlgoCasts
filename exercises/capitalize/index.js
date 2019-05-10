// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



// solution 1
function capitalize(str) {
  // create empty array
  const words = []

  // iterate through splitted by spaces string
  for (let word of str.split(' ')) {
    // capitalize 0 index character and add rest of word by splice method:
    // abc -> A + bc

    // and push to words array
    words.push(word[0].toUpperCase() +  word.slice(1))
  }

  // return joined array
  return words.join(' ')
}


// solution 2
// function capitalize(str) {
//   // create result var and assign first char uppercase
//   let result = str[0].toUpperCase()


//   // loop str.length, begin with index 1, as we already assigned uppercase at 0 to result
//   for (let i = 1; i < str.length; i++) {
//     // if left to character there is space, we make this character uppercase and add to result
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase()
//     } 
//     // else we just add to result
//     else  {
//       result += str[i]
//     }
//   }

//   return result
// }

module.exports = capitalize;
