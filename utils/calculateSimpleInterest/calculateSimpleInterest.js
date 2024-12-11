function calculateSimpleInterest(principal, rate, time) {
  if (rate === 0) return 0;
  return (principal * rate * time) / 100;
}
module.exports = calculateSimpleInterest;
