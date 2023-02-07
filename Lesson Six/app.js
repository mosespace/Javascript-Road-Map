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


// Adding an Element To An Arry
/*
There aare two ways to add an elemnt to an array; 
The first one is called the push() method and the second one is called the unshit() method;

The Pull method adds an element to the back of the array
Example:
*/

let arrayOne = ['Eat', 'Sleep'];

// Now to add an elemet let assume we wanted to add an element named by 'coding', 'programming'.
// We declare that first before consoling and logging.

arrayOne.push('coding', 'programming');

//  Then after we console.log 

console.log(arrayOne);

/*
The unshift method adds an element to the front of the array
Example:
*/

const arrayTwo = new Array('Posho', 'Beans');

// Now to add an elemet at the front let's assume we wanted to add elements named by 'matooke', 'meat'.
// We declare that first before consoling and logging.

arrayTwo.unshift('matooke', 'meat');

//  Then after we console.log 
// Note, the word's will be added in the same order they are listed in. So keep doing grt.

console.log(arrayTwo);

// Changing Elements IN An Arry
/*
There is one way to add an elemnt to an array; 
It is calld the use of index before the console or printing out the message as we are going to see;

In this method, if an elemet is to be added to the array, the below should be noted
Example(s):
*/


let dailyActivities = ['Eat', 'Drink'];

// Now after declaring the array, we also invoke it by doing the following;

// Note that if the provided index is blank in the main array, the added element will be put instead;
dailyActivities[2] = 'Added👌';

// Now here since the index is aready having an elemt in it, it will just be replaced with this new one in it's position

dailyActivities[0] = 'Replaced😂';

// Here it logs or print's out all of the above
console.log(dailyActivities);


// Removing Elements IN An Arry
/*
There are two ways to add an elemnt to an array; 
They are the pop() and shift() method;

In the pop() method, elemt's are romoved form the backend of the array:
Example(s):
*/


const removeArray = ['Moses', 'Daniel', 'Tosh', 'Kampala', 'Javascript', 'Chapter'];

// Now after declaring the array, the nxt step is to remove an element. Let's assume we want to remove the element "Chapter". All we need is to pass the pop()method in this way

removeArray.pop();

// In this methhod, we don't pass anyhting but we just console.log(removeArray);

console.log(removeArray)
    // The output will be: (5) ['Moses', 'Daniel', 'Tosh', 'Kampala', 'Javascript']

// but still we can the removed element by doing the following;

const removedItem = removeArray.pop(); // The above line creates a var that will output the removed element form the array

removeArray.pop(); // Now here we call the pop() method second

console.log(removeArray); // This console logs teh array with the removed elemt

console.log(removedItem); // And lastly this console prints oyut the removed element in the console.

/*--------------------Example Two------------ */
/*
In the shift() method, element's are romoved form the frontend of the array:
Example(s):
*/


const removefront = ['Sex', 'Life', 'Money', 'Family', 'God', 'Repeat'];

// Now after declaring the array, the nxt step is to remove an element in front. Let's assume we want to remove the element "sex". All we need is to pass the shift()method in this way

removefront.shift();

// In this methhod, we don't pass anyhting but we just console.log(removeArray);

console.log(removefront)
    // The output will be: (5) ['Life', 'Money', 'Family', 'God', 'Repeat']

// but still we can the removed element by doing the following;

const removedItemTwo = removefront.shift(); // The above line creates a var that will output the removed element form the array

removefront.shift(); // Now here we call the sift() method second to remove the first index!

console.log(removefront); // This console logs the array with the removed element.
// The output will be: (3) ['Family', 'God', 'Repeat']

console.log(removedItemTwo); // And lastly this console prints out the removed element in the console.


// Copying and cloning  Elements IN An Arry
/*
There are two ways to add an elemnt to an array; 
They are the slice() and spreadSyntax(...) method;

In the slice() method, ecopying or cloning an array is made by the following steps:
Method 1
Example(s):
*/
// This is an array we are going to use for the both of the methods 
const salads = new Array('🌽', '🌾', '🥒', '🫘', '🌹');

// Here we console.log the array
console.log(salads);

// Now the next step is to may a copy or clone of the above array using the slice() method;

const copyOfSalads = (salads.slice()); // Here we make a copy of the array; Note these arrays are not the same as you see. Let's try to console.log them in boolen format and the output will be false.

console.log(copyOfSalads == salads); // The output will be "false" because when we change anything either from the main array or it's copy, it won't be changed globally; 

console.log(copyOfSalads); // The output of this will be it's copy!


/*--------------------Example Two------------ */
/*
In the spreadSyntax(...) method, we can make a copy of an arrya buy passing a thes [..."array_name"]:
Example(s):
*/

// Let's assume that we are going to copy the same salads array information above in exersie one.

let spreadSyntax = [...salads]; // This now makes a copy of the main array of salads.

console.log(spreadSyntax); //Output:(5) ['🌽', '🌾', '🥒', '🫘', '🌹']

/* 
In addition, this spreadSyntax is very powerfull in a way that it you can be able to add another  element by doing this:

let spreadSyntax = [...salads, "🎂", "🎂", "🍥"]; // You can be able to add other elemts by just adding another text. 
    ['🌽', '🌾', '🥒', '🫘', '🌹', '🎂', '🎂', '🍥']

    that's how poerfull the spreadSyntax is
Now if you console.log this, the output will be:
*/

/*
We can still use the spread Sysntax to join merge multiple arays;
Let's ee how kwe can do that
*/

let emotions = new Array('😂', '😊');
let flowers = new Array('🌹', '💐');

// Now to join these arrays, i will still use the spread syntax but i will need to first create for the a new var;

const merged = [...emotions, ...flowers]; // This variable merges the two arrays

console.log(merged); //The output will be (4) ['😂', '😊', '🌹', '💐']

/*
As we also above,  we can still add some content and still will be added to the arraws. ie;
const merged = [...emotions, ...flowers]; // if we add other element's they can still be added to the new variable

const merged = [...emotions, ...flowers, 'Boy', 'Girl']; // Here i have added boy and girl. so if we console this, the output will be.

(6) ['😂', '😊', '🌹', '💐', 'Boy', 'Girl']

*/