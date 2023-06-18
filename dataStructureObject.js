const portfolio = [
  { name: 'Mark', stock: 'FB' },
  { name: 'Steve', stock: 'AAPL' },
  { name: 'Tim', stock: 'AAPL' },
  { name: 'Steve', stock: 'MSFT' },
  { name: 'Bill', stock: 'MSFT' },
  { name: 'Bill', stock: 'AAPL' },
];

const shareholder = [
  { stock: 'AAPL', name: ['Steve', 'Bill', 'Tim'], count: 3 },
  { stock: 'MSFT', name: ['Steve', 'Bill'], count: 2 },
  { stock: 'FB', name: ['Mark', 'Bill', 'Tim'], count: 1 },
];

result = portfolio.reduce(function (r, a) {
  key = a.name || 'others';
  console.log(a);
  console.log(key);
  r[key] = r[key] || [];
  r[key].push(a);
  return r;
}, Object.create(null));

console.log('getShareholder ', result);
