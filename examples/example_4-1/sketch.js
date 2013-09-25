
// Check which mouse button is pressed

var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);
  
};


var draw = function() {

	background(204);


	// mouseButton - black, white, gray
	if (isMousePressed() == true) {
		if (mouseButton == LEFT) {
	  	fill(0); // Black
		} else if (mouseButton == RIGHT) {
	  	fill(255); // White
		}
	} else {
		fill(126); // Gray
	}

	rect(150, 150, 300, 300);

};