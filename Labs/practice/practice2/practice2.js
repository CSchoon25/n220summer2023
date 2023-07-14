//make an element
let newEl = document.createElement("div");

//customize
newEl.innerHTML = "Testing";
newEl.style.backgroundColor = "377d4a";

//place the object on the page
document.body.appendChild(newEl);


/*let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "tails";
dvCoin.style.backgroundColor = "EBCF34";
dvCoin.style.width = "100px";
dvCoin.style.height = "100px";

function flipCoin() {
    let flip = Math.random();
    let side = "heads";
    if(flip > .5) {
        side = "tails";
    }
    dvCoin.innerHTML = side;

    if(side == "tails") {
        dvCoin.style.backgroundColor = "EB5634";
    } else {
        dvCoin.style.backgroundColor = "EBCF34";
    }
}
*/