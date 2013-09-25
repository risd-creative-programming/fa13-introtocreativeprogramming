
// Check if mouse is pressed

var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);
  
};


var draw = function() {

	background(204);

	if (isMousePressed() == true) {
		fill(255); // White
	} else {
		fill(0); // Black
	}

	rect(150, 150, 300, 300);

};