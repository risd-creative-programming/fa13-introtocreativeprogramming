// A simpler array example.
// Exactly the same, but setting all values at the start.


var sizes = [50, 100, 200];

var setup = function() {

  createGraphics(600, 400);
  noStroke();
  fill(255);

};

var draw = function() {

  background(71);

  ellipse(100, 100, sizes[0], sizes[0]);
  ellipse(300, 100, sizes[1], sizes[1]);
  ellipse(500, 100, sizes[2], sizes[2]);

};
