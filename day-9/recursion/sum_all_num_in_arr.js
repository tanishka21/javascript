let arr = [5, 3, 2, 0, 1, 21];

var sum = function (n) {
  if (n <= 0) return arr[n];
  return arr[n] + sum(n - 1);
};

// console.log(sum(arr.length - 1));

// Sum of all odd numbers in an array

let a = [5, 2, 0, 3, 6, 7, 1];
function odd(n) {
  let isOdd = a[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? a[n] : 0;
  }
  return isOdd ? a[n] + odd(n - 1) : 0 + odd(n - 1);
}

console.log(odd(a.length - 1));
