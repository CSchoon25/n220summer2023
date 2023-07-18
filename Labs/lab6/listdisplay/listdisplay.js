//get html id
let listDis = document.getElementById("listdisplay");

//books object array
let books = [
    {name: "The Last Wish", date: 1993, pages: 384},
    {name: "The Hobbit", date: 1937, pages: 304},
    {name: "Dune", date: 1990, pages: 896},
    {name: "1984", date: 1949, pages: 328},
    {name: "Pale Fire", date: 1962, pages: 315},
    {name: "Project Hail Mary", date: 2021, pages: 496},
    {name: "Giovanni's Room", date: 1956, pages: 176}
]

//setup list with properties
function createList(book) {
    //creates a div within JS 
    let div = document.createElement("div");

    //applies name text properties to div
    let nameElement = document.createElement("h3");
    //sets the text to the text in the location of the object
    nameElement.textContent = book.name;
    //appends to what is shown on page
    div.appendChild(nameElement);

    //applies date text properties to div
    let dateElement = document.createElement("h3");
    //sets the text to the text in the location of the object
    dateElement.textContent = book.date;
    //appends to what is shown on pag
    div.appendChild(dateElement);

    //applies page text properties to div
    let pageElement = document.createElement("h3");
    //sets the text to the text in the location of the object
    pageElement.textContent = book.pages;
    //appends to what is shown on pag
    div.appendChild(pageElement);

    //find if page count is above 350
    if(book.pages > 350) {
        //if so, make red
        div.classList.add("bgRed");
        //if not, make yellow
    } else {
        div.classList.add("bgYellow");
    }
    
    //gives div
    return div;
}

//show list based on previous function
function displayBooks() {
    //for loop to take number of items in the books array and apply function
    for(let i = 0; i < books.length; i++) {
        listDis.appendChild(createList(books[i]));
    }
}

//execute funtion
displayBooks();
