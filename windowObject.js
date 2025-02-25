//alert("Is it too little a thing to me that Jehovah Honored me this much?");

//prompt("email must be a number");

//let agreement = confirm("Are you sure you want to delete this file");
//console.log(agreement)

//Exercise 2
1
const now = new Date();
console.log("Year:", now.getFullYear());



//Exercise 2 slide 4
// Declare a variable named challenge and assign it an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

// Print the string on the browser console using console.log()
console.log(challenge);

// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0, 2)); // Using substring()
console.log(challenge.substr(0, 2)); // Using substr()

// Slice out the phrase Days Of JavaScript from '30 Days Of JavaScript'.
console.log(challenge.substring(3));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split());

// Split the string '30 Days Of JavaScript' at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

// Change '30 Days Of JavaScript' to '30 Days Of Python' using replace() method.
console.log(challenge.replace('JavaScript', 'Python'));




