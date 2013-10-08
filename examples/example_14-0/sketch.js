// touch events are very similar to mouse events

var red = 0;

var setup = function() {
  createGraphics(800, 1000); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
};

var draw = function() {
  background(red, 255, 255);
  rect(300, 200, 200, 600); // simulated button
};

var touchStart = function() {
  // touchX has the touch's x coordinate
  // touchY has the touch's y coordinate
  if((touchX > 300) && (touchX < 500) && (touchY > 200) && (touchY < 800)){ // if touch inside rectangle
    red = 255;
  } else {
    red = 0;
  }
}