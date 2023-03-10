console.log('Hello World')
    // STRING METHODS
    // 1) Length => number of characters including space:

/*----------------Example One-----------------*/
let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numberOfAlphabets = alphabets.length;

if (numberOfAlphabets < 26) {
    console.log('The "Alphabets" are missing');
} else {
    console.log('The "Alphabets" are matching');
}

/*----------------Example Two-----------------*/
// 2) String Slice => count's from the start to end but excluding the end: (0,6)--Index 6 won't be seen in the output if the string is printed out;
const str = "Hello World";
console.log(str.slice(0, 5));
console.log(str.slice(5)); // Extracts values from index five to the positive side.
console.log(str.slice(-5)); // Extracts values from the positive side to the negative side.

/*----------------Example Three-----------------*/
// 3) substring => It is the sasme with the String method but generally doesnot accept the negative index ;
const lang = "Javascript";
console.log(lang.slice(0, 5));
console.log(lang.slice(5)); // Extracts values from index five to the positive side.
console.log(lang.slice(5, 0)); // Extracts values in reverse order, it re arrages the smallest number to come after the biggest number has passed.

/*----------------Example Four-----------------*/
// 4) string substr() => It is similar to the slice The difference is that the second parameter specifies the lenght of the extracted part. ;
const fullName = "Kisakye Moses";
console.log(fullName.substr(0, 7));
console.log(fullName.substr(5)); // Extracts values from index five to the positive side.
console.log(fullName.substr(5, 0)); // Output will be blank since it will start at index 0
/*
(method) String.substr(from: number, length?: number | undefined): string
Gets a substring beginning at the specified location and having the specified length.

@deprecated — A legacy feature for browser compatibility

@param from — The starting position of the desired substring. The index of the first character in the string is zero.

@param length — The number of characters to include in the returned substring.

The signature '(from: number, length?: number | undefined): string' of 'fullName.substr' is deprecated.ts(6387)
*/

/*----------------Example Five-----------------*/
// 5) Replace. "This method replaces a string with a new placemet;
const message = "I crush On You"
    // I want the output to be: "You Crush On Me"
const replaceWith = message.replace("I", "You");

console.log(replaceWith);

/*----------------Example Six-----------------*/
// 6) Concat. "This method replaces a string with a new placemet;
// Concat method
const str1 = 'This is string "One"';
const str2 = 'This is string "Two"';
// const str3 = str1.concat(" ", str2)
const str3 = `${str1} ${str2}`;
console.log(str3);

/*----------------Example Seven-----------------*/
// 7) Trim. "This method removes spaces on both left and right of a string;
// Trim method

let text1 = "            Hello World          ";
let text2 = text1.trim();
console.log(text2);

/*----------------Example Eight-----------------*/
// 8) charArt. "This method eturns the character at the specified index;
// charArt method

let content = "Hello World";
let conteOut = (content.charAt(0).toLocaleUpperCase());
console.log(conteOut);

/*----------------Example Nine-----------------*/
// 9) Property Acess. "This method is approximately the same with the charArt and returns the character at the specified index;
// Property Acess method

let content2 = "Hello World";
let conteOut1 = (content2[1].toLocaleUpperCase());
console.log(conteOut1);

/*----------------Example Ten-----------------*/
// 10) Splint. "This method convets stings into arrays and is typically powerfull;
// Splint method

let fruits = "apple,jacfruits,beens,peels";
let name = fruits.split(",");

console.log(name)

/*----------------Example Eleven-----------------*/
// 11) Join. "This method convets arrays into strings and is typically powerfull;
// Join method

const myNames = ["Moses", "Kisakye", "Crushes", "On", "Man"];
const myFullNames = myNames.join(" ");
console.log(myFullNames);