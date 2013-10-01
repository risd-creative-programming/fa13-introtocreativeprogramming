// Order of operations


var x, y;

var setup = function() {

  createGraphics(600, 400);

  // Start in the middle of the screen
  x = width/2;
  y = height/2;

  fill(255, 100, 0);

};


var draw = function() {

  // Add in background to hide path ellipses
  // background(100, 0, 255);

  // Determine the current location
  // Try changing these values
  x += random(-2, 2);
  y += random(-2, 2);

  // Display circle at position
  ellipse(x, y, 50, 50);

};



