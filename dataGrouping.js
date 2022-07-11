let data = [
  {
    name: "dheeraj",
    class: "3",
    grade: "A",
  },
  {
    name: "anand",
    class: "3",
    grade: "B",
  },
  {
    name: "awesome",
    class: "3",
    grade: "D",
  },
  {
    name: "dheeraj2",
    class: "4",
    grade: "A",
  },
  {
    name: "anand2",
    class: "3",
    grade: "B",
  },
  {
    name: "awesome2",
    class: "4",
    grade: "D",
  },
];

// Desired Output
// class - 3
//     grade - A
//         abc, def, ghi
//     grade - B
//         Ssd, ttt

const def = {};
const abc = data.filter((el) => {
  if (el.grade === "A") {
    return el.grade === "A";
  }
});
console.log(abc);
