// Reverse Integer
var reverse = function (x) {
  let xcopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    let last = x % 10;
    rev = 10 * rev + last;
    x = Math.floor(x / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;
  return xcopy < 0 ? -rev : rev;
};
let x = 45432;
console.log(reverse(x));
