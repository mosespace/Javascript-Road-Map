alert('Thank you for forking my repository and learning with me. Please kindly give me a follow on my GitHub and i will be glad if we share and learn more code together')

/* --------------------- Question One------------------------------------------*/
// Functions
// 1. Function Declaration
function sayHelloWorld(message) {
    console.log(`Hello ${message}, We captured your full names!`)
}
// Call or Invoke The Message
const userMessage = prompt("Write Your Full Names Here;");
// Capture Information
sayHelloWorld(userMessage);



/* --------------------- Question Two------------------------------------------*/
// Create a program that takes in two arguments / two numbers and then it returns there sum.
function addNumbers(numberOne, numberTwo) {
    const sum = Number(numberOne) + Number(numberTwo);
    console.log(`The sum of both ${numberOne} and ${numberTwo} is ${sum}`);
}
// call or invoke of the numbers
const value1 = prompt('Enter Value 1');
const value2 = prompt('Enter Value 2');
// Capture Information
addNumbers(value1, value2);




/* --------------------- Question Three------------------------------------------*/
/* //Question
Qtn. 1 |Create a program that takes in four arguments and adds them first and later then divide the total by two*/

function divideNumbers(number1, number2, number3, number4) {
    const sum = Number(number1) + Number(number2) + Number(number3) + Number(number4);
    const divide = sum / 2;
    console.log(`The sum of all the four numbers is ${sum} and there division is ${divide}`);
}
// call or invoke of the numbers
const add1 = prompt('Enter Value 1');
const add2 = prompt('Enter Value 2');
const add3 = prompt('Enter Value 3');
const add4 = prompt('Enter Value 4');
// Capture Information
divideNumbers(add1, add2, add3, add4);




/* --------------------- Question Four------------------------------------------*/

/* Write a program that calculates area of a triangle.
Area is = 1 / 2 * B * H */

function areaOfTriangle(base, height) {
    const area = 0.5 * base * height;
    console.log(`The area of a the rectangle using the base of ${b} and the height of ${h} is ${area}`)
}
// call or invoke of the numbers
const b = prompt("Enter Value For The Base");
const h = prompt("Enter Value For The Height");
// Capture Information
areaOfTriangle(b, h);
/* ------------------------------End------------------------------------------*/