console.log("It\'s Working");


// Previous Reminders

/*---------------------------Example Two------------------------*/
// 1. Function Declartaions
// Defining the function
function sumOfTwoNumbers(number1, number2) {
    const sum = number1 + number2;
    return (sum); // The use of console.log is the same as return!
}

// Invoking the function!
console.log(sumOfTwoNumbers(20, 10));


/*---------------------------Example Two------------------------*/
// Function Exprations.
// Defining the function
const addNumbers = function(num1, num2) {
    return num1 + num2; // Instead of using const, ive done it i return in one line!
}

// Invoking the function!
console.log(addNumbers(30, 10));

/*---------------------------Example Two------------------------*/
// Arrow Functions.   //Method One------------------------
// Define the function
/*const calcAge = function(bornYear) {
    return 2023 - bornYear; // The use of console.log is the same as return!);
}*/

//Method Two------------------------
const calcAge = (bornYear) => 2023 - bornYear;

// Invoking the function!
// console.log(`Your Years are; ${calcAge(prompt("Enter Your Born Year"))}!!!`);

/*---------------------------Example Two------------------------*/
/*
Question: Given the inputs below: date of birth and first name, make a program that outputsthe given year comptuted into the actual year and making an output below: johndoe is 12 years old!
*/
/*const calcYear = (yearBorn, firstName) => {
    const age = 2030 - yearBorn;
    const message = `${firstName} you are ${age} years old`;
    return age;
}
console.log(calcYear(prompt('Enter Year Of Birth'), prompt('Enter First Name')));*/

/*
Question two: Create a function that taakes two numbers as arguements and return their sum.
*/
/*
const arguements = (numb1, numb2) => {
    const calCulate = Number(numb1) + Number(numb2)
    return calCulate;
}
console.log(arguements(prompt('Enter Number One'), prompt('Enter Number Two')))*/

/*
Question three:
Write a function that takes in a number as an argument and returns "even" if the number is even, and "odd" if the number is odd.
*/
/*
const oodEven = (num) => {
    if (num % 2 == 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
}

oodEven(prompt('Enter Number One'))*/

/*
Qyestion three:
Write a function that takes in a string as an argument and returns the number of vowels in the string.
*/

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(countVowels(prompt('Enter any Word')));

/*
Question Four
Write a function that takes in an integer in minutes and coverts it to seconds.
*/

const takesMinutes = (m) => m * 60;
const answer = takesMinutes(4);
console.log(answer);

/*
Question Five
Create a function that takes in the age in years and returns the age in days.
*/

const ageInYears = (age) => age * 365.24;
const ageInDays = ageInYears(prompt("Enter Age In Years"));
console.log(`Your age in days is ${ageInDays}`);

/*
Question Six
Create a function that will convert from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(c) {
    const fahrenheit = c * (9 / 5) + 32;
    return fahrenheit;
}

console.log(celsiusToFahrenheit(prompt("Enter Number to change to Fahrenheit")))