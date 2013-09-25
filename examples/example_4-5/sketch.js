var dragX, dragY, moveX, moveY;

var setup = function() {

	createGraphics(600, 600);
	smooth();
	noStroke();

};

var draw = function() {

	background(255);
	fill(0);
	ellipse(dragX, dragY, 100, 100); // Black circle
	fill(153);
	ellipse(moveX, moveY, 100, 100); // Gray circle

};

var mouseMoved = function() { // Move gray circle

	moveX = mouseX;
	moveY = mouseY;

};

var mouseDragged = function() { // Move black circle

	dragX = mouseX;
	dragY = mouseY;

};

