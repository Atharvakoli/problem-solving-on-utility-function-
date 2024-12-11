const findMax = require('./findMax');

test('returns maximum value from the array', () => {
  expect(findMax([1, 3, 5, 2])).toBe(5);
});

test('handles negative numbers', () => {
  expect(findMax([-3, -1, -5])).toBe(-1);
});

test('returns null for an empty array', () => {
  expect(findMax([])).toBe(null);
});

test('works with array of one element', () => {
  expect(findMax([7])).toBe(7);
});
