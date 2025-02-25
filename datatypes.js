//primitive - stored by their actual value
//number - numerical character e.g 1,2,3....
//boolean - A YES or NO e.g is logged in=True
//undefined e.g X or Y
//string - set of characters that form a word e.g 'egg', "egg", `egg`
//null e.g Y=null
//bigint eg big number=88888888888888888888
//symbol




//Non-primitive  database has a reference
//array means a list
//function
//object, date
// Declaring a string variable




5.1
let favoriteAnimationMovie = "Migration"
let isCodingAwesome = true;
let unknownValue;
let nodata = null;

5.2
console.log("The datatype of favoriteAnimationMovies  is: "+ typeof(favoriteAnimationMovie))
console.log(favoriteAnimationMovie) //D
console.log("The datatype of isCodingAwesome is: "+ typeof(isCodingAwesome))
console.log("The datatype of unknownValue is: "+ typeof(unknownValue))
console.log("The datatype of nodata is: "+ typeof(nodata))
//OR
console.log(typeof(favoriteAnimationMovie))

//Exercise 2
console.log(4 > 3); // True
console.log(4 >= 3); // True
console.log(4 < 3); // False
console.log(4 <= 3); // False
console.log(4 == 4); // True
console.log(4 === 4); // True
console.log(4 != 4); // False  //exclamation shows is not equal to
console.log(4 !== 4); // False
console.log(4 != '4'); // False  //converts the quotes into a number.
console.log(4 == '4'); // True  
console.log(4 === '4'); // False  //if datatype and variable are the same
console.log("There is no 'on' in both dragon and python".includes("on")); // True

let myAge = 250;
let yourAge = 25;

let ageDifference = myAge - yourAge
console.log("I am " + ageDifference + "years older than you");