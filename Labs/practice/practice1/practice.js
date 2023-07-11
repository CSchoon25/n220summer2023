let xPos;
let yPos;
let circleSize = 50
let score = 0

function setup() {
  createCanvas(400, 400)
  xPos = 200
  yPos = 200
}

function draw() {
  background(191)
  fill(121, 18, 255)
  ellipse(xPos, yPos, circleSize, circleSize)
  
  textAlign(RIGHT, TOP)
  textSize(20)
  text("Score: " + score, width - 10, 10)
}

function mouseClicked() {
  
  const d = dist(mouseX, mouseY, xPos, yPos)
  if (d <= circleSize / 2) {
    xPos = random(width)
    yPos = random(height)
    score = score + 1;
  }
}
