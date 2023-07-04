function setup() {
  //canvas and blue background
  createCanvas(700, 500)
  background(0, 200, 200)

  //yellow circle
  fill(255, 218, 0)
  circle(350,220,400)

  //black eyes
  fill(0,0,0)
  strokeWeight(60)
  line(250, 200, 250, 100)
  line(440, 200, 440, 100)

  //mouth
  noStroke()
  arc(350, 280, 250, 200, 0, HALF_PI)
  arc(350, 280, 250, 200, HALF_PI, PI)

  //text bubble background
  stroke(0,0,0)
  strokeWeight(5)
  fill(255, 255, 255)
  rect(10, 50, 150, 100, 30)
  
  //text bubble hook
  noStroke()
  fill(0,0,0)
  arc(133, 150, 110, 110, HALF_PI, PI)
  fill(255,255,255)
  arc(130, 146, 100, 100, HALF_PI, PI)

  //"HI!" text
  stroke(0,0,0)
  //"H"
  line(40, 70, 40, 130)
  line(40, 100, 60, 100)
  line(60, 70, 60, 130)
  //"I"
  line(80, 70, 80, 130)
  //"!"
  line(120, 70, 120, 110)
  circle(120, 130, 5)
  
}
