try {
  function fun(a, b) {
    console.log("---->i love coding");
    return a + b;
  }
  let x = fun(10, 20);
  console.log("x", x);
  let y = fun2(20, 40);
  console.log("y", y);
} catch (err) {
  console.log("----->", err.message);
}
function fun2(j, k) {
  return j + k;
}
