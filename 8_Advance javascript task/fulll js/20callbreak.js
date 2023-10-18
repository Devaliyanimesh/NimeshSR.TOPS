function fun1(arg3, arg2, arg, cb) {
  //   for (let i = 0; i < 1000000000; i++) {}
  setTimeout(() => {
    console.log("----->fun1");
    cb(arg3, arg2, arg);
  }, [2000]);
}

function fun2(arg3, arg2, cb1) {
  setTimeout(() => {
    console.log("----->fun2");
    cb1(arg3, arg2);
  }, 3000);
}

function fun3(arg3, cb2) {
  setTimeout(() => {
    console.log("----->fun3");
    cb2(arg3);
  }, 2000);
}
function fun4(cb3) {
  console.log("----->fun4");
  cb3();
}
function fun5() {
  console.log("----->fun5");
}

fun1(fun5, fun4, fun3, fun2);

/*
   models.Movie.create(input, (err, result) => {
        if (err) throw err;
        else res.status(200).send(result);
      });
  */
