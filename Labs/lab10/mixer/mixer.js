//create and set base values
let red = 0
let green = 0
let blue = 0

function mix(event) {
    //get attributes and turn to usable number
    let addRed = Number(event.target.getAttribute("data-red"));
    let addGreen = Number(event.target.getAttribute("data-green"));
    let addBlue = Number(event.target.getAttribute("data-blue"));

    //adding
    red = red + addRed;
    green = green + addGreen;
    blue = blue + addBlue;

    //need to cap at 250
    red = Math.min(255, Math.max(0, red));
    green = Math.min(255, Math.max(0, green));
    blue = Math.min(255, Math.max(0, blue));

    //update color display
    let colorDis = document.getElementById("colordisplay");
    colorDis.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    //update text
    let currentCol = document.getElementById("currentcolor");
    currentCol.textContent = `Current Color: rgb(${red}, ${green}, ${blue})`
}

//gets the list of elements with buttons id and runs through loop
let buttons = document.querySelectorAll("#buttons");
for(let i = 0; i < buttons.length; i++) {
    //takes the button input and runs mix function if click is found
    buttons[i].addEventListener("click", mix);
}