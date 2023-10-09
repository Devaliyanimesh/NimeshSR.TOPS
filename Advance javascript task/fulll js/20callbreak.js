// function fun1(cb) {
//   setTimeout(() => {
//     console.log("------>");
//     cb();
//   }, 5000);
// }

// function fun2(fun1) {
//   console.log("------->second print");
// }

// function funn3() {
//   console.log("------->third");
// }

// fun1(fun2);

// callbreak hell ak ni adar ak hoy tene karvani rit

function fun1(cb1, cb) {
  setTimeout(() => {
    console.log("------>first");
    cb(cb2, cb1);
  }, 2000);
}

function funn2(cb2, arg2) {
  setTimeout(() => {
    console.log("------>second");
    cb2(arg2);
  }, 2000);
}
function funn3(cb3) {
  console.log("---->third");
  cb3();
}
function funn4() {
  console.log("----four");
}
fun1(funn3, funn4, funn2);
