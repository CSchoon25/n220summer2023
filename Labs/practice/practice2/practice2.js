
let positionsX = [0,0,0,0,0,0,0,0,0,0];
let positionsY = [0,0,0,0,0,0,0,0,0,0];

function setup() {
    createCanvas(400, 300);
}

function draw() {

    background(50);

    positionsX.push(mouseX);
    positionsX.shift();

    for(var i = 0; i < positionsX.length; i++) {
        circle(positionsX[i], 150, 20)
    }

}