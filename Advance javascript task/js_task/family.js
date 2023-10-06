let familytree = {
  name: "nagjibhai",
  age: 80,
  child: [
    {
      id: 1,
      name: "harsukh",
      age: 38,
      ocuupation: "labour",
      vehicle: [
        {
          name: "Shine",
          number: 2232,
        },
        {
          name: "thar",
          number: 4444,
        },
      ],
      son: [
        {
          name: "nimesh",
          age: 20,
        },
        {
          name: "pritesh",
          age: 22,
        },
      ],
    },
    {
      id: 2,
      name: "lalitbhai",
      age: 42,
      ocuupation: "labour",
      vehicle: [
        {
          name: "Shine",
          number: 1234,
        },
        {
          name: "thar",
          number: 1235,
        },
      ],
      son: [
        {
          name: "hardik",
        },
        {
          name: "snehal",
        },
      ],
    },
    {
      id: 3,
      name: "Rasikbhai",
      age: 50,
      ocuupation: "labour",
      vehicle: [
        {
          name: "DUKE",
          number: 1234,
          type: "Bike",
        },
        {
          name: "thar",
          number: 1234,
          type: "car",
        },
      ],
      son: [
        {
          name: "Chiragh",
        },
      ],
    },
  ],
};
// for (let key in familytree) {
//   console.log("=------->", familytree[key]);
// }

// first

// let x = "age";
// console.log("=------->", familytree.child[0]);

// second
// console.log(familytree.name);
// console.log(familytree.child[1].name);
// console.log(familytree.child[1].son[0].name);
// console.log(familytree.child[2].vehicle[0].name);
// console.log(familytree.child[0].vehicle[0].number);
// console.log(familytree.child[1].son[1].age);

//Third

// find all child name by family id like -["jigar ", "kavya"]
// function fun(user) {
//   let fil = familytree.child.find((e) => {
//     return e.id === user;
//   });

//   let fill = fil.son.map((e) => {
//     return e["name"];
//   });

//   return fill;
// }

// let fill = fun(1);
// console.log("fill", fill);
