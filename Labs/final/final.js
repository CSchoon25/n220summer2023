//ten guessable words
let guess = [
    "button", "background", "line", "circle", "canvas", 
    "setup", "function", "script", "title", "final"
];

//create new word to be used
let word = "";
//array for guessed letters
let guessed = [];
//score
let incorrect = 0;
//create boolean condition
let gameOver = false;

function setup() {
    createCanvas(250, 300);
    background(255);
    
    //p5 random item from array
    word = random(guess);
    //split into usable letters
    word = word.split("");
    //go through and make the underscores to be guessed
    for (let i = 0; i < word.length; i++) {
        guessed.push("_");
    }
    //push letters back together
    word = word.join("");
    //log the word in conosole for ease of use
    console.log(word);
    //update display
    update();

}

function draw() {
    //post 
    line(100, 75, 100, 50);
    line(100, 50, 30, 50);
    line(30, 50, 30, 300);

    if(incorrect == 1) {
        //head
        circle(100, 100, 50);
    }
    if(incorrect == 2) {
        //torso
        line(100, 125, 100, 200);
    }
    if(incorrect == 3) {
        //right arm
        line(100, 135, 50, 150);
    }
    if(incorrect == 4) {
        //left arm
        line(100, 135, 150, 150);
    }
    if(incorrect == 5) {
        //right leg
        line(100, 200, 80, 250);
    }
    if(incorrect == 6) {
        //left leg
        line(100, 200, 120, 250);

        //once 6 lines are drawn, the game is over
        //game over
        gameOver = true;
        alert("Game Over!");
        noLoop();
    }
}

function userGuess(btnRef, letter) {
    //only run if the user has not lost
    if(gameOver) return;

    //gray out the used buttons 
    btnRef.setAttribute("disabled", true);

    //find if the word includes selected letter
    if(word.includes(letter)) {
        //as long as the array
        for(let i = 0; i < word.length; i++) {
            //if the array of letters has the user input letter
            if(word[i] === letter) {
                //reveal letter in word
                guessed[i] = letter;
            }
        }
        //update display
        update();
        //find if all letters have been found
        //if so, win
        win();
    } else {
        //score
        //used for system to know which parts of man to displya
        incorrect = incorrect + 1;
        //update display
        update();
        //start again
        draw();
    }
}

function update() {
    //update display
    let display = document.querySelector(".display");
    display.innerHTML = guessed.join(" ");
}

function win() {
    //if guessed word doesn't have any more underscores
    //means user won
    if(!guessed.includes("_")) {
        //stop checking
        gameOver = true;
        //player alert
        alert("You Win");
        //stop running
        noLoop();
    }
}

function reset() {
    //re-roll word
    word = random(guess);
    //split into usable letters
    word = word.split("");
    //reset score
    incorrect = 0;
    //reset array
    guessed = [];
    //reset unguessed word
    for (let i = 0; i < word.length; i++) {
        guessed.push("_");
    }
    //put word back together and show to console
    word = word.join("");
    console.log(word);
    //reset 
    gameOver = false;
    //reset buttons
    let buttons = document.querySelectorAll("#alphabet, button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].removeAttribute("disabled");
    }
    //update display
    update();
    //clear drawing
    background(255);
    //start loop back up
    loop();
}    