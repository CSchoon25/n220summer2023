//circles array to be mended
let circles = [];
let velY = 5;
let repeatCircle = 10;

function setup() {
    //square canvas
    createCanvas(300, 300);
}

function draw() {
    //gray
    background(191);

    //new circle every 10 frames
    if(frameCount % repeatCircle === 0) {
        //gives newCircle location in center top of screen
        let newCircle = {x: 150, y: 0};
        //adds to array applying newCircle
        circles.push(newCircle);
    }

    //loop that continuously makes circles
    for(let i = 0; i < circles.length; i++) {
        //apply array
        circle = circles[i];
        //give veloctiy
        circle.y += velY;
        //white
        fill(255);
        //needs elliplse because circle is in use
        ellipse(circle.x, circle.y, 20);

        //remove off screen so no lag
        if(circle.y > 300) {
            circles.splice(i, 1);
        }
    }
}
