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
// Arrow Functions.
// Define the function
const calcAge = function(bornYear) {
    return 2023 - bornYear; // The use of console.log is the same as return!);
}

// Invoking the function!
console.log(`Your Years are; ${calcAge(prompt("Enter Your Born Year"))}!!!`);