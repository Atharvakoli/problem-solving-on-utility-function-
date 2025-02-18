const calculateSimpleInterest = require('./calculateSimpleInterest');

test('calculates correct simple interest', () => {
  expect(calculateSimpleInterest(1000, 5, 2)).toBe(100);
});

test('handles float values for rate', () => {
  expect(calculateSimpleInterest(1000, 5.5, 2)).toBe(110);
});

test('returns 0 for zero principal', () => {
  expect(calculateSimpleInterest(0, 5, 2)).toBe(0);
});

test('returns 0 for zero rate', () => {
  expect(calculateSimpleInterest(1000, 0, 2)).toBe(0);
});

test('returns 0 for zero time', () => {
  expect(calculateSimpleInterest(1000, 5, 0)).toBe(0);
});
