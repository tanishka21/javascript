// power of two using recursion
function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 !== 0) return false;

  return powerOfTwo(n / 2);
}
console.log(powerOfTwo(4));
console.log(powerOfTwo(1));
console.log(powerOfTwo(-1));
console.log(powerOfTwo(14));
