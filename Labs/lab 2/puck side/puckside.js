function setup() {

    createCanvas(400, 300)

}

function draw() {
    background(191, 191, 191)

    if(mouseX < 200)
    fill(0, 0, 255)

    if(mouseX > 200)
    fill(255, 0, 0)

    circle(mouseX, mouseY, 30)
}