class user {
  constructor() {
    this.name = "nimesh";
    this.salary = 15555;
    this.fees = 1000;
  }
  login() {
    console.log("---->login");
  }
}

class student extends user {
  constructor() {
    super();
    this.fees = 50000;
  }
  print() {
    console.log("----->", this.fees);
  }
}
class Teacher extends user {
  constructor() {
    this.salry = 50000;
  }
}
let hh = new student();

hh.print();
