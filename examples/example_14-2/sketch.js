// touch events are very similar to mouse events

var setup = function() {
  createGraphics(1000, 1600); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
  background(200, 190, 190);
};

var draw = function() {
  // keeps programming running even if empty
};

var touchStarted = function() {
  fill(0, 255, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

var touchMoved = function() {
  fill(0, 0, 255);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}

var touchEnded = function() {
  fill(255, 0, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[i].x, touches[i].y, 80, 80);
  }
}
