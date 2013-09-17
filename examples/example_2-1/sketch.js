// Variables placed before setup/draw are called global variables.
// They can be accessed from everywhere in your sketch. 

var x = 200;
var y = -100;
var diameter = 400;

var setup = function() {

  createGraphics(600, 400);
  fill(x, 100, 100);

};


var draw = function() {

  background(0, 100, 150);
  ellipse(x, y, diameter, diameter);

};

