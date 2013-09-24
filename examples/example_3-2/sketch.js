
// Check location with 4 quadrants

var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);
  
};

var draw = function() {

	background(204);

	if ((mouseX < 300) && (mouseY < 300)) { // upper left
		rect(0, 0, 300, 300);
	}

	else if ((mouseX < 300) && (mouseY >= 300)) { // lower left
		rect(0, 300, 300, 300);
	}

	else if ((mouseX >= 300) && (mouseY < 300)) { // upper right
		rect(300, 0, 300, 300);

	} else { // lower right
		rect(300, 300, 300, 300);
	}

};
