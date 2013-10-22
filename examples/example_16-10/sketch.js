var data;

var setup = function() {
  createGraphics(600, 400);
  noStroke();
  textSize(20);

  data = loadJSON("dsample.js");
};

var draw = function() {

	background(120, 180, 200);
  print(data);


};



