let dataa = require("./data.json");
let prod = require("./product.json");

// function fun() {
//   let one = prod.filter((e) => {
//     return (
//       e.gender === "male" &&
//       e.price > 100 &&
//       e.color[0] == "red" &&
//       e.discountPercentage > 16.49
//     );
//   });
//   let two = one.map((e) => {
//     return e.title;
//   });
//   let ext = [];
//   two.forEach((e) => {
//     if (e !== undefined) {
//       ext.push(e);
//     }
//   });
//   return ext;
// }
// let hg = fun();
// console.log("hg", hg);

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
// function fun2(user, user11) {
//   let first = dataa.filter((e) => {
//     return e.state_name === user;
//   });
//   let jj = first.sort(function (a, b) {
//     return b.population - a.population;
//   });
//   let secod = first.map((e) => {
//     return e.population;
//   });
//   let kk = secod.slice(0, 6);

//   return kk;
// }
// let final = fun2("Delhi");
// console.log("final", final);

/*7. give total populatin of state which give by user  
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

// function fun1() {
//   let arr = [];
//   let dsf = dataa.map((objel) => {
//     // console.log("dataa--->", objel.state_name);
//     let index = arr.findIndex((ele) => ele.state === objel.state_name);
//     if (index === -1) {
//       // console.log("-------if called");
//       arr.push({
//         state: objel.state_name,
//         population: +objel.population,
//       });
//     } else {
//       arr[index].population += +objel.population;
//     }
//   });

//   let df = arr.sort(function (a, b) {
//     return b.population - a.population;
//   });
//   return df;
// }
// let final = fun1();
// console.log("final", final);

//   { name: "madan", age: "12" },
//   { name: "man", age: "13" },
//   { name: "dan", age: "14" },
//   { name: "dam", age: "11" },
//   { name: "ram", age: "17" },

//

// let h = data.sort(function (a, b) {
//   return a.age - b.age;
// });
// console.log("h  h", h);

// (+last || last) + +e.population;

// function fun(nn) {
//   let jh = dataa.filter((e) => {
//     return e.state_name;
//   });
//   let same = [];
//   let ll = jh.forEach((e, i) => {
//     if (e.state_name === e.state_name) {
//       same.push(e);
//     }
//   });

//   return same;
// }
// let fdf = fun();
// console.log("fdf", fdf);
// // console.log("jh  jh", jh);
