/// Write a function that searches for an element in an array and returns the index, of the element is not present return -1

function searchElement(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) {
      return i;
    }
  }

  return -1;
}
let result = searchElement([4, 2, 0, 10, 8, 30], 30);
console.log(result);

/// Write a function that returns the no of negative numbers in an array
// let arr1 = [2, -9, 17, 0, 1, -10, -4, 8];
function countNegatives(arr1) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 0) {
      count++;
    }
  }
  return count;
}
let result1 = countNegatives([2, -9, 17, 0, -1, 10, 22, 21, 20, 4, 8]);
console.log(result1);

/// Write a function that returns the no of positive numbers in an array
// let arr2 = [-2, 9, -17, 0, 1, -10, 4, 8];
function countPositives(arr2) {
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > 0) {
      count++;
    }
  }
  return count;
}
let result2 = countPositives([-2, 9, -17, 0, 1, -10, 4, 8]);
console.log(result2);

/// Write a function that returns the largest number in an array
let arr3 = [5, 0, 7, 10, 8, 17, 1];
function largestNum(arr3) {
  //   let largest = arr3[0];
  let largest = -Infinity;
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] > largest) {
      largest = arr3[i];
    }
  }
  return largest;
}

let result3 = largestNum(arr3);
console.log(result3);

/// Write a function that returns the largest number in an array
let arr4 = [5, -2, 7, 10, 8, 17, 1];
function smallestNum(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] < smallest) {
      smallest = arr4[i];
    }
  }
  return smallest;
}

let smallNum = smallestNum(arr4);
console.log(smallNum);
