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