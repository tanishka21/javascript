// Fibonacci series using recursion
// 0,1,1,2,3,5,8,13,21,34....

// Iterative approach
function fibonacci(n) {
  fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    fib.push(fib[i]);
  }
  console.log(fib);
}
fibonacci(10);

/// Recursive Approach
function fibonacciRecursive(n) {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
console.log(fibonacciRecursive(0));
console.log(fibonacciRecursive(1));
console.log(fibonacciRecursive(2));
console.log(fibonacciRecursive(3));
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(5));
console.log(fibonacciRecursive(6));
console.log(fibonacciRecursive(7));
