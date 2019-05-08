// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1
function reverseInt(n) {
  let reversed = n.toString().split('').reverse().join('')
  return parseInt(reversed) * Math.sign(n)
}

// we skip 0 after number like 20, and save 0 itself
// this is done by parseInt method, so no need to check when reversing string

reverseInt(0)

module.exports = reverseInt;
