let arr = [1, 2, 3, 1, 4, 2, 0, 9];
console.log(new Set(arr));

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
