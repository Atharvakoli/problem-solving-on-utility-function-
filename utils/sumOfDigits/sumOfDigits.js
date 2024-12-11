function sumOfDigits(num) {
  if (num - Math.floor(num) !== 0) throw 'Input must be an integer';
  if (num === 0) return num;
  if (num < 0) num = Math.abs(num);

  let sum = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sum += lastDigit;
    num = Math.floor(num / 10);
  }
  return Math.round(sum);
}
module.exports = sumOfDigits;
