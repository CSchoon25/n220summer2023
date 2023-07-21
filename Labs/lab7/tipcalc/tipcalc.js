//get from html
let base = document.getElementById("base");
let tip = document.getElementById("tip");
let total = document.getElementById("total");

//submit function
function submit() {
    //sets to readable numerical values
    base = Number(base.value);
    newTip = Number(tip.value);
    //calculate tip
    newTip = (base * 0.2);
    newTotal = (base + newTip);
    //log in console and on page
    console.log("Tip: $" + newTip);
    console.log("Total: $" + newTotal);
    tip.textContent = "Tip: $" + newTip;
    total.textContent = "Total: $" + newTotal;
}