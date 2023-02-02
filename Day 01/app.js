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

/* QUESTION ONE:
If some one is an orphan and a graduate: the code below displays the following information in the consoloe
You qualify for the Offer but when the information is fake, it provides the this information in the console.
"You dont qualify for the offerYou dont qualify for the offer".
*/
if (isOrphan && isGraduate) {
    console.log('You qualify for the Offer')
} else {
    console.log('You dont qualify for the offer')
}

/*
What does the || operator do?
The || operator is the logical OR operator and finds the first truthy expression in its operands and returns it.

For example, if we have:
*/

console.log("" || "foo" || false);

/*
Then we get 'foo' logged because it’s the first truthy operand in the expression.

It’s also useful for providing a default value if the ones before it are falsy.
*/

/*
What does the + operator do?
The + operator converts whatever is after it to a number if it’s placed before an expression. So if we have:

console.log(+"1");
Then we get 1 logged.

If we have:

console.log(+("1" + 2));
Then we get 12 logged.

As we can it also serves as the concatenation operator for strings within the parentheses.

It’s also the addition operator if all operands are numbers.

For example, if we have:

console.log(1 + 2 + 3);
Then we get 6.
*/

// console.log(1 + "20")