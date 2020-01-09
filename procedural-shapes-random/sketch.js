function setup() {
  createCanvas(windowWidth, windowHeight);

  // generate random lines
  fill("tomato");
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 10; i++) {
    var x = random(-100, 100);
    var y = random(-100, 100);
    vertex(x, y);
  }
  endShape();

  // generate circle
  translate(width / 4, height / 4);
  beginShape();
  for (var i = 0; i < 11; i++) {
    var x = cos(radians(i * 36)) * 100;
    var y = sin(radians(i * 36)) * 100;
    vertex(x, y);
  }
  endShape();

  // generate triangle
  var numVertices = 3; // or 4 or 30
  var spacing = 360 / numVertices;
  translate(-width / 2, -height / 2);
  beginShape();
  for (var i = 0; i < numVertices + 1; i++) {
    var x = cos(radians(i * spacing)) * 100;
    var y = sin(radians(i * spacing)) * 100;
    vertex(x, y);
  }
  endShape();

  // generate circle with a bit random radius
  translate(width / 2, height / 150);
  beginShape();
  for (var i = 0; i < 100; i++) {
    var radius = 100 + random(5);
    var x = cos(radians(i * 3.6)) * radius;
    var y = sin(radians(i * 3.6)) * radius;
    vertex(x, y);
  }
  endShape();

  // generate circle with a bit random radius
  translate(-500, 480);
  var radius = 100;
  beginShape();
  for (var i = 0; i < 11; i++) {
    var x = cos(radians(i * 36)) * radius;
    var y = sin(radians(i * 36)) * radius;
    vertex(x, y);

    if (radius == 100) {
      radius = 50;
    } else {
      radius = 100;
    }
  }
  endShape();

  // generate circle with a bit random radius
  translate(250, 0);
  var numVertices = 7;
  var spacing = 360 / numVertices;

  beginShape();
  for (var i = 0; i < numVertices + 1; i++) {
    var angle = i * spacing;
    var x = cos(radians(angle)) * 100;
    var y = sin(radians(angle)) * 100;

    if (i == 0) {
      vertex(x, y);
    } else {
      var cAngle = angle - spacing / 2;
      var cX = cos(radians(cAngle)) * 180;
      var cY = sin(radians(cAngle)) * 180;
      quadraticVertex(cX, cY, x, y);
    }
  }
  endShape();

  fill("none");
  strokeWeight(20);
  strokeCap(SQUARE);
  translate(-250, -500);
  beginShape();
  for (var i = 0; i < 200; i++) {
    var x = i * 2;
    var y = cos(i * radians(2)) * 100;
    vertex(x, y);
  }
  endShape();
}

function draw() {}
