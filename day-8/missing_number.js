/**
 Missing Number
 Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
 The algorithm should run in linear time and use only constant extra space.
 */
var findMissingNum = function (num) {
  var missingNum;
  var expectedSum = (num.length * (num.length + 1)) / 2;
  var actualSum = 0;
  for (let i = 0; i < num.length; i++) {
    actualSum += num[i];
  }
  missingNum = expectedSum - actualSum;
  console.log(`Missing Number : ${missingNum}`);

  return missingNum;
};
let num = [0, 1, 2, 3, 5];
console.log(findMissingNum(num));
// Output: Missing Number : 4
