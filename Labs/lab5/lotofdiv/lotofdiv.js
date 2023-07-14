//gets from html
let sq = document.getElementById("ranSquares");
//creates array that can be appended based on if color has been used already
let oldColor = [];

//creates a random color
function ranColor() {
  //creates color based on random color generator
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//checks for old color and changes if found to match existing color
function getColorRan() {
  let color = ranColor();
  //re-generates color if oldColor matches new color array number
  while (oldColor.includes(color)) {
    color = ranColor();
  }
  oldColor.push(color);
  return color;
}

//creates squares 
for (var i = 0; i < 100; i++) {
  //creates div to separate squares
  let sqDiv = document.createElement("div");
  sqDiv.className = "square";
  //gets random color from generator
  sqDiv.style.backgroundColor = getColorRan();

  //apply loop
  sq.appendChild(sqDiv);
}