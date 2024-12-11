const findMin = require('./findMin');

test('returns minimum value from the array', () => {
  expect(findMin([1, 3, 5, 2])).toBe(1);
});

test('handles negative numbers', () => {
  expect(findMin([-3, -1, -5])).toBe(-5);
});

test('returns null for an empty array', () => {
  expect(findMin([])).toBe(null);
});

test('works with array of one element', () => {
  expect(findMin([7])).toBe(7);
});
