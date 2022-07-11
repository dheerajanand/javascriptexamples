// https://javascript.plainenglish.io/javascript-find-even-numbers-in-array-90943d5480ec
const originalArray = [1, 2, 55, 34, 71, 99, 120, 149];
//Array filter method
const filterArray = originalArray.filter((el) => el % 2 === 0);
console.log(filterArray);

//for of method
const forOfArray = [];
for (nums of originalArray) {
  if (nums % 2 === 0) {
    forOfArray.push(nums);
  }
}
console.log(forOfArray);

//for each method
const forEachArray = [];
originalArray.forEach((nums) => {
  if (nums % 2 === 0) {
    forEachArray.push(nums);
  }
});
console.log(forEachArray);

//traditional for loop
const forLoopArray = [];
for (let i = 0; i < originalArray.length; i++) {
  const num = originalArray[i];
  if (num % 2 === 0) {
    forLoopArray.push(num);
  }
}
console.log(forLoopArray);
