const data = [
  {
    name: "urvish",
    age: [1, 2, 3, 4, 5, "test"],
    obj: {
      a: 40,
      str: "test",
    },
  },
];

let df = JSON.stringify(data);
console.log("df", df);
let gg = JSON.parse(df);
console.log("gg", gg);
