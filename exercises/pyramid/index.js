// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


// solution 1
function pyramid(n) {
  // midpoint is found by logic, when n rows columns are (2 * n - 1)
  const midpoint = Math.floor((2*n-1) / 2)

  // ittearte through rows
  for(let row = 0; row < n; row++) {
    // assign level
    let level = ''

    // itterate thorugh columns lemgth
    for(let column = 0; column < 2 * n -1; column++) {
      // if the calc less equal and more equal to column then # otherwise space
      if(midpoint - row <= column && midpoint + row >= column) {
        level +='#'
      } else {
        level +=' '
      }
    }

    console.log(level)
  }
}




// solution 2
function pyramid(n, row = 0, level = '') {
  // stop case
  if(row === n) {
    return
  }

  // case when row exceeded
  if(level.length === (2*n)-1) {
    console.log(level)
    pyramid(n, row + 1)
    return
  }


  const midpoint = Math.floor((2 * n -1) /2)

  let add = midpoint - row <=level.length && midpoint + row >= level.length ? '#' : ' '

  // next itteration
  pyramid(n, row, level + add)
}



pyramid(50)
module.exports = pyramid;
