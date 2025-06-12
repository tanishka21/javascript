/* Move all the zeros to the end of the array while maintaining the order of non-zero elements.
and move at first */
var moveZeros = function (a) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      a[x] = a[i];
      x++;
    }
    console.log(`x:${x}`);

    console.log(a);
  }
  // Fill the remaining elements with zeros
  for (let i = x; i < a.length; i++) {
    a[i] = 0;
    console.log(`x:${x}`);
    console.log(a);
  }
  return a;
};
let a = [0, 1, 0, 3, 12, 1, 4, 0, 13];
moveZeros(a);
