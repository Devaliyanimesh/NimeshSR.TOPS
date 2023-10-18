function fun1(params) {
  return new Promise((resolve, reject) => {
    reject("--==");
    setTimeout(() => {
      // resolve({ name: "nimesh", city: "surat" });
    });
  });
}

function print(obj) {
  console.log(`My name is ${obj.name}`);
  console.log(`My city is ${obj.city}`);
}
const main = async () => {
  try {
    const data = await fun1();
    print(data);
  } catch (erro) {
    console.log("------>", erro);
  }
};

main();
