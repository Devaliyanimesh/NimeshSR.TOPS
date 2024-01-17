let person = [
  { name: "uv", age: 23 },
  { name: "nayan", age: 25 },
  { name: "dharmin", age: 20 },
  { name: "sid", age: 22 },
  { name: "rajni", age: 29 },
];
let sum = 0;
let map = person.map((e) => {
  sum += e.age;
  return sum;
});
console.log(sum);
