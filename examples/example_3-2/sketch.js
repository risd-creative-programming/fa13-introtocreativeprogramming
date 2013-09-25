
// Check location with OR

var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);
  
};

var draw = function() {

	background(204);

	if ((mouseX < 300) || (mouseY < 300)) { // either or
		ellipse(300,300,50,50);
	}

};
