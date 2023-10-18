let moon = document.querySelector(".fa-moon");
moon.addEventListener("click", function () {
  document.body.classList.toggle("inter");

  if (document.body.classList.contains("inter") == true) {
    moon.classList.add("fa-sun");
    moon.classList.remove("fa-moon");
  } else {
    moon.classList.remove("fa-sun");
    moon.classList.add("fa-moon");
  }
});

let cli = document.querySelector(".barss");
let wor = document.querySelector(".nav");
cli.addEventListener("click", function () {
  wor.classList.toggle("hide");
  if (wor.classList.contains("hide") == true) {
  }
});

let cl = document.getElementById("click");

cl.addEventListener("click", function () {
  wor.classList.remove("hide");
});
