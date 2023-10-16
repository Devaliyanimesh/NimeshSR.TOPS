const pr = new Promise((resoved, reject) => {
  let one = [1, 2, 3, 4, 5, 6];
  let fin = one.includes(5);
  if (fin === true) {
    console.log("5 is availbale");
  } else {
    console.log("5 is not availble");
  }
});

