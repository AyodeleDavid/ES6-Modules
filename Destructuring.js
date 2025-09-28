// Array destructuring
const colors = ["red", "green", "blue"];
const [first, , third] = colors;
console.log(first, third); // red blue

// Object destructuring
const person = { name: "Ayo", city: "Lagos" };
const { name, city } = person;
console.log(name, city); // Ayo Lagos
