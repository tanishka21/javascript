// Binary Search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target < mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
let arr = [2, 5, 7, 8, 9, 10, 15];
console.log(binarySearch(arr, 10));
