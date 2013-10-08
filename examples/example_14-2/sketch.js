// touch events are very similar to mouse events

var setup = function() {
  createGraphics(800, 1000); // set to fit a standard-ish smartphone
  noStroke();
  fill(255, 255, 255);
};

var draw = function() {
  background(200, 190, 190);
};

var touchStart = function() {
  fill(0, 255, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[0].x, touches[0].y, 80, 80);
  }
}

var touchMove = function() {
  fill(0, 0, 255);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[0].x, touches[0].y, 80, 80);
  }
}

var touchEnd = function() {
  fill(255, 0, 0);
  for(var i = 0; i < touches.length; i++) {
    ellipse(touches[0].x, touches[0].y, 80, 80);
  }
}

