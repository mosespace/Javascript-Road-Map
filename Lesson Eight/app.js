//  Javasript comonly used arrays
// 1. The slice method!
// We saw this array in the past lessons. But Let's redo it.

const months = ['FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY'];

const slicedMonths = months.slice(); // Now in this line, we use the slice method to actually create a copy of the original months!

console.log(slicedMonths); // Here it logs or print's out a copy of the months.

//  Now to actually use the slice() method to sport out different elements in the console. We do it this way.

// Let's assume we want a new variable and begin from march to the last.

const slicedMonthsTWO = months.slice(1); // here the represents sthe index were we would like the slice method to begin capturing information.

console.log(slicedMonthsTWO); // Here we log out the printed copies.


//  we can also do it this way;

const slicedMonthsTHREE = months.slice(1, 3); // This will capture the elements in a string from March to May.

console.log(slicedMonthsTHREE); // The output will have two months

//2. The includes() method
/*
In this array method, we use it to check if an array has a certain element and we can use it to test weather it is true of false.
*/

let names = ['Moses', 'Mutumba', 'Tamale', 'Jordarn', 'Samuel', 'Kabojja', 'sekitoleko', 'James', 'Nakafero', 'Jireh'];

// Now here we are going to test whether there is a an element named 'Mbekeka' in the array;

if (names.includes('Mbekeka')) {
    console.log('The name Jireh is Seen in the array');
} else {
    names.unshift('Mbekeka')
    console.log(names);
    console.log('The name has been added first to the array');
};

// The array didn't have a name called Mbekekaand we added it to the front of the array using the unsift method


//3. The splice() method
/*
In this array method, we use the splice method the same way we use the slice() method but here things totally change.

In this method, what averr is chaged is affected or removed from the main array and thaen added into a new array as commanded.
Let's see example below were we try to remove some languages in the variables called languages.
*/

let languages = ['Python', 'JavaScript', 'C', 'C++', 'CSS', 'Sas', 'PHP', 'React', 'NodeJs'];

const newSpliced = languages.splice(1, 4); // If we console this without passing any agument's it will return a blank array instead but if we pass an element, then the removed are added into this variable to make another unique array. Now here we removed elements from (1,to 4) and if we console.log(languages); they will have been removed.

console.log(newSpliced); // This is for the removed elements.

console.log(languages); // Here as we can see the output in the console, the Javascript, C, C++ and CSS have been removed from the main array into a new one.

// we can also add some elemets to the arrays using still the splice() method.

const newSplicedTwo = languages.splice(8, 0, 'Vue', 'EsE');

console.log(newSplicedTwo, languages);


/*
------------------ADVANCED ARRAYS----------------------
The Map() method; This method runs with a callback function. and it does not change the original array
*/
// -----------------------Example One-------------------------
const ages = [71, 42, 23, 14, 5, 6, 77, 38, 49, 50, 61, 72, 13, 14, 15, 16, 17, 18, 19, 20];

const birthYear = ages.map(function(birthYear) { // Now in this map() method, we first have to pass a function then after return what should be returned.
    return 2023 - birthYear;
});

console.log(ages); // this outputs the ages before being computed by the map method()


console.log(birthYear); // This outputs the computed year using the map() method

// -----------------------Example Two-------------------------