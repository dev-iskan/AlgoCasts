
function memoize (fn) {
  const cache = {}
  
  return function (...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

function factorial (n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * fastFactorial(n - 1);
  }
}

const fastFactorial = memoize(factorial)
module.exports = factorial