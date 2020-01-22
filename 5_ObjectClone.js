//https://www.youtube.com/watch?v=H1NmJIv1A2Y

const circle = {
  radius: 1,
  draw() {
    return "draw circle";
  }
};

console.log(circle.draw());

const another = {};
for (let key in circle) {
  console.log((another[key] = circle[key]));
}

another;
