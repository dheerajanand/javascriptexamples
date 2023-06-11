const arr = [
  'Laurence',
  'Jack',
  'Jane',
  '',
  ,
  ,
  ,
  'Sam',
  'Laurence',
  'Jack',
  'Jane',
  '',
  null,
  false,
  undefined,
  0,
  'Sam',
];
console.log('🚀 ~ file: 1_index.js:20 ~ arr:', arr);
//#1: Remove Duplicates
const arr1 = [...new Set(arr)];
console.log('🚀 ~ file: 1_index.js:22 ~ arr1:', arr1);

//#2: Remove undefined/null/0/false
const arr2 = arr1.filter(Boolean);
console.log('🚀 ~ file: 1_index.js:27 ~ arr2:', arr2);

//Combining #1 & #2
const arr3 = [...new Set(arr.filter(Boolean))];
console.log('🚀 ~ file: 1_index.js:31 ~ arr3:', arr3);
