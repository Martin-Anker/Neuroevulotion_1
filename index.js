var canvas;
var dot_array = [];

function setup() {
  canvas = createCanvas(800, 800);
  background(155);
  for (i = 0; i <= 10; i++) {
    dot_array.push(new dot(width/2, height/2))
  }
}

function draw() {
  for (i = 0; i <= dot_array.length - 1; i++) {
    dot_array[i].update()
  }
}
