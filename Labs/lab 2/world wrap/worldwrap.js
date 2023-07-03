let xPos = 0
let xSpeed = 5

function setup() {
    createCanvas(800, 600)
}

function draw() {
    background(191, 191, 191)
    xPos = xPos + xSpeed

    if(xPos > 800)
    xPos = 0

    circle(xPos, 300, 30)
}