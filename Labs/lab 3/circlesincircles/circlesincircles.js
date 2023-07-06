//setup
function setup() {
    createCanvas(400, 400)
}

//start draw
function draw() {
    //gray background
    background(191)

    //no fill to see circles
    noFill()

    //variable "c", runs while less than 41, adds 1 each time
    for(c = 0; c < 41; c++)

    //circle, x:200, y:200, multiplies c variable by 10 each time drawn
    circle(200, 200, c * 10)
}