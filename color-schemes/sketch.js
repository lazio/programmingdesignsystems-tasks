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
  // var startHue = random(0, 360);
  // var startSat = random(40, 100);
  // var startLig = random(0, 60);

  // var changeHue = random(10, 120);
  // var changeSat = random(15, 40);
  // var changeLig = random(15, 40);

  // var colors = [];
  // for (var i = 0; i < 3; i++) {
  //   colors.push(
  //     colorHsluv(
  //       startHue + i * changeHue,
  //       startSat + i * changeSat,
  //       startLig + i * changeLig
  //     )
  //   );
  // }
  // fill(colors[0]);
  // rect(0, 0, width, height);
  // fill(colors[1]);
  // rect(145, 95, 375, 200);
  // fill(colors[2]);
  // rect(85, 155, 375, 200);

  // Random colors with lerp function
  var boxh = height / 10;
  for (var i = 0; i < 10; i++) {
    var h = lerp(64, 22, i / 9);
    var s = lerp(86, 90, i / 9);
    var l = lerp(96, 56, i / 9);
    fillHsluv(h, s, l);
    rect(0, i * boxh, width, boxh);
  }
}

function draw() {}
