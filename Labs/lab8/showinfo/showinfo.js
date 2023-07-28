//options text array
let options = [
    "Home exmaple text.", 
    "About section example text.", 
    "Frequently Asked Questions example text."
]

//displays info in div from array index
function displayInfo(index) {
    //get from html
    let buttons = document.getElementById("buttons");
    //sets text content 
    buttons.textContent = options[index];
}