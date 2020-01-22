//https://javascript.info/object

let myObj = {
  name: "Dheeraj"
};
myObj.age = 35;

console.log(myObj);
console.log(myObj.name);
console.log(myObj.age);

// Remove a prpoerty
delete myObj.name;
console.log(myObj);

let user = {
  name: "Dheeraj",
  age: 33,
  isAdmin: true
};

// For loop and key
for (let key in user) {
  console.log(key);
  console.log(user[key]);
}

for (let use in user) {
  console.log(use);
}
