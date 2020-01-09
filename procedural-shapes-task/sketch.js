function setup() {
  createCanvas(windowWidth, windowHeight);

  fill("tomato");

  var numVertices = 4;
  var spacing = 360 / numVertices;

  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < numVertices + 1; i++) {
    strokeWeight(random(20));

    var x = cos(radians(i * spacing)) * 100;
    var y = sin(radians(i * spacing)) * 100;

    if (i == 0) {
      vertex(x, y);
    } else {
      var cAngle = spacing / 2;
      var cX = cos(radians(cAngle)) * 180;
      var cY = sin(radians(cAngle)) * 180;
      quadraticVertex(cX, cY, x, y);
    }
  }
  endShape();
}

function draw() {}
