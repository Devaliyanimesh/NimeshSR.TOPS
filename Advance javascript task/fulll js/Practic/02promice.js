const pr = new Promise((resoved, reject) => {
  let one = [1, 2, 3, 4, 5, 6];
  let fin = one.includes(5);
  if (fin) {
    resoved({ age: 20 });
  } else {
    reject("5 is not availble");
  }
});
pr.then((str) => {
  console.log("---->");
  return { ...str, name: "nimesh" };
})
  .then((res1) => {
    console.log("--->", res1);
    return { ...res1, study: "it felid" };
  })
  .then((res2) => {
    console.log("--->", res2);
  })
  .catch((error) => {
    console.log("****---->", error.message);
  });
