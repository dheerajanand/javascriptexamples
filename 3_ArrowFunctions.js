//https://javascript.info/arrow-functions-basics

let myFunc = (a, b) => a + b;
console.log(myFunc(44, 55));

let double = n => n * 2;
console.log(double(25));

let sum = (x, y) => {
  let result = x + y;
  return result;
};
console.log(sum(2, 3));
