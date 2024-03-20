function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 1);
  myShape(width/3, height/2, .5);
  myShape(width*2/3, height/2, .5);

  //myShape(width/3, height/2, .5)
  //myShape (width*2/3, height/2, 2)
  // myShape() takes three arguments
  // arg1: horizontal location
  // arg2: vertical location
  // arg3: scale factor (1 is full size)
  /* add two more calls to myShape that draw your shape in different locations
  */
 
}

function myShape(x, y, s) {
  // make this function more interesting
  let w = 100
  let h = 100
  push(); // make a separate layer
  translate(x, y); // move the origin point
  scale(s);

  fill(245, 236, 211) //pale yellow
  ellipse(-20, -60, 30, 100) //left ear
  ellipse(20, -60, 30, 100) //right ear

  fill(255, 176, 254) //pink
  ellipse(-20,-60, 20, 80) //left inside of ear
  ellipse(20, -60, 20, 80) //right inside of ear

  fill(245, 237, 211) //pale yellow
  ellipse(0, 0, w, h); // simple ellipse at the translated origin (0,0)
  fill(0) //black
  ellipse(-20, -10, 30) //left eye
  ellipse(20, -10, 30) //right eye

  fill(247, 45, 78) //red
  ellipse(-20, -10, 20) //left pupil
  ellipse(20, -10, 20) //right pupil

  fill(255, 176, 254) //pink
  ellipse(0, 0, 10) //nose

  fill(255) //white
  rect(-10, 10, 10, 14) //bunny teeth
  rect(0, 10, 10, 14)
  
  pop(); // dispose of the layer
}
