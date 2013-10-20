
// declare two graphics canvas variables
var canvas0;
var canvas1;


var setup = function() {
  
  // create first graphics canvas
  canvas0 = createGraphics(200, 200);
  // set position for first graphics canvas
  canvas0.position(0, 0); 


  // create second graphics canvas
  canvas1 = createGraphics(300, 300);
  // set position for second graphics canvas
  canvas1.position(500, 0);


};

var draw = function() {

  // switch to first canvas
  context( canvas0 );

  // draw everything in first canvas
  drawStuff(0);



  // switch to second canvas
  context( canvas1 );

  // draw everything in second canvas
  drawStuff(255);

};



var drawStuff = function(val) {

  background(255, val, 0);
  rect(100, 100, 40, 40);

};


