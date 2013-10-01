// bouncing size using sine

var diameter = 0;
var maxDiameter = 50;
var velocity = 1;

var setup = function() {

  createGraphics(600, 400);
  noStroke();

};


var draw = function() {

	background(255);

	// Add the current speed to the x location
  diameter = maxDiameter * sin(frameCount);

  // Slow down the bouncing
  //diameter = maxDiameter * sin(frameCount*0.01);

  // Display circle with diameter
  fill(255, 0, 0);
  ellipse(width/2,height/2,diameter, diameter);

};



