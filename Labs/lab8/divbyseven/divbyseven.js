//result texts array
let text = [
    "Your number is divisible by 7!",
    "Your number is not divisible by 7."
]

//check to see if number is true or false
function check(number) {
    return number % 7 === 0;
}

//appies text array and check function
function ifDivisible() {
    //gets from html (userInput turns entry into usable numerical value)
    let userInput = Number(document.getElementById("userInput").value);
    let result = document.getElementById("result");
    //find if check function applies to number and gives result in div
    if(check(userInput)) {
        result.textContent = text[0];
    }   else{
        result.textContent = text[1];
    }
}

