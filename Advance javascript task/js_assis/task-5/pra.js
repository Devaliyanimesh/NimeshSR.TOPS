let ij = [
  { city: "Najafgarh", state_name: "Delhi", population: "12031" },
  {
    city: "Najafga",
    state_name: "Delhi",
    population: "1203",
  },
  { city: "Naj", state_name: "Delhi", population: "120318" },
  { city: "Najaf", state_name: "Delhi", population: "1203180" },
  { city: "Najafga", state_name: "Delhi", population: "12031808" },
];
function fun2(user, popu) {
  let state_namee = ij.filter((e) => {
    return e.state_name === user, e.population > popu;
  });
  let cityy = state_namee.map((e) => {
    return e.city;
  });

  return cityy;
}
let final = fun2("Delhi", "1203180");
console.log("final:", final);
