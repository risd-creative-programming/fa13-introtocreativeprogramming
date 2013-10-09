var setup = function() {
  createGraphics(600, 600); // set to fit a standard-ish smartphone
  noStroke();
  noLoop();
}

var draw = function() {
  var myImage = loadImage("jennifer.png"); // this image came from my Instagram feed :X
  image(myImage, 0, 0, 600, 600);
  var c = get(100, 100);
  print(c);
  fill(c);
  rect(100, 100, 300, 300);
};