let dataa = require("./data.json");
let prod = require("./product.json");

// 1. import data from json
// 2. give all city name of state which one give by user
// function citybystate(statename) {
//     let match = dataa.filter((e) => {
//       return e.state_name === statename;
//     });

//     let data = match.map((e) => {
//       return e.city;
//     });
//     return data;
//   }

//   let cityofkarnatak = citybystate("Delhi");
//   console.log(" cityofkarnatak:", cityofkarnatak);

function fun(user, popu) {
  let state_namee = dataa.filter((e) => {
    return e.state_name === user && e.population > popu;
  });
  let cityy = state_namee.map((e) => {
    return e.city;
  });

  return cityy;
}

let final = fun("Delhi", "163716");
console.log(" final:", final);
