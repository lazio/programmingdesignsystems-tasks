function setup() {
  createCanvas(windowWidth, windowHeight);

  function colorHsluv(h, s, l) {
    var rgb = hsluv.hsluvToRgb([h, s, l]);
    return color(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
  }

  function fillHsluv(h, s, l) {
    var rgb = hsluv.hsluvToRgb([h, s, l]);
    return fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
  }

  // Random colors with random function
  var startHue = random(0, 100);
  var startSat = random(10, 20);
  var startLig = random(0, 60);

  var changeHue = random(10, 120);
  var changeSat = random(15, 150);
  var changeLig = random(15, 40);

  var colors = [];
  for (var i = 0; i < 3; i++) {
    colors.push(
      colorHsluv(
        startHue + i * changeHue,
        startSat + i * changeSat,
        startLig + i * changeLig
      )
    );
  }

  strokeWeight(0);

  fill(colors[0]);
  rect(0, 0, windowWidth, windowHeight);
  translate(width / 2, height / 2);

  push();

  shearX(PI / 10.0);
  shearY(PI / 10.0);

  angleMode(DEGREES);

  rotate(180);
  fill(colors[1]);
  rect(-60, 40, 60, 40);

  rotate(180);
  fill(colors[1]);
  ellipse(0, 0, 300, 100);
  pop();

  fill(colors[2]);
  //   ellipse(-110, -40, 20, 20);
  ellipse(-55, -18, 20, 20);
  ellipse(0, 0, 20, 20);
  ellipse(55, 18, 20, 20);
  //   ellipse(110, 40, 20, 20);

  //   ellipse(windowWidth - 1000, windowHeight - 300, 300, 100);
}

function draw() {}
