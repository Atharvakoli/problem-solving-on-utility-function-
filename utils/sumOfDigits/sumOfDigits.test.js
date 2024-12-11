const sumOfDigits = require('./sumOfDigits');

test('sums digits of a positive number', () => {
  expect(sumOfDigits(123)).toBe(6);
});

test('sums digits of a negative number', () => {
  expect(sumOfDigits(-456)).toBe(15);
});

test('returns 0 if input is 0', () => {
  expect(sumOfDigits(0)).toBe(0);
});

test('handles single-digit number', () => {
  expect(sumOfDigits(9)).toBe(9);
});

test('throws error if input is not an integer', () => {
  expect(() => sumOfDigits(12.34)).toThrow('Input must be an integer');
});
