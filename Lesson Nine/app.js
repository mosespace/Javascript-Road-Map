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