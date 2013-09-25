
var setup = function() {

	createGraphics(600, 400);
	background(0, 150, 255);
};

var draw = function() {
};


var keyPressed = function() {

	print(keyCode);
	var y = map(keyCode, 65, 90, 0, 400);
	rect(0, y, 600, height/26);

};
