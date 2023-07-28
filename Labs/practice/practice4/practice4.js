var playerOne = sayHelloMultiple("Todd", 24);
var playerTwo = sayHelloMultiple("Mario", 33);
let p1div = document.getElementById("pTdiv");
let p2div = document.getElementById("pOdiv");
let score = 10;

updateUI();

function increaseScore() {
    score++;
    playerOne = sayHelloMultiple("Todd", score);
    updateUI();
}

function updateUI() {
    p1div.innerHTML = `Player one: ${playerOne}`;
    p2div.innerHTML = `Player two: ${playerTwo}`;
}

function sayHelloMultiple(name, timesToSay) {
    let workingName = name;
    let lastLetter = name[name.length-1];

    for(let i = 0; i < timesToSay; i++) {
        workingName += lastLetter;
    }

    return workingName;
}