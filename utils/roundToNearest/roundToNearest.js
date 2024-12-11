function roundToNearest(num) {
  if (typeof num !== 'number') throw 'Input must be a number';
  let roundedNumber;
  if (num < 0) {
    roundedNumber = Math.round(num);
  } else {
    roundedNumber = Math.round(num);
  }
  return roundedNumber;
}
module.exports = roundToNearest;
