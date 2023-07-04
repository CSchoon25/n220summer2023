let xPos = 0;
let yPos = 0;
let xSpeed = 1;
let ySpeed = 1;

function setup() {
    createCanvas(400, 300);
}

function draw() {
    background(62, 237, 108)
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(19, 71, 26)

    if(keyIsDown(65)) {
        xSpeed = -1;
    }
    if(keyIsDown(68)) {
        xSpeed = 1
    }
    if(keyIsDown(87)) {
        ySpeed = -1;
    }
    if(keyIsDown(83)) {
        ySpeed = 1
    }


    circle(xPos, yPos, 30);
}
