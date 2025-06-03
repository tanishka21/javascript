// console.log("Hello, World!");
// console.log("Hello, World!");

const a = 10;
const b = 20;
const c = a + b;
console.log(c);

/// let can be reassigned but const cannot be reassigned.
let x = 20;
console.log(x);

x = 40;
console.log(x);

///  " " will gives you the extra spaces
let firstname = "Tanishka";
// let surname = "Goel";
let surname = 7;
let fullname = firstname + " " + surname;
let fullname2 = firstname + surname;
console.log(fullname);
console.log(typeof fullname2);

/// Array is a collection of items in a single variable.
let arr = [5, 10, 2, 0, 1, 100, 9];
console.log(arr[6]);
let sun = arr[0] + arr[6];
console.log(sun);

///array of strings
let arr2 = ["Tannu", "Aashu"];
console.log(arr2[0]);
console.log(arr2[1]);

/// Mix matching data types in an array
let arr3 = [1, "Tanishka", true, -3, null];
console.log(arr3[4]);

/// array can contain array also
let arr4 = ["tannu", 7, [5, 10, [30, 40]], 3];
console.log(arr4[2][2][0]);
console.log(arr4[2][2][1]);

/// Objects in js
let obj = {
  id: 1,
  fname: "Tanishka",
  lname: "goel",
  age: 24,
  bool: true,
  arr: [4, 5, 5, 6, 7],
  obj: {
    id: 2,
    name: "Ashu",
    age: 25,
  },
};
console.log(obj.fname + " " + obj.lname);

console.log(obj.obj.name);

/// functions in js
function printName() {
  console.log("Hello, Tanishka!");
}
printName();

//dynamic function
function greet(name) {
  console.log("Namaste," + name + "!");
}
let xi = "Virat kohli";
greet("Aashish");
greet("Tanishka");
greet(xi);

/// function to add to values
function addToNum(a, b) {
  let add = a + b;
  console.log(add);
}

addToNum(3, 14);

// function to multiply to values
function mulToNum(a, b) {
  let multiply = a * b;
  console.log(multiply);
}

mulToNum(3, 14);

///Square of a num
function square(x) {
  let result = x * x;
  return result;
}

let sq = square(-2);
console.log(sq);

/// If-else statements in js
function checkVote(age) {
  if (age < 0) {
    console.log("Invalid input!!!");
  } else if (age < 18) {
    console.log("You are not eligible to Vote!!!");
  } else {
    console.log("Eligible to vote");
  }
}
checkVote(20);
checkVote(15);
checkVote(-1);

/// Create a function to check if a number is even or odd
function checkEvenOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log(num + " " + "is an even number");
  } else {
    console.log(num + " " + "is an odd number!");
  }
}

checkEvenOdd(-1);
checkEvenOdd(15);

/// Loops in JavaScript
// For Loop
for (let i = 1; i <= 20; i++) {
  console.log("Hello World!", i);
}

for (let i = 5; i > 0; i--) {
  console.log("Hellow", i);
}

for (let i = 0; i > 0; i++) {
  console.log(i);
}

///Infinite loop
// for (let i = 1; i > 0; i++) {
//   console.log(i);
// }

/// Fuction inside the loop
function greet1(name, i) {
  console.log("Hello", name, "!", i);
}

for (let i = 0; i < 10; i++) {
  greet1("Tanishka", i);
}

/// Array with loops
/// Print all the even numbers in the array

let arr5 = [10, 6, 2, 0, 8, 3, 1, 5, 7, 100];
let length = arr5.length;
// console.log(arr5[0]);
for (let i = 0; i < length; i++) {
  //   console.log(arr5[i]);
  if (arr5[i] % 2 == 0) {
    console.log("Even number", arr5[i]);
  } else {
    console.log("Odd number", arr5[i]);
  }
}

/// while loops in js
let i = 1;
while (i <= 5) {
  console.log("Hellow", i);
  i++;
}
