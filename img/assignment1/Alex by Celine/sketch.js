  // Portrait of Alex, written by Celine 

var setup = function() {
  createGraphics (400,500);
  //background(182, 205, 215);
  background (255);
}

var draw = function () {
  
  // Making of the face 
  
  noStroke ();
  fill (228, 180, 180);
  rect (150,100,100,100);
  quad (150,200, 175,225 ,225,225 ,250,200);

  // Making of the eyes

  noStroke ();
  fill (0);
  ellipse (175,150,10,10);
  ellipse (225,150,10,10);
  
  // Making of the nose 
  
  noFill ();
  stroke (0);
  strokeWeight (1);
  triangle (200,160,195,185,205,185);
  
  // Making of the hair on the side of the face 
  
  strokeWeight (5);
  stroke (0);
  line (150,100,150,140);
  line (250,100,250,140);
  
  // Making of the ears
  
  noStroke ();
  fill (228, 180, 180);
  ellipse (150,150,20,25);
  ellipse (250,150,20,25);
  
  // Making of eyebrows
  
  noStroke ();
  strokeWeight (2);
  stroke (0);
  line (170,135,180,134);
  line (220,134,230,135);
  
  // Making of the neck
  
  noStroke ();
  fill (228, 180, 180);
  rect (175,225,50,35);
  
  // Making of the hair on top of the head
  
  fill (0);
  noStroke ();
  quad (150,95,150,110,250,100,250,95);
  
  // Blush
  
  fill (255,0,0,15);
  noStroke ();
  ellipse (175,177,20,20);
  ellipse (225,177,20,20);
   
   // Making of the smile 
   
   stroke (0);
   noFill ();
   strokeWeight (1);
   arc (200,200,20,20,1, PI);
 
  
}
  







