// touch events are very similar to mouse events

var setup = function() {
  createGraphics(1000, 1600); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
};

var draw = function() {
  // keeps program looping even though it is empty
};

var touchStart = function() {
  fill(0, 255, 0);
  ellipse(touchX, touchY, 80, 80);
}

var touchMove = function() {
  fill(0, 0, 255);
  ellipse(touchX, touchY, 80, 80);
}

var touchEnd = function() {
  fill(255, 0, 0);
  ellipse(touchX, touchY, 80, 80);
}

