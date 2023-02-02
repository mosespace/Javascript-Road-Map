alert('Thank you for forking my repository and learning with me. Please kindly give me a follow on my GitHub and i will be glad if we share and learn more code together')

// If statements

const x = 100;
const y = 90;
const j = x / 2;

if (x > y) {
    console.log("X is greater than Y");
} else if (x % 2) {
    console.log("X is divisible by two");
} else if (x < y) {
    console.log("X is less than Y");
} else if (x / 2) {
    console.log("X is divided by 2 and the answer is " + j);
} else {
    console.log("X is nothing");
}
/*
Here X will take over line 7 because it's the first true statemnet
*/


// switch statements

const myColor = prompt('What\'s Your Favourite Color?').toLowerCase(); //This statement allows a user to input there faveroutite color and be captured for future reference.

// Below is the printouts we need to follow.

switch (myColor) {
    case 'red':
        console.log("Your Favourite Color Is Red!")
        break;

    case 'orange':
        console.log("Your Favourite Color Is Orange!")
        break;

    case 'Pink':
        console.log("Your Favourite Color Is Pink!")
        break;

    case 'amber':
        console.log("Your Favourite Color Is Amber!")
        break;

    case 'purple':
        console.log("Your Favourite Color Is Purple!")
        break;

    case 'dark red':
        console.log("Your Favourite Color Is Dark Red!")
        break;

    case 'yellow':
        console.log("Your Favourite Color Is Yellow!")
        break;
    default:
        console.log(`It\'s Very Unfortunate. Your Color Is Not Listed In Our Library But Is ${myColor.toLocaleUpperCase()}!!!`)
        break;
}