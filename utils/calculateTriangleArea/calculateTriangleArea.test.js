const calculateTriangleArea = require('./calculateTriangleArea');

test('calculates the area of a triangle', () => {
  expect(calculateTriangleArea(10, 5)).toBe(25);
});

test('works with float values', () => {
  expect(calculateTriangleArea(10.5, 5.2)).toBeCloseTo(27.3, 1);
});

test('returns 0 if base is 0', () => {
  expect(calculateTriangleArea(0, 5)).toBe(0);
});

test('returns 0 if height is 0', () => {
  expect(calculateTriangleArea(10, 0)).toBe(0);
});
