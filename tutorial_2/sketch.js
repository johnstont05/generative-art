const crystalSize = 500;
const sides = 6;
let palette = [];

function setup() {
  createCanvas(530, 530, SVG);

  palette = [
    color(255, 52, 154), //pink
    color(4, 0, 152), //blue
  ];

  noLoop();
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  testLines()
}

function testLines() {
  const rando = random(1);
  let numShapes
  if(rando > 0.5) {
    numShapes = sides
  } else {
    numShapes = sides * 2
  };

  const rando2 = floor(random(0, palette.length));
  const strokeColor = palette[rando2];

  noFill();
  push();
  translate(width / 2, height / 2);
  stroke(palette[0]);
  ellipse(0, 0, crystalSize, crystalSize);

  stroke(strokeColor);
  const angle = 360 / numShapes;
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, crystalSize / 2, 0);
    rotate(angle);
  }
  pop();
}
