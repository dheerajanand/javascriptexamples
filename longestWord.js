// https://www.youtube.com/watch?v=yG03EvfHSIU&list=PLnHJACx3NwAdQElswAscNtHAZLAQYgpDA

function longestString(string) {
  let words = string.split(" ");
  let longestWord = "";
  for (let word of words) {
    // console.log(word);
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  //   console.log(words);
  return longestWord;
}
console.log(longestString("i am dheeraj"));
console.log(longestString("i am fantastic"));
