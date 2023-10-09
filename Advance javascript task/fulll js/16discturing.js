// a = obj?.a;
// b = obj?.b;
console.log("a", a);
console.log("B", B);
console.log("b", b);

function returnObj() {
  return {
    name: "--->uv",
    city: "--->surat",
  };
}

// const obj2 = returnObj();
// console.log("obj2", obj2);

const { name, ciTy } = returnObj();
console.log("name", name);
console.log("city", ciTy);

let arr = [1, 2, 3, 4];

let [x, y, z] = arr;
console.log("y", y);
console.log("z", z);
console.log("x", x);
