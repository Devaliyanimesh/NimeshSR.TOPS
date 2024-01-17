let person = [
    { name: "uv", age: 23 },
    { name: "nayan", age: 25 },
    { name: "dharmin", age: 20 },
    { name: "sid", age: 22 },
    { name: "rajni", age: 29 },
];

// Use map to create an array of ages
let ages = person.map((e) => e.age);

// Calculate the sum of ages
let sum = ages.reduce((total, current) => total + current, 0);

// Calculate the average age
let average = sum / person.length;

console.log(average);
