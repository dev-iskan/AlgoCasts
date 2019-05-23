// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// solution 1
// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }


// solution 2

// function fib(n) {
//   // stop condition
//   if(n < 2) {
//     return n
//   }

//   // return sum of two fib results
//   return fib(n-1) + fib(n-2)
// }


// solution 3
function memoize (fn) {
  const cache = {} // storage of all previous calls of fn

  // return function with arguments
  return function (...args) {

    // if function call exists return it
    if (cache[args]) {
      return cache[args]
    }

    // otherwise call function and save its result in cache
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function slowFib(n) {
  // stop condition
  if(n < 2) {
    return n
  }

  // return sum of two fib results
  // !! IMPORTANT actually it becomes not recursive function as we call memoized version inside of function
  return fib(n-1) + fib(n-2)
}

const fib = memoize(slowFib)
console.log(fib(77))
module.exports = fib;
