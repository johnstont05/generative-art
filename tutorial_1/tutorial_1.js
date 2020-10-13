var Spacing = 125;
var Offset = 100;
var minSize = 10;
var maxSize = 100;
var colors = ["#eac435","#345995","#e40066","#03cea4","#fb4d3d"];



function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background("#fff");
  noStroke();
  frameRate(1);
}

function draw() {
    var circleCountx = (windowWidth - 220) / Spacing;
    var circleCounty = (windowHeight - 230) / Spacing;

  for (let c = 0; c < 12; c ++){
    for (let i = 0; i < circleCountx; i++){
      for (let j = 0; j < circleCounty; j++){
        let colorpicker = int(random(colors.length));
        fill(colors[colorpicker]);
        let size = random(minSize, maxSize);
        ellipse(Offset + Spacing * i, Offset + Spacing * j, size, size);
        rect(Offset + Spacing * i, Offset + Spacing * j, size - 10, size - 10);
      }
    }
  }
}
