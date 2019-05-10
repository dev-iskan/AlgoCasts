// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// solution 1
// simple matrix where if column less or equal to row we print # else whitespace
// function steps(n) {
//   for(let row = 0; row<n; row++) {
//     let stair = ''

//     for(let column = 0; column<n; column++) {
//       if(column<=row) { stair += '#' }
//       else { stair += ' ' }
//     }

//     debugger;
    
//     console.log(stair)
//   }
// }



// solution 2
// recursion solution
// n is number, row is row and stair is the string values of row
function steps(n, row = 0, stair = '') {
  // stop case, when n becomes equal to row
  if(n === row) {
    return
  }

  // if n is equal to stair length, we level up to next row and console log whole row
  if(n === stair.length) {
    console.log(stair)
    steps(n, row + 1)
    return 
  }

  // else if add to stair either # or whitespace
  stair += stair.length <= row ? '#' : ' ' 

  // recurse to next column
  steps(n, row, stair)
}

module.exports = steps;
