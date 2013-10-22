// Getting Started with Processing
// Casey Reas

// Adapted by Lauren McCarthy

function JitterBug(tempX, tempY, tempDiameter) {
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 0.5;
}

JitterBug.prototype.move = function() {
  x += random(-speed, speed);
  y += random(-speed, speed);
};


JitterBug.prototype.display = function() {
  ellipse(x, y, diameter, diameter);
};




var bug, jit;  // Declare object

var setup = function() {
  createGraphics(600, 400);
  background(50, 89, 100);

  // Create object and pass in parameters
  bug = new JitterBug(width/2, height/2, 20);
  jit = new JitterBug(20, 20, 20);
};

var draw = function() {
  bug.move();
  bug.display();
  jit.move();
  jit.display();
};
