// const id = setInterval(() => {
//   for (let i = 1; i < Infinity; i++) {
//     console.log(i);
//   }
// }, 2000);

let i = setInterval(() => {
  let current = new Date();
  let time = current.getMinutes();
  let hors = current.getHours();
  console.log(`current Time----> ${hors}:${time}`);
}, 1000);

setTimeout(() => {
  clearInterval(i);
}, 1000);