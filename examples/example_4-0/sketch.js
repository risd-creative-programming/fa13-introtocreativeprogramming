
// Check location of 1 rectangular area

var setup = function() {

  createGraphics(600, 600);
  noStroke();
  fill(0);
  
};


var draw = function() {

	background(204);

 	if ((mouseX >= 100) && (mouseX <= 300) && (mouseY >= 200) && (mouseY <= 400)) {
   	rect(100, 200, 200, 200);
	}

};
