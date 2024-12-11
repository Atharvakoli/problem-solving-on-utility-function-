function findMin(numbers) {
  if (numbers.length === 0) return null;

  let min = numbers[0];
  for (const number of numbers) {
    if (number < min) min = number;
  }
  return min;
}
module.exports = findMin;
