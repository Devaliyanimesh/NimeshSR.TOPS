const p1 = new Promise((resolve, rejeact) => {
  const arrr = [1, 2, 3, 4, 5];
  let itx = arrr.includes(5);
  console.log("-->", itx);
  if (itx) {
    resolve({ name: "nimesh" });
  } else {
    rejeact("5 is not available");
  }
});
p1.then((res) => {
  console.log("---->", res);
  return { ...res, city: "surat" };
})
  .then((res1) => {
    console.log("---->num1", res1);
    return { ...res1, age: 20 };
  })
  .then((res2) => {
    console.log("---->num2", res2);
  })
  .then((res2) => {
    console.log(`my name is${res}`, res2);
  })
  .catch((err) => {
    console.log("--->", err);
  });
