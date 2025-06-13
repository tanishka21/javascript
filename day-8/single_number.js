/**
 * 136. Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */
var singleNumber = function (n) {
  let xor = 0;
  for (let i = 0; i < n.length; i++) {
    xor ^= n[i];
  }
  console.log(`Single Number : ${xor}`);
  return xor;
};
let n = [4, 1, 2, 1, 2];
console.log(singleNumber(n));
// Output: Single Number : 4
