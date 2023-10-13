const data = [
    { id: "123", color: "Red", model: "Tesla" },
    { id: "124", color: "Black", model: "Honda" },
    { id: "125", color: "Red", model: "Audi" },
    { id: "126", color: "Blue", model: "Resla" },
  ],
  keys = ["color", "model"],
  values = ["Ho"],
  regex = new RegExp(values.join("|")),
  output = data.filter((e) => keys.some((k) => regex.test(e[k])));

console.log(output);
