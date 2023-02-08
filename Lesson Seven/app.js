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