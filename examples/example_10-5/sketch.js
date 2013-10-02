// pushMatrix(), popMatrix()


var x, y;

var setup = function() {

  createGraphics(600, 400);
  noStroke();


};


var draw = function() {

  background(100, 200, 200);

  // Add in push and pop matrix to preserve state of transformation.  
  //pushMatrix();

  translate(100, 100);
  fill(0);
  ellipse(0, 0, 100, 100);

  //popMatrix();

  translate(100, 100);
  fill(255);
  ellipse(0, 0, 50, 50);

};



