/**
 Two Sum
 Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 */

/// Approach 1 : nested loops
var twoSum = function (n, target) {
  for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
      if (n[i] + n[j] === target) {
        return [i, j];
      }
    }
  }
};
let n = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(n, target)); // Output: [0, 1]
/// Approach 2 : using a hash map
