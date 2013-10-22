// Getting Started with Processing
// Casey Reas

// Adapted by Lauren McCarthy


var speed = 2.5;
var diameter = 40;
var x;
var y;

var setup = function() {
  createGraphics(600, 400);
  background(50, 89, 100);
  x = width/2;
  y = height/2;
};

var draw = function() {
  x += random(-speed, speed);
  y += random(-speed, speed);
  ellipse(x, y, diameter, diameter);
}

var draw = function() {

  x += random(-speed, speed);
  y += random(-speed, speed);
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  ellipse(x, y, diameter, diameter);

};



// function JitterBug(tempX, tempY, tempDiameter) {
//   this.x = tempX;
//   this.y = tempY;
//   this.diameter = tempDiamter;
//   this.speed = 0.5;
// }

// JitterBug.prototype.move = function() {
//   x += random(-speed, speed);
//   y += random(-speed, speed);
// };


// JitterBug.prototype.display = function() {
//   ellipse(x, y, diameter, diameter);
// };




// var bug;  // Declare object

// var setup = function() {
//   createGraphics(600, 400);
//   background(50, 89, 100);

//   // Create object and pass in parameters
//   bug = new JitterBug(width/2, height/2, 20);
// };

// var draw = function() {
//   bug.move();
//   bug.display();
// };



