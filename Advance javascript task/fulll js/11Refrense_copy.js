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
// let obj3 = { ...obj1 };
// obj1.a = 4000;
// console.log("obj1:", obj1);
// console.log("obj3:", obj3);

// aarry
// let a1 = [1, 2, 3, 4, 5];
// let a3 = [800, 900];
// // let a2 = a1;
// let a2 = [...a1, 2000, ...a3];
// a1[0] = 100;

// console.log("a1", a1);
// console.log("...a1", ...a1);
// // console.log("a2", a2);
