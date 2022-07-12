// https://www.youtube.com/watch?v=HoNTMDTufTU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=2
function mathSequences(arr) {
  let arith = new Set();
  let geo = new Set();
  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  //   return arr;
  if (arith.size === 1) {
    return "Artihmetic";
  }
  if (geo.size === 1) {
    return "Geometric";
  }
  return -1;
}

console.log(mathSequences([2, 4, 6, 8]));
//"Arithmetic"

console.log(mathSequences([3, 9, 27]));
// "Geometric"

console.log(mathSequences([2, 5, 14, 89]));
// -1
