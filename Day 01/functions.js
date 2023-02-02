// alert('Thank you for forking my repository and learning with me. Please kindly give me a follow on my GitHub and i will be glad if we share and learn more code together')

// Functions
// 1. Function Declaration

/*function sayHelloWorld(message) {
    console.log(`Hello ${message}, We captured your full names!`)
}


// Call or Invoke The Message
const userMessage = prompt("Write Your Full Names Here;");
sayHelloWorld(userMessage);*/

// Create a program that takes in two arguments / two numbers and then it returns there sum.

function addNumbers(numberOne, numberTwo) {
    const sum = numberOne + numberTwo;
    console.log(`The sum of both ${numberOne} and ${numberTwo} is ${sum}`);
}

// call or invoke of the numbers
addNumbers = prompt('Enter Value 1') + prompt('Enter Value 2');

//  Write a program that calculates area of a triangle.
// Area is = 1/2 * B * H
function areaOfTriangle(base, height) {
    const area = 0.5 * base * height;
    console.log(area)
}

// call or invoke of the numbers
areaOfTriangle(4, 2)