CircleSize = 1

function setup() {
    createCanvas(250, 250)
}

function draw() {
    background(191, 191, 191)

    CircleSize = CircleSize + 1

    if(CircleSize > 200)
    CircleSize = 1

    circle(125, 125, CircleSize)
}