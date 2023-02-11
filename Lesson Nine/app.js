/*
DOM Document Object Module is a web API that allows developers to use programming logic to make changes to there HTML code and css!


It makes static websites to Dynamic Websites
*/

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

// In this example two, we are going to get element by two! and the formular for doing this is called getElementById

// We have to create a new variable and the get it's element by passing the id formular and the name.
const idElements = document.getElementById('container');

console.log(idElements); // This print's out the element in the element.