console.log("promise");

/*Exercice:
Create a
function that takes two numbers, and returns true
if the sum of both numbers is less than 100. Otherwise
return false.*/
// sumOfNumbers(10, 20)➞ true
//10+20=40<100

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
console.log(finalSum);


/*const x = prompt('Enter Number One');
const y = prompt('Enter Second Number');

if (x + y < 100) {
    console.log('True');
} else if (x + y >= 100) {
    console.log('False');
};*/