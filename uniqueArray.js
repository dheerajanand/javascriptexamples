// https://dev.to/soyleninjs/3-ways-to-remove-duplicates-in-an-array-in-javascript-259o
let arr = [1, 2, 3, 1, 4, 2, 0, 9];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// indexof and filter method
const uniqueIndexOfFilter = arr.filter((element, index) => {
  return arr.indexOf(element) === index;
});
console.log(uniqueIndexOfFilter);

// includes and forEach method
let includeForEachArray = [];
arr.forEach((element) => {
  if (!includeForEachArray.includes(element)) {
    includeForEachArray.push(element);
  }
});
console.log(includeForEachArray);

// https://www.youtube.com/watch?v=dvPybpgk5Y4
// brute-force method using a for loop
let uniqueArray = [];
for (let i = 0; i < arr.length; i++) {
  if (uniqueArray.indexOf(arr[i]) === -1) {
    uniqueArray.push(arr[i]);
  }
}
console.log(uniqueArray);

// sort and remove method
let _temp;
let sortArray = arr.sort();
let c = [];
for (let i = 0; i < sortArray.length; i++) {
  if (sortArray[i] !== _temp) {
    c.push(sortArray[i]);
    _temp = sortArray[i];
  }
}
console.log(c);
