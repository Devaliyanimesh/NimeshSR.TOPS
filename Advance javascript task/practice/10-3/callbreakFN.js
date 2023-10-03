function fun(funn) {
  setTimeout(() => {
    console.log("------>");
    funn(fun1);
  }, 5000);
}

fun(fun1);

function fun1() {
  console.log("------->second print");
}
