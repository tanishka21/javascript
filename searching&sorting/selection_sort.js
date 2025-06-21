// Selection Sort Algorithm Implementation
let a = [7, 1, 5, 4, 3, 2];
function selectionSort(a) {
  let n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}
let result = selectionSort(a);
console.log(result);
