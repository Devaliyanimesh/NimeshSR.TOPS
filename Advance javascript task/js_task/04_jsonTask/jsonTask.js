let dataa = require("./data.json");
let prod = require("./product.json");

// 1. import data from json

// Done

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

/* 3. give all city name , which have more character than user given input

function fun1(user, mmcity) {
  let fil = dataa.filter((e) => {
    return e.state_name === user && e.city.length > mmcity;
  });
  let mappp = fil.map((e) => {
    return e.city;
  });
  return mappp;
}
let fill = fun1("Delhi", 15);
console.log("fill", fill); */

/*4. city list which has population more then user give

function fun(user, popu) {
  let state_namee = dataa.filter((e) => {
    return e.state_name === user && e.population > popu;
  });
  let cityy = state_namee.map((e) => {
    return e.city;
  });

  return cityy;
}

let final = fun("Delhi", 249998);
console.log(" final:", final);

second type
function fun(user, popu) {
  let state_namee = dataa.filter((e) => {
    return e.state_name === user;
  });
  let cityy = state_namee.map((e) => {
    return e.population > popu && e.city;
  });

  let ji = [];
  cityy.forEach((e) => {
    if (e !== false) {
      ji.push(e);
    }
  });

  return ji;
}

let final = fun("Delhi", 1633716);
console.log(" final:", final);
*/

/*5. acending decending population wise ----------------

function fun1(user) {
  let stt = dataa.filter((e) => {
    return e.state_name === user;
  });
  let cit = stt.map((e) => {
    return e.population;
  });

  let sortt = cit.sort();

  return sortt;
}
let ds = fun1("Delhi");
console.log("ds", ds);


*/

// 6. top 5 city population wise [only name of city] --------

/*7. give total populatin of state which give by user  error---strig
function fun(user) {
  let statet = dataa.filter((e) => {
    return e.state_name === user;
  });
  let total = 0;
  let city = statet.map((e) => {
    total += +e.population;
  });
  return total;
}
let final = fun("Delhi");
console.log("fgf", final);*/

// 8. give top 5 state name population wise -------