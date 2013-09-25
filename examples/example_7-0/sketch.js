
<<<<<<< HEAD
// Keyboard input
// Draw a rectangle when any key is pressed

var setup = function() {

	createGraphics(600, 600);
	smooth();
	strokeWeight(8);

}

var draw = function() {

	background(204);
	
	if (isKeyPressed() == true) { // If the key is pressed,
		line(120, 120, 480, 480); // draw a line
	} else { // Otherwise,
		rect(240, 240, 120, 120); // draw a rectangle
	}
=======
// Render a single image sourced from this folder

var img;

var setup = function() {

  createGraphics(600, 600);
  // Load an image file that is located in the same folder as this sketch.js file
  // File name must be spelled exactly the same, with the extension
  // The right hand side of this equation 'returns' an image object and stores it in the 'img' variable
  img = loadImage("cat.jpg");
  
};


var draw = function() {

	background(250, 200, 200);
  // For a fading image, try:
  //background(250, 200, 200, 20);

  // Draw the image with the image() command
  // Takes three arguments: the image variable, x position, y position
 	image(img, mouseX, mouseY);
>>>>>>> 14098969900da472774c83cf7cea8aa8156f47b9

};
