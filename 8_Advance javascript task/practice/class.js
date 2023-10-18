class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printname() {
    console.log(`my name is ${this.name}`);
  }
  printage(x) {
    console.log(`after 10 year ${this.age + x} are ${x} year`);
    console.log(`my age is ${this.age}`);
  }
}

let cla = new user("nimesh", 22);
console.log("cla", cla);
cla.printage(10);
