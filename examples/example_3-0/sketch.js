// Check location

// Cursor position selects the left or right half
// of the display window
var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);

};

var draw = function() {

  background(204);
  if (mouseX < 300) {
    rect(0, 0, 300, 600); // Left
  } else {
    rect(300, 0, 300, 600); // Right
  }
  
};