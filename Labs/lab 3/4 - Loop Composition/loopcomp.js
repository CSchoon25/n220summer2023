function setup() {
  createCanvas(600, 600)
  generateStars()
}

//star array variable
var stars = []

//set black background and execute makeStars
function draw() {
  background(0)
  makeStars()
}

//create the random number of stars and random placement
function generateStars() {
  var count = random(20, 30)
  for (var i = 0; i < count; i++) {
    var xStar = random(width);
    var yStar = random(height);
    stars[i]= xStar
    stars[i] = yStar
  }
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
        ellipse(xStar, yStar, 8, 8)
  }
  
}
