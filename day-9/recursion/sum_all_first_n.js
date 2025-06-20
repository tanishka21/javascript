// Sum of all first n numbers using recursion

var sumOfFirstN = function (n) {
  if (n == 0) return 0;
  return n + sumOfFirstN(n - 1);
};

let n = 5;
console.log(sumOfFirstN(n));
