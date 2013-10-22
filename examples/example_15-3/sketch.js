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

// define functions used for both touch and mouse
var drawGreen = function(x, y) {
  fill(0, 255, 0);
  ellipse(x, y, 80, 80);
};


var drawRed = function(x, y) {
  fill(255, 0, 0);
  ellipse(x, y, 80, 80);
};

var drawBlue = function(x, y) {
  fill(0, 0, 255);
  ellipse(x, y, 80, 80);
};

// hook functions up to touches
var touchStarted = function() {
  drawGreen(touchX, touchY);
}

var touchMoved = function() {
  drawBlue(touchX, touchY);
}

var touchEnded = function() {
  drawRed(touchX, touchY);
}

// hook functions up to mouse
var mousePressed = function() {
  drawGreen(mouseX, mouseY);
}

var mouseDragged = function() {
  drawBlue(mouseX, mouseY);
}

var mouseReleased = function() {
  drawRed(mouseX, mouseY);
}
