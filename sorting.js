const data = [
    {   "continents": [
        "North America"
        ],
        "population": 6486201,
    },
    {   "continents": [
        "North America 2"
        ],
        "population": 34,
    }
]

const sortedData = (data) => {
    

    // return data?.population?.sort((a, b) => {
    //     return a - b;
    //   });
}

console.log(sortedData(data));

console.log(data.sort(function(a, b){return a.population - b.population}));

var marks = [12, 25, 31, 23, 75, 81, 100];

const sortedDataFunction2 = (data) => {
    return data?.sort((a, b) => {
      return a.population - b.population;
    });
  };

  console.log(sortedDataFunction2(data))
     
     
// Sort elements using compare method
console.log(marks.sort(function(a, b){return a - b}));

// https://codesandbox.io/s/brave-cerf-xr5vcw?file=/src/App.js