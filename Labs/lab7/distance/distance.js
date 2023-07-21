//get from html
let x1 = document.getElementById("X1");
let y1 = document.getElementById("Y1");
let x2 = document.getElementById("X2");
let y2 = document.getElementById("Y2");

//find distance between points
function findDistance(x1, y1, x2, y2) {
    var xDiff = Number(x2) - Number(x1);
    var yDiff = Number(y2) - Number(y1);
    return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

function submit() {
    //get from html
    let distance = document.getElementById("Distance");
    
    //call calculation
    findDistance();
    //assign to variable
    let d = findDistance(x1.value, y1.value, x2.value, y2.value);
    //output
    console.log(d);
    distance.textContent = "Distance: " + d;
}