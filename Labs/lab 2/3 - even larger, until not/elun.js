//circle base size
CircleSize = 1

//created canvas
function setup() {
    createCanvas(250, 250)
}

//start drawing
function draw() {

    //gray background
    background(191, 191, 191)

    //updates circle each frame, adding 1
    CircleSize = CircleSize + 1

    //if loop that runs as long as CircleSize is less than 200
    if(CircleSize > 200)
    //resets circle after getting too big
    CircleSize = 1

    //makes circle that applies previous conditions
    circle(125, 125, CircleSize)
}