// let arr = [
//   1,
//   "struing",
//   true,
//   null,
//   undefined,
//   () => {
//     console.log("---->fun");
//   },
//   { a: 30 },
//   [1, 2, 3],
// ];

// let arrOfObj = [
//   { name: "jeel", age: 30 },
//   { name: "khushal", age: 40 },
//   { name: "mohan", age: 50 },
// ];

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("--->arr:", arr);
/*

// push(...items) – adds items to the end,
arr.push({name:"test"});
console.log("arr:", arr);

// pop() – remove an item from the end,
arr.pop();
console.log("arr:", arr);


// shift() – remove an item from the beginning,
arr.shift();
console.log("arr:", arr);


// unshift(...items) – adds items to the beginning.
arr.unshift({ test: 10 });
console.log("arr:", arr);


// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.

let arr2 = [100, 200, 300];
let concatedArr = arr.concat(arr2, 900000000, arr2);
console.log(" concatedArr:", concatedArr);


// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
let indArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let index = indArr.indexOf(5, 6);
// let index = indArr.indexOf(100);
let index = indArr.lastIndexOf(5);
console.log(" index:", index);

let lastIndex = indArr.lastIndexOf(5);
let fiesrtIndex = indArr.indexOf(5);
console.log(" lastIndex:", lastIndex);
console.log(" fieswrtIndex:", fiesrtIndex);
if (lastIndex === fiesrtIndex) {
    console.log("five is not duplicate in array");
} else {
    console.log("five is duplicate in array");
}


// includes(value) – returns true if the array has value, otherwise false.

let available = arr.includes(50);
console.log("available:", available);*/

// let arr = [1, 20, 3, 4, 5, 6, 7, 8, 9, 1];

// console.log("--->arr:", arr);

// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.

// let sliceArr = arr.slice(1, 5);
// let sliceArr = arr.slice(1, -5);
// console.log("sliceArr", sliceArr);

// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

// arr.splice(1, 0, "test-1");
// // starting, remove , add
// console.log("arr", arr);
// arr.splice(2, 0, 2.5);

// let x = arr.splice(2, 2);

// x = [1, 2, 5, 6, 7, 8, 9];
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log("arr", arr);

// find/filter(func) – filter elements through the function, return first/all values that make it return true.

// let x = arr.find((e, i) => {
//   console.log("e", e, "i", i);
//   return e === 50;
// });
// console.log("x---->", x);

// let filterEleGT = arr.filter((e) => {
//   // console.log("e", e);
//   return e > 4 ;
// });
// console.log("filterEleGT", filterEleGT);

// findIndex is like find, but returns the index instead of a value.

// let index = arr.findIndex((e) => {
//   console.log("e", e);
//   return e > 5;
// });
// console.log("index", index);

// forEach(func) – calls func for every element, does not return anything.

// let abc = arr.forEach((e, i) => {
//   console.log(i, "---e--->", e);
//   return e;
// });
// console.log("abc", abc);

// sort(func) – sorts the array in-place, then returns it.

// arr.sort();
// console.log("arr", arr);

// let ARR = [1, 2, 3, 4, 5];
// console.log("ARR", ARR);
// let data = ARR.toSpliced(1, 2);
// console.log("data ", data);

// console.log("ARR", ARR);

let arr = [1, 2, 3, 4, 5];
/*
let x = "10";
let y = "20";

let sub = y - x;
let sort = arr.sort((a, b) => a - b);

// reverse() – reverses the array in-place, then returns it.

let revesredArr = arr.reverse();

// join – convert a array ihn to string

let str = arr.join("---test--test--");
let str__2 = arr.toString();

// map(func) – creates a new array from results of calling func for every element.
let arrObj = [
  {
    name: "jigar",
    age: 29,
  },
  
  {
    name: "kavya",
    age: 32,
  },
];

// let newArr = arr.map((e, i) => {
  //   return e + 5;
  // });
  
  let nameArr = arrObj.map((e) => {
    return "my name is " + e.name;
  });
  
  console.log("nameArr", nameArr);
  
  // reduce(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
  // [1, 2, 3, 4, 5];
  
  let total = arr.reduce((lastReturnValue, e) => {
    console.log("lastReturnValue", lastReturnValue);
    console.log("e", e);
    return lastReturnValue + e;
  }, 0s);
  console.log("total", total);
  */

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.

let x = null;
let m = Array.isArray(x);
console.log("m", m);
