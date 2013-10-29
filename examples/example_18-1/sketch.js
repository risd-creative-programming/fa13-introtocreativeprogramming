// SET SOUND
var mySound = new buzz.sound("sunset.mp3");

var setup = function() {
  createGraphics(300, 300);
};

var draw = function() {
  background(255, 200, 200);
};

var mousePressed = function() {
  // PLAY SOUND
  mySound.play();
}


