let i = setInterval(() => {
  console.log("hi i am nimesh");
}, 1000);

setTimeout(() => {
  clearInterval(i);
}, 8001);
