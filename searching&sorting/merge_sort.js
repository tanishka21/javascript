// Merge Sort Implementation
let arr = [5, 2, 3, 1];

// Here we are doing Divide and conquer
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
let result = mergeSort(arr);
console.log(result);

/// Merge Helper Function to sort the returned arrays
function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}
