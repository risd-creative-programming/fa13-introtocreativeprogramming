// Click within the image and press
// the left and right mouse buttons to 
// change the value of the rectangle
function setup() {
  createGraphics(200, 200);
  background(100);
  //background(100, 50);
  //background(100, 50, 20);
  //background(100, 50, 20, 10);
  //background(color(100));
  //background(color(100, 50));
  //background(color(100, 50, 20));
  //background(color(100, 50, 20, 10));
  //fill(100);
  //fill(100, 50);
  //fill(100, 50, 20);
  //fill(100, 50, 20, 10);
  //fill(color(100));
  //fill(color(100, 50));
  //fill(color(100, 50, 20));
  noStroke();
  fill(color(100, 50, 20));
  rect(0, 0, 50, 50);

}

function draw() {
  if (isMousePressed() && (mouseButton == LEFT)) {
    fill(0);
  } else if (isMousePressed() && (mouseButton == RIGHT)) {
    fill(255);
  } else {
    fill(126);
  }
  rect(25, 25, 50, 50);
}