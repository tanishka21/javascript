/// Write a function to find the second largest number

let arr = [10, 20, 20];
// let arr = [-4, -2, -34, -10, -8, -9];
function secondLargest(arr) {
  if (arr.length < 2) {
    return "Array must contain at least 2 elements";
  }
  let firstLargest = -Infinity;
  let secondlargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondlargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondlargest && arr[i] != firstLargest) {
      secondlargest = arr[i];
    }
  }
  return secondlargest;
}
let result = secondLargest(arr);
console.log(result);
