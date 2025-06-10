/// Remove duplicates from an sorted array
/**
 1. non-decreasing order - have duplicates
 2. in-place - original only array should modify 
 3. relative order should be same - dont change the order
 */
var duplicates = function removeDuplicates(arr) {
  let x = 0; // x  is the index of the array where the next unique element should be placed
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x += 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
};
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 8, 8, 9, 9, 9];
console.log(duplicates(arr));
