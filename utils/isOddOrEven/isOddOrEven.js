function isOddOrEven(num) {
  if (typeof num !== 'number') {
    throw 'Input must be a number';
  }
  if (num === 0 || num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

module.exports = isOddOrEven;
