// spred  -----> ...
// const arr = [1, 2, 3, 4, 5, 6];

// // let [a, b, c] = arr; -----> a=1,b=2,c=3
// let [a, b, ...c] = arr;  ans --> a=1,b=2,c=3,4,5,6
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);

// function fun1(a, b, ...c) {
//   console.log("fun1  a", a);
//   console.log("fun1  b", b);
//   console.log("fun1  c", c);
//   let total = 0;
//   c.map((e) => {  jyre malti karavo tyre ... hovu frajiyat che
//     total += e;
//   });

//   return a + b + total;
// }
// let sd = fun1(1, 2, 3, 4, 5, 6, 7);
// console.log("sd", sd);

//obj method

// let obj = {
//   a: 20,
//   b: 30,
//   c: 60,
//   d: 90,
// };
// let { a, b, ...c } = obj;
// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
