console.log("promise");

/*Exercice:
Create a
function that takes two numbers, and returns true
if the sum of both numbers is less than 100. Otherwise
return false.*/
// sumOfNumbers(10, 20)➞ true
//10+20=40<100
/*
const sumOf = (x, y) => {
    const sum = x + y;
    if (sum < 100) {
        console.log('True');
    } else {
        console.log('False');
    }
    return sum;
};

const finalSum = sumOf(parseFloat(prompt('Enter Number One')), parseFloat(prompt('Enter Number Two')));
console.log(finalSum);*/


/*const x = prompt('Enter Number One');
const y = prompt('Enter Second Number');

if (x + y < 100) {
    console.log('True');
} else if (x + y >= 100) {
    console.log('False');
};*/









/*<----------------ARRAYS---------------->*/
/*
JavaScript Arrays:
They are used to store a collection of data. It can be of a different type of any data type!
How do we know that it is an array: The data is represented in by the following brackets"[]" All elements in an array ara comma separated

Example:
*/

const myArrow = ['Moses', 'Daniel', 'Tosh', 'Kisakye Moses', 'Fave Artisit'];
console.log(myArrow);

// Getting to know an element in the array:
/*
We can get to know the elemnt in the array using the index in the console. using these two methods;
Method One: ----- Loging the index
Example
*/
const things = new Array('cow', 'goat', 'pig', 'fish', 'meat');

// Now let's assume we wanto know the element at index 3

console.log(things[3]); // We console the index after the var name