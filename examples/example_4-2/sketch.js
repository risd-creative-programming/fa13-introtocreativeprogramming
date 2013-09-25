

// mouse events - mousePressed(), mouseReleased(), mouseMoved(), mouseDragged()
// runs once each time unlike mousepressed

var gray = 0;

var setup = function() {
	createGraphics(600, 400);
};

var draw = function() {
	background(gray);
};

var mousePressed = function() {
	gray += 20;
};


