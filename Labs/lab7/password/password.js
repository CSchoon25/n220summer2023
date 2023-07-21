//get from html
let username = document.getElementById("username");
let password = document.getElementById("password");

//submit answer
function submit() {
    //get from html
    let result = document.getElementById("result");
    //check if matches
    if((username.value == "Username") && (password.value == "Password")) {
        result.textContent = "Success";
        //if not, give "Wrong Information" text
    } else {
        result.textContent = "Wrong Information";
    }
}