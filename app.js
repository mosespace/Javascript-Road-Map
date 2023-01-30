// console.log('Hello World');

/*
OPERATORS

1)Assignment Operator
2)arithmetic operators
3)comparison operators
4)logical operators

*/

const age = 30;
const firstName = 'Moses';
const secondName = 'Kisakye';
const isMarried = false;
const job = 'frontend developer';
const x = 40;
const y = 30;


/* Uncomment to see values in the console

// addition
console.log(x + y);

// subtraction
console.log(x - y);

// multiplication
console.log(x * y);

// exponential
console.log(x ** 2); // is equal to x^2 =x*x

// Modulus => %
console.log(y % x); //what is the reminder of dividing 20 to 10

*/

/*
 comparison operaters
console.log(x <= y); // this value gives true of false results
*/

/* Uncomment to see values in the console

// != operator => inverts the logic
console.log(x != y);

if (x > y) {
    console.log(x - y);
} else {
    console.log(y - x);
}

*/

//Logical Operators
const isOrphan = true;
const isGraduate = true;
const isUgandan = false;

// we want someone who is an orpahn and a graduate
console.log(firstName && isOrphan && isUgandan)
console.log(isOrphan || isUgandan)
console.log(!isOrphan)
console.log(!isUgandan)