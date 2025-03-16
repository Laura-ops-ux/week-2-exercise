//Common DOM Manipulation Methods:

getElementById() //Selects an element by its ID.

querySelector() //Selects the first element that matches a CSS selector.

createElement()// Creates a new HTML element.

appendChild()// Adds a new child element to a parent node.

removeChild()// Removes a child element from a parent node.

//Examples of Manipulation:

//Changing content: document.getElementById("example").innerText = "Hello, World!";

//Adding styles: document.getElementById("example").style.color = "blue";

//Adding elements:

const newDiv = document.createElement("div");
newDiv.innerText = "I'm new here!";
document.body.appendChild(newDiv);
