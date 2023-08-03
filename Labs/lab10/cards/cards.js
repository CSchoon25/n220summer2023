//get from html and add click event listener
let element = document.getElementById("cardflip");
element.addEventListener("click", change);

//card flip function
function change(event) {
    //set the card value to the attribute text
    let response = event.target.getAttribute("data-flip");
    event.target.innerHTML = response;
}