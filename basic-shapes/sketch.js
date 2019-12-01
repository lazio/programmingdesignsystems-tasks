function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  const baseX = width / 2;
  const baseY = height / 2;

  const circleSize = width * 0.06;

  fill("#000");

  rect(0, 0, width, baseY);

  let ellipsePositions = [
    {
      x: baseX,
      y: baseY
    },
    {
      x: baseX + 100,
      y: baseY
    },
    {
      x: baseX + 50,
      y: baseY - 50
    }
  ];

  fill("#fff");
  ellipsePositions.forEach(position => {
    ellipse(position.x, position.y, circleSize, circleSize);
  });

  fill("##fff");
  translate(baseX, baseY);
  triangle(-50, 0, 150, 0, 50, 300);
}
