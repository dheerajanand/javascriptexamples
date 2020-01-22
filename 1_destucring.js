// https://javascript.info/destructuring-assignment

let arr = ["Dheeraj", "Anand"];
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);

let [fName, lName] = "Dheeraj Anand".split(" ");
console.log(fName);
console.log(lName);

// Ignoring the element using comma
let [a, , c, ...restItems] = ["AA", "BB", "CC", "DD", "EE", "FF"];
console.log(a);
console.log(c);
console.log(restItems);

//Works with any iterable not just with Arrays
let [x, y, z] = "abc";
console.log(x);
console.log(y);
console.log(z);

// Looping with Entries
user = {
  name: "John",
  age: 30
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Map Function
let user2 = new Map();
user2.set("name", "Dheeraj");
// user2.set("age", 35);

for (let [key, value] of Object.entries(user2)) {
  console.log(`${key}: ${value}`);
}
