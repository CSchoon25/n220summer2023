function setup() {
  createCanvas(600, 600)
  placeStars()
}

//star array variable
var stars = []

//set black background and execute makeStars
function draw() {
  background(0)
  makeStars()
}
//make stars
function makeStars() {
    //yellow
    fill(235, 235, 117)
    noStroke()

    //draws the stars 
    for (var i = 0; i < stars.length; i++) {
        var xStar = stars[i]
        var yStar = stars[i+1]
        circle(xStar, yStar, 8)
  }
  
}

//create the random number of stars and random placement
function placeStars() {
  var count = random(20, 30)
  for (var i = 0; i < count; i++) {
    var xStar = random(width);
    var yStar = random(height);
    stars[i]= xStar
    stars[i] = yStar
  }
} 