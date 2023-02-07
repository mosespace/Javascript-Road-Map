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