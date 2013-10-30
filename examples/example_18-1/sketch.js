// Combinging a third-party JS library with a sketch
// Just use the normal third-party JS library code
// Usually, you want to use the third-party code in setup
// Unless you'd like to use things in certain event functions like mousePressed

// Initializing a variable using the third-party library buzz object
var mySound = new buzz.sound('rhodes_loop.wav');
var myImage;

var setup = function() {
  createGraphics(300, 300);
  myImage =  loadImage('red.jpg');
};

var draw = function() {
  background(255, 200, 200);
  image(myImage, 20, 20, 150, 150);
};

var mousePressed = function() {
  // Using the third-party library to call play() on the buzz object
  mySound.play();
}
