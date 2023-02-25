const a = [1, 2, 3, 4];
const b = [15, 16, 17, 18];
const c = a.concat(b);

c;

//First Method
const removeEvenNumber = (inputData) => {
  let odds = [];
  for (let number of inputData) {
    if (number % 2 != 0) {
      odds.push(number);
    }
  }
  return odds;
};
const d = removeEvenNumber(c);
d;

//Second Method
const removeEvenNumberNew = (inputData) => {
  return inputData.filter((number) => number % 2 != 0);
};

//For Total - Array Reduce Method
const e = removeEvenNumberNew(c);
e;
const f = e.reduce((a, b) => a + b, 0);
f;

//To Get Square Root of Number
console.log(Math.sqrt(f));
