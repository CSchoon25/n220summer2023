let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);


function itsClicked(event) {
    
    event.target.style.backgroundColor = "#999";

    //get the attribute
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response;
}