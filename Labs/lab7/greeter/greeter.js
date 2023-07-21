//gets from html
let txtName = document.getElementById("txtName");
let greeting = document.getElementById("greeting");

//submit button
function submit() {
    //logs greeting plus the name input
    console.log("Hello " + txtName.value);
    greeting.textContent = "Hello " + txtName.value;
}