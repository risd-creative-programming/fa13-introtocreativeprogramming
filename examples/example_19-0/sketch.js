// JSON stands for JavaScript Object Notation
// It is a convenient way to make collections of data with key/value pairs
// Syntax:
// { "key" : "value", "key" : "value", ... }

var person1 = {"name": "Morgan", "age": "30", "location": "Boston", "desire": "Singing", "fear": "Violence" };

// person1 key = "name", value = "Evelyn"

var person2 = {
  "name": "Joss",
  "age": "42",
  "location": "Boston",
  "desire": "Hiking",
  "fear": "Irrationality"
};

var setup = function() {
  createGraphics(600, 400);
  noStroke();
  textSize(20);
};

var draw = function() {

	background(120, 180, 200);

  // person 1 bubble
  fill(155, 30, 180, 180);
  // you can access values by using a '.' followed by the key
  ellipse(250, 200, person1.age*5, person1.age*5);  // person1.age = 30
  fill(255);
  text(person1.name, 210, 200); // person1.name = Morgan

  // person 2 bubble
  fill(180, 180, 34, 180);
  ellipse(350, 200, person2.age*5, person2.age*5);  // person2.age = 32
  fill(255);
  text(person2.name, 330, 200); // person2.name = Joss

};



