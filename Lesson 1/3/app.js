// console.log('Hello World');

/*
OPERATORS

1)Assignment Operator
2)arithmetic operators
3)comparison operators
4)logical operators

*/


const firstName = prompt("What is your first name?");
const secondName = prompt("What is your Last name?");
const age = prompt("How Old are You?");
const isMarried = prompt("Are you married?");
const job = prompt("What is your Job Title");
const bornYear = 2023 - age
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
/* console.log(firstName && isOrphan && isUgandan);
console.log(isOrphan || isUgandan);                                 //Uncomment To View This In The Console
console.log(!isOrphan);
console.log(!isUgandan);*/

/* QUESTION ONE:
If some one is an orphan and a graduate: the code below displays the following information in the consoloe
You qualify for the Offer but when the information is fake, it provides the this information in the console.
"You dont qualify for the offerYou dont qualify for the offer".
*/
/*
if (isOrphan && isGraduate) {
    console.log('You qualify for the Offer');
} else {                                                           //Uncomment To View This In The Console                
    console.log('You don\'t qualify for the offer');
}*/


/* QUESTION TWO:
If some one is an Ugandan and an orphan: the code below displays the following information in the consoloe
"You have unlocked stage one to your sucess" but when the ihe is either one of the above is true of false,, it provides the this information in the console.
"You still have a long way to go".
*/

/*if (isUgandan && isOrphan) {
    console.log('You have unlocked stage one to your sucess');
} else {                                                           //Uncomment To View This In The Console
    console.log('You still have a long way to go');
}*/


/* QUESTION THREE:
If X is greater than y and can be divided by two: the code below displays the following information in the consoloe
"X is greater than 30 and it\'s divisible by two" but when it's not divisible by two, it provides the this information in the console.
"X is not greater than 30 and it\'s not divisible by two".
*/

/*if (x > y && x % 2 == 0) {
    console.log('X is greater than 30 and it\'s divisible by two');
} else {                                                            //Uncomment To View This In The Console
    console.log('X is not greater than 30 and it\'s not divisible by two');
}*/


// STRING CONCATINATION => basically means joining two or more strings!
// Let's use the firstName and secondName the variables above.

// const fullName = firstName + " " + secondName
// console.log(fullName) // nOW Let's try to add in age for the variable above :const age = '30';

// console.log("Your full names are" + " " + fullName + " " + "and your age is" + " " + age + "\(yrs)");
console.log(`Your full name is ${firstName} ${secondName} and your age is ${age}(yrs) old! You were born in ${bornYear} and also currently a ${job}`);

// this is what the message in the console should look like: Your full names are Kisakye Moses and your age is 30 (yrs).

/*
What does the || operator do?
The || operator is the logical OR operator and finds the first truthy expression in its operands and returns it.

For example, if we have:
*/

// console.log("" || "foo" || false);

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

// Promt Function => a function is a piece of code that helps us to do a particular task.

const questionOne = prompt("Did you give me a follow on my Github?");
console.log(questionOne);