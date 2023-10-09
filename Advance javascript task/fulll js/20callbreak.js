function fun1(arg, cb) {
  //   for (let i = 0; i < 1000000000; i++) {}
  setTimeout(() => {
    console.log("----->fun1");
    cb(arg);
  }, [2000]);
}

function fun2(cb2) {
  setTimeout(() => {
    console.log("----->fun2");
    cb2();
  }, 3000);
}

function fun3() {
  setTimeout(() => {
    console.log("----->fun3");
  }, 2000);
}
//   function fun4() {
//     console.log("----->fun4");
//   }

fun1(fun3, fun2);

/*
   models.Movie.create(input, (err, result) => {
        if (err) throw err;
        else res.status(200).send(result);
      });
  */
