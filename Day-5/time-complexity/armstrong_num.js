// Armstrong Number
// An Armstrong number (also known as a narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
// For example, 1634 is an Armstrong number because 1^4 + 6^4 + 3^4 + 4^4 = 1634.

// Armstrong Number - O(n^2) Time Complexity
// Armstrong Number - O(n) Space Complexity
// Armstrong Number - O(1) Auxiliary Space Complexity
// Armstrong Number - O(n) Time Complexity
// Armstrong Number - O(1) Space Complexity
var armstrong = function (n) {
  let sum = 0;
  let temp = n;
  let len = n.toString().length;
  //   let len = n;
  while (temp > 0) {
    let rem = temp % 10;
    sum += rem ** len;
    temp = Math.floor(temp / 10);
    console.log(sum);
  }
  return sum === n;
};
console.log(armstrong(1634));
