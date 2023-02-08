// JavaScript Loops!

/*
A loop in javascript is used to execute a block of code with a specified number of elements.
There are many examples of loops but first we are going to look at the for loop.
In this method, we do it by the following

for (initialization; condition; increment;){
    // then here we pass the code and print it out in the console
}
*/

//  Let's assume we want to do aloop on plates using the for loop: we do this

for (let plates = 1; plates <= 10; plates++) {
    console.log(`Plate Number ${plates}, You have recieved a 🎂 `)
};

/* //Question From Prommise;
Use a while loop to print out the even numbers from 1 to 20.
*/
// Using for loop:
for (let evenNumber = 1; evenNumber <= 20; evenNumber++) {
    if (evenNumber % 2 == 0) {
        console.log(`${evenNumber} is an Even Number`)
    }
};

// using while loop:
let evenNum = 1;
while (evenNum <= 20) {
    if (evenNum % 2 == 0) {
        console.log(`${evenNum} is an Even Number 😘`)
    }
    evenNum++;
};


// using the do - loop
/*The do loop does the same as the while loop! but here the condition comes last and*/
let evenN = 1;
do {
    if (evenN % 2 == 0) {
        console.log(`${evenN} is an Even Number Using Do-Loop 😂`)
    }
    evenN++;
} while (evenN <= 20);

// using For In Loop
/*It mostly uses the in key word
It pull out the properties in a variable
Example:
*/

const person = {
    Name: 'Kisakye Moses',
    Age: "22",
    Job: 'Developer',
}
const personArray = [];
for (var properties in person) {
    console.log(properties);
    personArray.push(person[properties]);
}

console.log(personArray);

const personCopy = personArray.slice() //copy of the personArray
console.log(personCopy);

// using for of loop
/*
Thi is a modern way of iletrating over the values of an iterable object such as an array or a string.
example:
*/

const valueArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (num of valueArray) {
    if (num % 2 == 0) {
        console.log(num ** 2);
    }
};

// Using the break;
// This is were a loop i stoped when inserted into any loop
for (var i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
};

// Using the Continue statement;
// This is were a loop stops and jumps to the conclusion;

var q = 0;
while (q < 10) {
    q++;
    if (q % 2 == 0) {
        continue;
    }
    console.log(q); // Now here the continue method will ignore printing the even number and print the odd instead!!!
};