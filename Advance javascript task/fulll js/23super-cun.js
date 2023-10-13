class cm {
  constructor() {
    this.fee = 2999;
    this.salar = 9999;
  }
  login() {
    console.log("----->login");
  }
}

class Teacher extends cm {
  salary() {
    console.log("---salary", this.salar);
  }
}

class student extends cm {
  constructor() {
    super();
    this.fee = 1000000;
  }
  fees() {
    console.log("-->stfees", this.fee);
  }
}
const one = new Teacher();
one.salary();

const two = new student();
two.fees();
// constru overriding
