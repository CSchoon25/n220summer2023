//variables determining position and speed of circle
let xPos = 0
let xSpeed = 5

//canvas setup
function setup() {
    createCanvas(800, 600)
}

//drawing start
function draw() {
    //gray background
    background(191, 191, 191)
    //sets xPos to apply position and how many pixels per update it moves
    xPos = xPos + xSpeed

    //determines if circle has reached right edge
    if(xPos > 800)
    //sets it back to left edge if so
    xPos = 0

    //creates circle following variables and if statement
    circle(xPos, 300, 30)
}