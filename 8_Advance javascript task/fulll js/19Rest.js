const arrr = [1, 2, 3, 54, 5, 2];
console.log("arrr", ...arrr);

let [a, b, ...c] = arrr;
console.log("a", a);
console.log("b", b);
console.log("c", c);

function fun1(a, b, ...c) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}

fun1(1, 2, 3, 4, 5, 6, 4);
