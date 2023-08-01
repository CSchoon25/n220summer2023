//get from html
let textInput = document.getElementById("textInput");
let output = document.getElementById("output");
let counter = document.getElementById("counter");

//to be used in if loop
let results = [
    "Bad Word Found!", 
    "No Bad Word Found"
];

function breakInput() {
    //convert to value and break
    let userArray = textInput.value;
    let splitArray = userArray.split(" ");
    let detectWord = false;
    let count = 0;

    //loop through the array to find if any of the bad words were typed
    for(let i = 0; i < splitArray.length; i++) {
        if(splitArray[i] === "clear" || splitArray[i] ===  "water" || splitArray[i] === "tires") {
            //changes boolean if words are found
            detectWord = true;
            //increases count per word found
            count = count + 1;
        }
    }
    //if there was a bad word found, give result 0 from array
    if (detectWord)  {
        output.textContent = results[0];
        //if not, give result 1 from array
    } else {
        output.textContent = results[1];
    }
    
    //set counter
    counter.textContent = count;

    //reset the input box
    textInput.value = "";
}
