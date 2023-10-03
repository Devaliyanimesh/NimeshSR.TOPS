function fun(funn) {
  setTimeout(() => {
    console.log("------>");
    fun(fun1);
    fun1(funn2);
  }, 5000);
}

fun(funn2, fun1);

function fun1(fun1) {
  console.log("------->second print");
}

function funn2() {
  console.log("------->third");
}
