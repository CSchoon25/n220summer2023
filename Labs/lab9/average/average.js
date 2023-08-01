//function to be called on each submit
function submit() {
    //gets from html
    let list = document.getElementById("list");
    let average = document.getElementById("average");
    let sum = document.getElementById("sum");

    //splits the user made list into a separated array
    let userList = list.value;
    let splitList = userList.split(" ");

    let sumAmount = 0;
    //takes the split list array and adds together
    for(let i = 0; i < splitList.length; i++) {
        //converts to number value as well
        sumAmount += Number(splitList[i]);
    }
    
    //takes average
    let averageValue = sumAmount / splitList.length;

    //displays values 
    sum.textContent = sumAmount;
    average.textContent = averageValue;

    //resets text box
    list.value = "";
}