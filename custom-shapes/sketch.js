function setup() {
  createCanvas(windowWidth, windowHeight);
  // background(255, 204, 0);
}

function draw() {
  fill("#000");
  rect(0, 0, width, height);

  fill("#fff");
  stroke(40);
  // strokeCap(SQUARE);
  // strokeWeight(width * 0.002);

  beginShape();
  vertex(100, height);
  vertex(200, height / 2);
  vertex(300, height / 4);
  vertex(400, height);
  endShape(CLOSE);

  const horCenter = width / 2;
  const vertCenter = height / 2;

  beginShape();
  vertex(horCenter + 100, 0);
  quadraticVertex(
    horCenter + 100,
    vertCenter + 300,
    horCenter + 200,
    vertCenter
  );

  quadraticVertex(
    horCenter + 300,
    vertCenter - 500,
    horCenter + 350,
    vertCenter - 200
  );

  quadraticVertex(
    horCenter + 450,
    vertCenter + 200,
    horCenter + 490,
    vertCenter - 200
  );

  vertex(horCenter + 500, 0);

  endShape(CLOSE);
}
