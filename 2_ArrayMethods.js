// https://javascript.info/array-methods

//arr.push(...items) - Add items to the end
//arr.pop() - Extract an item from the end
//arr.shift() - Extract an item from the beginning
//arr.unshift(...items) - Adds item to the beginning

let arr1 = ["I", "AM", "ARR1"];
arr1.push("item 1", "item 2", "item 3");
arr1;
arr1.pop();
arr1;
arr1.shift();
arr1;
arr1.unshift("Unshifted 1", "Unshifted 2", "Unshifted 3");
arr1;

//Splice Method
let arr2 = ["I", "Study", "JavaScript"];
console.log(arr2.splice(1, 1, "Item 1", "Item 2", "Item 2"));
console.log(arr2);

// Negative indexing allowed
let arr3 = [1, 2, 5];
arr3.splice(-1, 0);
arr3;
arr3.splice(-1, 0, 3, 4);
arr3;

// Concat method
let arr4 = [11, 12, 13];
let arr5 = [14, 15, 16];
let arr6 = [17, 18, 19];
console.log(arr4.concat(arr5, arr6));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Foreach method
let arr7 = [21, 21, 22];
arr7.forEach(el => console.log(el * 2));

let arr8 = [1, 0, false];
console.log(arr8.indexOf(1));
console.log(arr8.indexOf(0));
console.log(arr8.indexOf(false));
console.log(arr8.includes(1));
console.log(arr8.includes(100));

// Find Function
let arr9 = [
  { id: 1, name: "User1" },
  { id: 2, name: "User2" },
  { id: 3, name: "User3" }
];

let user = arr9.find(item => item.id === 1);
console.log(user.name);


var array = [
  [123, 234, 456, 789],
  [321, 654, 987],
  [963, 852, 741]
];

const shots = [
  {id: 1, amount: 2},
  {id: 2, amount: 4},
  {id: 3, amount: 52},
  {id: 4, amount: 36},
  {id: 5, amount: 13},
  {id: 6, amount: 33}
];

const a = shots.reduce((acc, shot) => acc = acc > shot.amount ? acc : shot.amount, 0);
console.log(a)
