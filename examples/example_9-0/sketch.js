
// Render text using a Google Font: http://www.google.com/fonts
// There is a <link> tag in the index.html linking to the font resource

var setup = function() {

  createGraphics(600, 600);
  fill(255, 255, 255);
  noStroke();
  
};


var draw = function() {

	background(0);
  textSize(45);
  textFont('Clicker Script'); // name of Google Font
  text("DIFFICULT TO READ", 70, 200);

};
