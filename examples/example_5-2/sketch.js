
var setup = function() {

	createGraphics(600, 400);

};

var draw = function() {
	background(0);
	ellipse(width/2, height/2, 100, 100);

};


var keyPressed = function() {

	if (key == 'A') {
		fill(0); // Black
	} 
	else if (key == 'B') {
		fill(255); // White
	} 
	else if (key == 'C') {
		fill(126); // Gray
	}

	//print(keyCode);

};

