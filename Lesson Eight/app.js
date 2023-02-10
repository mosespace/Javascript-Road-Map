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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const numberSquared = numbers.map(num => num ** 2);

console.log(numbers); // this outputs the numbers before being computed by the map method()

console.log(numberSquared); // This outputs the computed sqaure number using the map() method

/*
------------------ADVANCED ARRAYS----------------------
The ForEach() method; This method runssimillary like the map() method and does the same thing
*/
// -----------------------Example One-------------------------
const price = [10000, 200000, 26000, 287897, 20001];
const newArray = [];
const priceDiscounts = price.forEach(function(prices, index) {
    const discounts = prices + 0.1 * prices;
    newArray.push(discounts)

}); // This method returns undefined!
console.log(newArray);
/*
------------------ADVANCED ARRAYS----------------------
The reduce() method; This method executes a reducer function on each element of the array and returns a single output;
It takes in a callback message which takes in two parameters.

it returns a single value after reducig an array.
Does not change the original array!
*/
// -----------------------Example One-------------------------

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const totalNumber = num.reduce(function(acc, value) {
    return acc + value;
});

console.log(totalNumber);

/*
------------------ADVANCED ARRAYS----------------------
The filter() method; This method returns a new array with all elemtes passed by a test defined by a given function.

It takes in a callback function. but will only return numbers passed in by a test

!
*/
// -----------------------Example One-------------------------

const citizens = [{
        fsName: 'Kisakye Moses',
        gender: 'Male',
        age: 22,
        employed: true,
        married: false,
        location: 'Kampala Central',
        village: 'kolo',
        likes: 'Coding'
    },
    {
        fsName: 'Muwanga Alex',
        gender: 'Male',
        age: 28,
        employed: true,
        married: true,
        location: 'Kampala Central',
        village: 'Nakawa',
        likes: 'Football'
    },
    {
        fsName: 'Ssekitoleko james',
        gender: 'Male',
        age: 23,
        employed: true,
        married: true,
        location: 'Wakiso',
        village: 'kigoogwa',
        likes: 'Engeneering'
    },
    {
        fsName: 'Nakafero Jaireh',
        gender: 'Female',
        age: 21,
        employed: false,
        married: true,
        location: 'Wakiso',
        village: 'kigoogwa',
        likes: 'Salooning'
    },
    {
        fsName: 'Naluwagga Tracy',
        gender: 'Female',
        age: 21,
        employed: false,
        married: false,
        location: 'Kampala Central',
        village: 'kololo',
        likes: 'Nothing'
    },
    {
        fsName: 'Nakito Maria',
        gender: 'Female',
        age: 29,
        employed: true,
        married: false,
        location: 'Kampala Central',
        village: 'Lugogo',
        likes: 'Cooking'
    },
    {
        fsName: 'Fenandoh Aruho',
        gender: 'Male',
        age: 28,
        employed: true,
        married: false,
        location: 'Kampala Central',
        village: 'Kyanja',
        likes: 'Bussiness'
    },
];

// let's assume we wanto know the number of people who leave in kampala Central

const citizensInKampala = citizens.filter(citizen => citizen.location === 'Kampala Central');


console.log(citizensInKampala); // This prints out a group of those people who come from the kampala central region.

// let's assume we want to know the number of people who are employed

const citizensEmployed = citizens.filter(function(ceployed) {
    return ceployed.employed === true
});

console.log(citizensEmployed); // This prints out a group of those people who are employed.

// let's assume we want to know the number of people who are male

const maleCitizens = citizens.filter(maleC => maleC.gender === 'Male');

console.log(maleCitizens); // This prints out a group of those people who are male.

// let's assume we want to know the number of people who are female

const femaleCitizens = citizens.filter(fcitizens => fcitizens.gender === 'Female');

console.log(femaleCitizens); // This prints out a group of those people who are female.

console.log('End');