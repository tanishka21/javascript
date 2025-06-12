// Date - 12th June 2025

var merge = function (n1, n2, m, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    /// when p2 is less than 0, we have no elements left in n2
    if (p2 < 0) break;
    if (p1 >= 0 && n1[p1] > n2[p2]) {
      n1[i] = n1[p1];
      p1--;
    } else {
      n1[i] = n2[p2];
      p2--;
    }
    console.log(n1);
  }

  return n1;
  //   for (let i = 0; i < m + n; i++) {
  //     if (p2 >= n || (p1 < m && n1copy[p1] < n2[p2])) {
  //       n1[i] = n1copy[p1];
  //       p1++;
  //     } else {
  //       n1[i] = n2[p2];
  //       p2++;
  //     }
  //   }
};
// Example usage:
let n1 = [1, 2, 3];
let n2 = [2, 5, 6];
let m = n1.length;
let n = n2.length;
merge(n1, n2, m, n);
// console.log(n1);
