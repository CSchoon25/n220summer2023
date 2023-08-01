//given array
let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

//loop through the contents of the array
for(let i = 0; objects.length; i++) {
    //create div and variable to be used to assign properties of the array
    let draw = objects[i];
    let div = document.createElement("div");

    //set properties of the objects to the array values
    div.style.height = draw.height + "px";
    div.style.width = draw.width + "px";
    div.style.backgroundColor = draw.color;

    //show on screen
    document.body.appendChild(div);
} 

