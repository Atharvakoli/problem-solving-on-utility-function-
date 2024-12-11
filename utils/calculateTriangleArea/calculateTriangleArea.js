function calculateTriangleArea(base, height) {
  if (base === 0 || height === 0) return 0;
  return (base * height) / 2;
}
module.exports = calculateTriangleArea;
