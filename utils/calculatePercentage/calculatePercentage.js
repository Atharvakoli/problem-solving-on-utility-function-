function calculatePercentage(value, total) {
  if (typeof value !== 'number' || typeof total !== 'number') {
    throw 'Both value and total must be numbers';
  }
  if (total === 0) return 0;
  let percentage = (value / total) * 100;
  return parseInt(percentage.toFixed(2));
}
module.exports = calculatePercentage;
