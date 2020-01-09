function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  translate(width / 2, height / 2);

  noFill();
  var radius = width * 0.1;
  ellipse(0, 0, radius * 2, radius * 2);

  fill(30);
  var x = cos(radians(360)) * radius;
  var y = sin(radians(360)) * radius;
  ellipse(x, y, 20, 20);
}
