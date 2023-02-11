/*
DOM Document Object Module is a web API that allows developers to use programming logic to make changes to there HTML code and css!


It makes static websites to Dynamic Websites
*/

/*------------------------Example One----------------------*/
// You can use the createElement method of an object to create an element withot html or css!!!

// Creating elements in JAVASCRI*T!
const newDiv = document.createElement('div');

// Set the inner Html!
newDiv.innerHTML = 'This is a new Div';

// Append the div into the body section!
document.body.appendChild(newDiv);

// Let's console it in the console!
console.log(newDiv, 'It has been stated');

// Creating class or Id!

let divTwo = document.createElement('div');

divTwo.innerHTML = 'This is div two';

// Adding a className
divTwo.className = 'my-div';

// Adding an ID
divTwo.id = 'my-id';

document.body.appendChild(divTwo);


/*------------------------Example Two----------------------*/
// In this example two, we are going to get element by two! and the formular for doing this is called getElementById

// We have to create a new variable and the get it's element by passing the id formular and the name.
const idElements = document.getElementById('container');

console.log(idElements); // This print's out the element in the element.

// getElementsByIdTagName; This method gets all various ids by there tags. Evne if there more than one compared to the getElementById which get's only the first element

// getElemtsByClassName returns a collection of elements with the given specified class name.

// The querySelector; this makes the selection of the elements easier like the same way it would be done in css! eg const allBtn = querySelector(#id) // this prints out an Id.

// The querySelectorAll; this method makes selection of all elements in the DOM and makes working in javascript easy!

// Deleting an element.
// Let's say we want to delete the section from the main html.

/*----------Example Three---------
Remove parent */
const deleted_section = document.querySelector('section');

const deleted_parent = deleted_section.parentNode;

deleted_parent.removeChild(deleted_section);

/*----------Example Three---------
Remove it's self */

const div_delete = document.querySelector('#my-id'); // This get's the id

div_delete.remove(); // This removes the ID