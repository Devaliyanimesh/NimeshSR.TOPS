let obj1 = {
  a: 100,
  b: 200,
};

/*first method
// let obj3 = obj1;
// obj3.a = obj1.a;
// obj3.b = obj1.b;
// obj1.a = 4000;

// console.log("obj1", obj1);
// console.log("obj3", obj3);
*/
/*second

// obj3 = {};
// for (const key in obj1) {
//   //   console.log("key", obj1[key]);
//   obj3[key] = obj1[key];
// }
// obj1.a = 4000;
// console.log("obj1", obj1);
// console.log("obj3", obj3);
*/

// third
let obj3 = { ...obj1 };
obj1.a = 4000;
console.log("obj1:", obj1);
console.log("obj3:", obj3);
