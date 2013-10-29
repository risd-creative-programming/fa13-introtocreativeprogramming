//////////////
// SKETCH
//////////////

var setup = function() {
  var engine = new RainyDay({
    element: 'rain',        // ID of image element
    blur: 10,               // Defines blur due to rain effect
    opacity: 1,             // Opacity of rain drops
    fps: 30                 // Frame rate per second
  });
  engine.rain([ [3, 3, 0.88], [5, 5, 0.9], [6, 2, 1] ], 100);
};

var draw = function() {

};


