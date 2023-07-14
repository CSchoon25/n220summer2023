//set variable to html variable
let grnSqr = document.getElementById("greenSquare");

//set the width and height
let sqWidth = 100;
let sqHeight = 100;

//make the square grow
function grow() {
    //make grow by 10%
    sqWidth *= 1.1;
    sqHeight *= 1.1;

    //apply the size change
    grnSqr.style.width = sqWidth + "px";
    grnSqr.style.height = sqHeight + "px";
}