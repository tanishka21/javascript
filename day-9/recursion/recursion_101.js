/**
 * Recursion is the process of defining a function in terms of itself.
 */
function fun(num) {
  if (num < 1) return;
  console.log(num);
  num = num - 1;
  fun(num);
}
let a = 5;
// fun(a);

///print 1 to n
function printToN(x) {
  if (x > n) return;
  console.log(x);
  printToN(x + 1);
}
let n = 10;
printToN(1);
