/* 13th June 2025
 * LeetCode Problem: 485. Max Consecutive Ones
 * Difficulty: Easy
 *
 * Given a binary array, find the maximum number of consecutive 1s in this array.
 */
var findMaxConsecutiveOnes = function (n) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }

  return Math.max(currentCount, maxCount);
};

let n = [1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1];
console.log(findMaxConsecutiveOnes(n));
