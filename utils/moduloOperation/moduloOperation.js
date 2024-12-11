function moduloOperation(dividend, divisor) {
  if (dividend === 0 || divisor === 0) return 0;
  return dividend % divisor;
}
module.exports = moduloOperation;
