//bullet array
let bullet = [0];
let bulletSpeed = 8;

//score counter
let score = 0;

//player properties
let player = {
    Color: "#467d4d",
    Diameter: 50,
    xPos: 250,
    yPos: 420,
    xSpeed: 4
}

//alien properties
let alien = {
    Color: "#bd3545",
    Diameter: 50,
    xSpeed: 2,
    ySpeed: 2,
    xPos: 20,
    yPos: 20
}

//start of program
function setup() {
    createCanvas(500, 500);
}

function draw() {
    //black background
    background(0);
    //score
    counter();

    //draw aliens
    drawAll();
    //draw player 
    control();
    
    //shoot bullets
    if(keyIsDown(32)) {
        shoot();
    }
    
}

//create player and give movement
function control() {
    //movement keys (A and D)
    if(keyIsDown(68)) {
        player.xPos += player.xSpeed;
    } else if (keyIsDown(65)) {
        player.xPos -= player.xSpeed;
    } 
    //make green circle
    fill(player.Color);
    circle(player.xPos, 420, player.Diameter);
}

//singular alien
function drawAlien() {
    circle(alien.xPos, alien.yPos, alien.Diameter);
}

//draw row of 10 aliens
function drawRow() {
    i = 0;
    while(i < 10) {
        for(i; i < 10; i++) {
            drawAlien();
            alien.xPos = alien.xPos + 50;
        }
    }
}

//draw 3 rows of aliens
function drawAll() {
    k = 0;
    while(k < 3) {
        for(k; k < 3; k++) { 
            drawRow();
            alien.xPos = 20;
            alien.yPos = alien.yPos + 50;
        }
    }
}

//give bullets movement 
function shoot() {

    bullet.push(player.yPos--);
    bullet.shift(); 

    for(var j = 0; j < bullet.length; j++) {
        bullets = bullet[j];
        bullets.y += bulletSpeed;
        circle(player.xPos, bullet[j], 20);
    }

    //remove off screen bullet
    if(bullet.y > 0) {
        bullets.splice(j, 1);
    }
}

//make something happen when bullet hits alien
function kill() {
    if(bullet.x == aliens.x) {
        alert("YOU WON");
        score = score + 1;
    } 
}

//create score counter
function counter() {
    fill(255);
    textAlign(RIGHT, TOP);
    textSize(20);
    text("Score: " + score, 480, 10);
}