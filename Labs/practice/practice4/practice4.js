let element = document.getElementById("eventTest");
element.addEventListener("click", itsClicked);

function itsClicked(event) {
    event.target.innerHTML = "I've been clicked";
    event.target.style.backgroundColor = "#999";

    let response = event.target.getAttribute("data-response");
    console.log(response);
}