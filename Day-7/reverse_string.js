/// Reverse String
var reverseString = function (s) {
  let len = s.length;
  let halflen = Math.floor(len / 2);
  for (let i = 0; i < halflen; i++) {
    /// Swapping s[i], s[len-1-i]
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s;
};
// let s = ["h", "e", "l", "l", "o"];
let s = ["t", "a", "n", "i", "s", "h", "k", "a"];
console.log(reverseString(s));
