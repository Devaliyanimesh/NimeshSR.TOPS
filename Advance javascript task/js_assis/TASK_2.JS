// -> create array which have 1 to 9 no
let array = [1, 2, 3, 4, 5];

// 1. print 9th and 10th index of array

// let change = array.splice(9, 2);
// console.log(" x:", change);

// 2. print every element of array by map and for loop

// 3. change a value of 6th index with 100

// array.splice(6, 0, 100);
// console.log(" add:", array);

// 4. print a array till element value not grater then 100
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//   }

// 5. add 1 in every element of an array
// let addFive = array.map((e) => {
//   return 1 + e;
// });
// console.log("ddFive:", addFive);

// 6. add 0 in start of array

// array.unshift(0);
// console.log("addStart:", array);

// 7. add  99 in end of array

// array.push(99);
// console.log(" array:", array);

// 8. remove 1 element from start of  array

// array.shift();
// console.log(" array:", array);

// 9. remove 1 element from end of array
// array.pop();
// console.log(" array:", array);

// 10. do sum of all value of an array with use of map, reduce and for-loop

// for loop
// var num = 0;
// for (let i = 0; i < array.length; i++) {
//   num += array[i];
// }
// console.log(num);

// map meth
// sum = 0;
// let x = array.map((e) => {
//   sum += e;
// });
// console.log("sum:", sum);

// Reduce met

// let x = array.reduce((lastreturn, e) => {
//   return lastreturn + e;
// });
// console.log(" x:", x);

// 11. sort a array in acending decending
// let array = [1, 8, 9, 5, 6, 7, 10, 2, 3, 4, 11, 12];

// let sort = array.sort();
// console.log("sort:", sort);

// 12. reverce an array with use of method
// let rever = array.reverse();
// console.log("reverse:", rever);

// 13. reverce an array with use of for-loop
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// 14.uv hello world
// output--world uv hello

let arr = "uv hello world";
let x = arr.split("");
x.reverse();
let y = x.join("");
console.log("--->", y);

let fd = y.replace("dlrow olleh vu", "olleh uv olleh");
console.log("🚀 ~ file: TASK_2.JS:94 ~ fd:", fd);
