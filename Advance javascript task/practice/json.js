const obj = {
  name: "urvish",
  age: 23,
  address: { line: "fdfdfdffdfdfdf", city: "surat" },
};
console.log("hhj", obj);

let jsonstr = JSON.stringify(obj);
console.log("  jsonstr:", typeof jsonstr, jsonstr);

let jsonnormal = JSON.parse(jsonstr);
console.log(" jsonnormal:", jsonnormal);
