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

// 3. give all city name , which have more character than user given input
// 4. city list which has population more then user give
// 5. acending decending population wise
// 6. top 5 city population wise [only name of city]
// 7. give total populatin of state which give by user
// 8. give top 5 state name population wise

// population price

function fun(username) {
  let state = dataa.filter((e) => {
    return e.state_name === username;
  });

  return state;
}

let final = fun("Delhi");
console.log(" final:", final);
