function fun(cb3, cb2, cb1, cb) {
  setTimeout(() => {
    console.log("hi one ");
    cb(cb3, cb2, cb1);
  }, 2000);
}

function fun1(cb3, cb2, cb1) {
  console.log("hi two");
  cb1(cb3, cb2);
}
function fun2(cb3, cb2) {
  console.log("hi three");
  cb2(cb3);
}
function fun3(cb3) {
  console.log("hi four");
  cb3();
}
function fun4() {
  console.log("hi five");
}
fun(fun4, fun3, fun2, fun1);
