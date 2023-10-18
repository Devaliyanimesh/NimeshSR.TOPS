/*
-> make data storage for your family and vehicle details of each family member
-> all son of your dada name only
-> all son of father/uncle's (note - me jname print thava joiye like uncle nu apu to uncle other wise dada nu apu to dad nu)
-> badha family ni vehicale details like me j

*/
let familytree = {
  name: "nagjibhai",
  age: 80,
  child: [
    {
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
      ],
    },
    {
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
let x = "age";
console.log("=------->", familytree.child[0]);

console.log(familytree.name);
console.log(familytree.child[1].name);
console.log(familytree.child[1].son[0].name);
console.log(familytree.child[2].vehicle[0].name);
console.log(familytree.child[0].vehicle[0].number);

console.log(familytree.child[1].son[1].age);
