function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255, 204, 0);
}

function draw() {
  const margin = 50;

  const width = windowWidth / 30;
  const height = windowHeight - margin;

  const x = windowWidth - width - margin;
  const y = windowHeight - height + margin;

  fill(0);
  // translate(x, y);
  // rotate(radians(20));
  rect(x, y, width, height);
}
