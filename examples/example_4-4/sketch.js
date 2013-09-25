
var gray = 0;

var setup = function() {
	createGraphics(600, 400);
	background(100, 200, 30);
	fill(0, 102);
	noStroke();
};

var draw = function() {  // Empty draw() keeps the program running
};

var mouseReleased = function() {
	rect(mouseX, mouseY, 33, 33);
};

