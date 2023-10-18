function cla() {
  let a = document.getElementById("cla").value;

  let b = document.getElementById("c").value;
  let c = document.getElementById("data").value;
  let d = document.getElementById("html").value;
  let e = document.getElementById("css").value;
  let f = document.getElementById("php").value;
  let g = document.getElementById("core").value;

  let multi =
    Number(a) +
    Number(b) +
    Number(c) +
    Number(d) +
    Number(e) +
    Number(f) +
    Number(g);
  document.getElementById("total").innerText = multi;
  let marks = multi / 7;
  document.getElementById("msssg").innerText = marks;
}
