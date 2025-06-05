/**
 * * * *
 * * * *
 * * * *
 * * * *
 */
let n = 4;
///Rows = i
for (let i = 0; i < n; i++) {
  let row = " ";
  ///Columns = j
  for (let j = 0; j < n + 1; j++) {
    row += "* ";
  }
  console.log(row);
}

/**
 *
 * *
 * * *
 * * * *
 */

let n1 = 4;
for (let i = 0; i < n1; i++) {
  let row1 = "";
  for (let j = 0; j <= i; j++) {
    row1 += "* ";
  }
  console.log(row1);
}

/**
 1
 1 2
 1 2 3 
 1 2 3 4
 1 2 3 4 5
 */
let n2 = 5;
for (let i = 0; i < n2; i++) {
  let row = " ";
  for (let j = 1; j <= i + 1; j++) {
    row += `${j} `;
  }
  console.log(row);
}

/**
 1
 2 2
 3 3 3 
 4 4 4 4
 5 5 5 5 5
 */

let n4 = 5;
for (let i = 1; i <= n4; i++) {
  let row3 = "";
  for (let j = 1; j <= i; j++) {
    row3 += `${i} `;
  }
  console.log(row3);
}
console.log("");

/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1
*/

let n5 = 5;
for (let i = 0; i < n5; i++) {
  let row4 = "";
  for (let j = 0; j < n5 - i; j++) {
    row4 += `${j + 1} `;
  }
  console.log(row4);
}

/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */

let n6 = 5;
for (let i = 0; i < n6; i++) {
  let row2 = "";
  for (let j = 0; j < n6 - i; j++) {
    row2 += "* ";
  }
  console.log(row2);
}

/*
 - - - - * 
 - - - * * 
 - - * * *
 - * * * *
 * * * * *
 */

let n7 = 5;
for (let i = 0; i < n7; i++) {
  /// Spaces
  let row6 = "";
  for (let j = 0; j < n7 - (i + 1); j++) {
    row6 += "- ";
  }
  ///Stars
  for (let k = 0; k < i + 1; k++) {
    row6 += "* ";
  }
  console.log(row6);
}

/**
 1
 1 0
 1 0 1
 1 0 1 0
 1 0 1 0 1
 1 0 1 0 1 0
 */
let n3 = 6;

for (let i = 0; i < n3; i++) {
  let row7 = "";
  let switchNo = 1;

  for (let j = 0; j < i + 1; j++) {
    row7 += switchNo + " ";
    if (switchNo == 1) {
      switchNo = 0;
    } else {
      switchNo = 1;
    }
  }
  console.log(row7);
}

/**
 1
 0 1
 0 1 0
 1 0 1 0
 1 0 1 0 1
 */
let n8 = 5;
let switchNo1 = 1;
for (let i = 0; i < n8; i++) {
  let row8 = "";
  for (let j = 0; j < i + 1; j++) {
    row8 += switchNo1 + " ";
    if (switchNo1 == 1) {
      switchNo1 = 0;
    } else {
      switchNo1 = 1;
    }
  }
  console.log(row8);
}
