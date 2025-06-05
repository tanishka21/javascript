/// 121 - we read it from left and right, it should be same
function isPalindrome(original) {
  let copy = original;
  let rev = 0;

  while (original > 0) {
    let rem = original % 10;
    rev = rev * 10 + rem;
    original = Math.floor(original / 10);
  }
  //   if (rev == copy) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return rev == copy;
}
let result = isPalindrome(131);
console.log(result);
