float x = 0;
float y = 0;
float xspeed = 1;
float yspeed = 5;


void setup() {
  size(400, 400);
}

void moveBall() {
  // Add the current speed to the location
  x += xspeed;
  y += yspeed;

  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  } else {
    xspeed += 0.01;
  }
  if((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  } else {
    yspeed += 0.01;
  }
}

void draw() {
  background(200);
  // Display circle at location
  stroke(0);
  //strokeWeigth(2);
  fill(127);
  ellipse(x, y, 48, 48);
  moveBall();
  
}
