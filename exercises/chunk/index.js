// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// solution 1
// function chunk(array, size) {
//   // create empty array
//   const chunked = []

//   // iterate through array
//   for(let el of array) {
//     // get last chunk_array from chunked
//     const last = chunked[chunked.length - 1]

//     // if last chunk_array exists and its length is oversized we push new array with element into chunked array
//     if (!last || last.length === size) {
//       chunked.push([el])
//     } 
//     // else push element to last chunk_array
//     else {
//       last.push(el)
//     }
//   }

//   return chunked
// }


// solution 2
function chunk(array, size) {
  // create empty array
  const chunked = []

  // initialize index at 0
  let index = 0


  // loop until index is less than array.length
  while(index < array.length) {

    // push to chunked new sliced array of size and starting at index
    chunked.push(array.slice(index, index + size))

    // increment index by size
    index += size
  }

  return chunked
}

module.exports = chunk;
