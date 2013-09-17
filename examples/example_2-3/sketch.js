// Map converts a value from one range to another.


var setup = function() {
  createGraphics(600, 400);
  strokeWeight(12);
}

var draw = function() {
  background(204);

  // draw one white line attached to mouse
  stroke(255);
  line(0, 0, mouseX, mouseY); 
  
  // This first line just uses mouseX/2 to determine the x coordinate for the black line.
  var mx = mouseX/2; 

  // If you switch in this line using map, it scales the coordinate with mouseX to a determined range.
  // var mx = map(mouseX, 0, width, 0, 200);

  // Constrain is similar to map, but it just clamps the values on either end, rather than evenly placing.
  // var mx = constrain(mouseX, 0, width, 0, 200);

  // draw black line
	stroke(0);  
  line(0, 0, mx, mouseY); 
}


