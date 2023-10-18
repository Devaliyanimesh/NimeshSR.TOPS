let pro = new Promise((resoved, reject) => {
  let hg = [1, 2, 3, 4, 5];
  let gf = hg.includes(50);
  if (gf) {
    resoved({ ki: 255 });
  } else {
    reject("--->not avalabel");
  }
});

pro
  .then((cm1) => {
    console.log("---->", cm1);
    return { ...cm1, name: "Nimesh" };
  })
  .then((cm2) => {
    console.log("---->", cm2);
    return { ...cm2, age: 16 };
  })
  .catch((err) => {
    console.log("--->", err.message);
  });
