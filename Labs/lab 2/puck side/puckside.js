//created canvas
function setup() {
    createCanvas(400, 300)
}

//drawing setup
function draw() {
    //gray background
    background(191, 191, 191)

    //determines if mouse is on right side
    if(mouseX < 200)
    //fills blue is so
    fill(0, 0, 255)

    //determines if mouse is on left side
    if(mouseX > 200)
    //fills red if so
    fill(255, 0, 0)

    //creates circle that follows mouse and follows if statements
    circle(mouseX, mouseY, 30)
}