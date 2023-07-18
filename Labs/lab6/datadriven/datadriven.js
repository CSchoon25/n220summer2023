//create object with necessary values for display elemnt
let graphic = {
    width: 500,
    height: 500,
    bgC: "#4287f5",
    dia: 200,
    positionX: 250,
    positionY: 250,
    text: "JS",
    textSize: 100,
    textPosX: 190,
    textPosY: 280,
}

//makes canvas and background with just object properties
function setup() {
    createCanvas(graphic.width, graphic.height);
    background(graphic.bgC);
}

//makes circle with text inside with just object properties
function draw() {
    noStroke();
    circle(graphic.positionX, graphic.positionY, graphic.dia);
    textSize(graphic.textSize);
    text(graphic.text, graphic.textPosX, graphic.textPosY);
}