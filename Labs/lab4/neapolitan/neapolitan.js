//brown, pink, white
let iceCream = ["#664620","#dc8fe3","#ffffff"];

function setup() {
    //square canvas
    createCanvas(600, 600);
}

function draw() {
    //loop to create rectangles based on array
    for (let i = 0; i < iceCream.length; i++) {
        //set colors
        fill(iceCream[i]);
        //create array based on variables
        rect(0, i * 200, 600, 200);
    }
}

