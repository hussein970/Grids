"use strict"
// Bsic comparisons
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 3); // true
console.log(5 >= 5); // true
console.log(5 !== 3); // true

// The == trap
console.log(0 == false); // true  dangerous
console.log(0 === false); // false safe

// Store result in variable
 let isexpensive  = 500 > 200;
 console.log(isexpensive); // 