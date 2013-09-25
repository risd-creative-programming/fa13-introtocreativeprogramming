
// Render text using the text() function

var setup = function() {

  createGraphics(600, 600);
  fill(255, 0, 0);
  
};


var draw = function() {

	background(250, 250, 200);
  //textSize(48); // sets the font size
  //stroke(0); // text renders with stroke, too
  //textFont('Purisa'); // will automatically work with any font on your local machine
  //textStyle(BOLD); // takes NORMAL, ITALIC or BOLD
  text("HELLO WORLD", 100, 200);

};
