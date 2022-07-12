// https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
const array1 = [1, 2, 3, 6];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];

// ECMAScript 6 method
console.log([...new Set([...array1, ...array2])]);
console.log([...new Set(array1.concat(array2))]);

// ECMAScript 2015 method
console.log(Array.from(new Set(array1.concat(array2))));

//Filter method
function mergeunique(arr1, arr2) {
  return arr1.concat(
    arr2.filter(function (item) {
      return arr1.indexOf(item) === -1;
    })
  );
}
console.log(mergeunique(array1, array2));
