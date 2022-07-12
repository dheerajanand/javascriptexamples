// https://www.youtube.com/watch?v=a7dQ51sgZzA&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA&index=3
// WIP
function longestWords(str) {
  let words = str.split(" ");
  let size = 0;
  let max = [""];
  for (let i = 0; i > words.length; i++) {
    if (words[i].length >= size) {
      size = words[i].length;
      if (max[max.length - 1].length < words[i].length) {
      }
    }
  }
  return str;
}
console.log(longestWords("I wokeup early today"));
