//gets food and play displays from HTML to be used in JS
let fDis = document.getElementById("foodDisplay");
let pDis = document.getElementById("playDisplay");

//Pet properties
let pet = {
    name: "Dave",
    energy: 25,
    happiness: 20,
    age: 10
}

//update the page when buttons are pressed
function update() {
    fDis.textContent = "Dave's energy is now " + pet.energy;
    pDis.textContent = "Dave's happiness is now " + pet.happiness;
}

//feed pet 
function feed() {
    //when pressed, energy increases by 5
    pet.energy = pet.energy + 5;
    update();
}

//play with pet
function play() {
    //when pressed, happiness increases by 5
    pet.happiness = pet.happiness + 5;
    update();
}

//updates page with functions
update();