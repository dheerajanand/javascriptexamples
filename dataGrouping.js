let data = [
  {
    name: "dheeraj",
    class: "3",
    grade: "A",
  },
  {
    name: "anand",
    class: "3",
    grade: "B",
  },
  {
    name: "awesome",
    class: "3",
    grade: "D",
  },
  {
    name: "dheeraj2",
    class: "4",
    grade: "A",
  },
  {
    name: "anand2",
    class: "3",
    grade: "B",
  },
  {
    name: "awesome2",
    class: "4",
    grade: "D",
  },
];

// Desired Output
// class - 3
//     grade - A
//         abc, def, ghi
//     grade - B
//         Ssd, ttt

function groupByMethod(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
console.log(groupByMethod(data, "class"));
// https://www.tutorialspoint.com/most-efficient-method-to-groupby-on-an-array-of-objects-in-javascript
const people = [
  { name: "Lee", age: 21 },
  { name: "Ajay", age: 20 },
  { name: "Jane", age: 20 },
];
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    // Add object to list for given key's value
    acc[key].push(obj);
    return acc;
  }, {});
}
console.log(groupBy(people, "age"));
console.log(groupBy(people, "name"));
