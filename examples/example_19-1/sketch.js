// You can load JSON from other files by using loadJSON()
// The file must end in .json, be properly formatted, and be in the same folder as this sketch.js file

var people;

// preload function
// 
//

var preload = function() {
  people = loadJSON('people.json');
}

var setup = function() {
  createGraphics(600, 400);
};

var draw = function() {
	background(120, 180, 200);
  print(people);
};

var drawBubble = function(name, age) {
  // person 1 bubble
  fill(155, 30, 180, 180);
  // you can access values by using a '.' followed by the key
  ellipse(200, 200, person1.age*5, person1.age*5);  // person1.age = 30
  fill(255);
  text(person1.name, 160, 200); // person1.name = Morgan

  // person 2 bubble
  fill(180, 180, 34, 180);
  ellipse(300, 200, person2.age*5, person2.age*5);  // person2.age = 32
  fill(255);
  text(person2.name, 280, 200); // person2.name = Joss
}



