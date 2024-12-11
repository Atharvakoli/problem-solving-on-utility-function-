function isInRange(num, min, max) {
  if (num <= 0 && min <= 0 && max <= 0) {
    while (min <= max) {
      if (min === num) return true;
      min++;
    }
  } else if (num <= 0 && min >= 0 && max >= 0) {
    return false;
  } else {
    while (min <= max) {
      if (min === num) return true;
      min++;
    }
  }
  return false;
}
module.exports = isInRange;
