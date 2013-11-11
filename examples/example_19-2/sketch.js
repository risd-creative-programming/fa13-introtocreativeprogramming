// You can load JSON from other files by using loadJSON()
// The file must end in .json, be properly formatted, and be in the same folder as this sketch.js file

var people;

// preload function
// 
//

var preload = function() {
  people = loadJSON('http://api.openweathermap.org/data/2.5/weather?q=boston');
}

var setup = function() {
  createGraphics(600, 400);
  noLoop();
  noStroke();
};

var draw = function() {
	background(120, 180, 200);
  // Can access keys
  // you can access values by using a '.' followed by the key
  //drawBubble(people.person1.name, people.person1.age); // accessing the JSON
  //drawBubble(people.person2.name, people.person2.age); // accessing the JSON
  print(people);
};

var drawBubble = function(name, age) {
  var posX = random(width);
  var posY = random(height);
  fill(random(255), random(255), random(255), 180);
  ellipse(posX, posY, age*5, age*5)
  fill(255);
  text(name, posX - 10, posY);
}



