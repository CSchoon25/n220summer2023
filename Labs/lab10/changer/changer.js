//event handler
let element = document.getElementById("squares");
element.addEventListener("click", clicked);

//function to call on
function clicked(event) {
    //set background color to attribute color
    event.target.style.backgroundColor = event.target.dataset.color;
}