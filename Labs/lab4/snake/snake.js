//give X and Y arrays
let positionsX = [0,0,0,0,0,0,0,0,0,0];
let positionsY = [0,0,0,0,0,0,0,0,0,0];

//canvas
function setup() {
    createCanvas(300, 300);
}

function draw() {

    //background, remove circle border, and fill for green
    background(191);
    noStroke();
    fill(0,255,0);

    //add to the the end of the array for X
    positionsX.push(mouseX);
    //remove from the the end of the array for X
    positionsX.shift();

    //add to the the end of the array for Y
    positionsY.push(mouseY);
    //remove from the the end of the array for Y
    positionsY.shift();

    //draw circle applying push and shift commands for X and Y
    for(var i = 0; i < positionsX.length; i++) {
        circle(positionsX[i], positionsY[i], 20)
    }

}