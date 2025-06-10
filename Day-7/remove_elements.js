// Remove elements from an array
var removeE = function removeElements(arr, value) {
  var x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[x] = arr[i];
      x = x + 1;
      console.log(i, arr);
    }
  }

  return x;
};
let arr = [3, 1, 3, 4, 3, 3, 3, 7];
let value = 3;
console.log(removeE(arr, value));
