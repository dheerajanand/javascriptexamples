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

// https://www.youtube.com/shorts/iSrtKsvt2qU
const groups = {
  class4: data.filter((obj) => obj.class === "4"),
  class3: data.filter((obj) => obj.class === "3"),
};
console.log(groups);
