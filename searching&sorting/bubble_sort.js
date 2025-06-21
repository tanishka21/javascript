// Bubble Sort Impleme[ntation
let arr = [5, 4, 9, 1, 0];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  return arr;
}
console.log(bubbleSort(arr));
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// This implementation sorts the array in ascending order.
// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the
