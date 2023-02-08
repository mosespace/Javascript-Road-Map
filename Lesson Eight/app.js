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