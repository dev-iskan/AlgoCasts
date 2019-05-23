const factorial = require('./index')


test('Factorial function is defined', () => {
  expect(typeof factorial).toEqual('function');
});

test('calculates correct factorial value for 3', () => {
  expect(factorial(3)).toEqual(6);
});

test('calculates correct factorial value for 6', () => {
  expect(factorial(6)).toEqual(720);
});

test('calculates correct factorial value for 9', () => {
  expect(factorial(9)).toEqual(362880);
});

test('calculates correct factorial value for 12', () => {
  expect(factorial(12)).toEqual(479001600);
});

test('calculates correct factorial value for 15', () => {
  expect(factorial(15)).toEqual(1307674368000);
});
