function findMax(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  for (const number of numbers) {
    if (number > max) max = number;
  }
  return max;
}
module.exports = findMax;
