//function name(){
  //  return
//}
//name()

//function to add  two numbers without parameters
//function add(a,b){
   //let sum = a+b
  // return sum;
//}
//console.log(add(5,3));


//Function square
function square(a){   //OR let square=function (a){}
    let square=a*a//OR return a*a
    return square;
}
//const square = (a)=>a*a;


square(4)
square(5)
square(6)
square(10)

//With just the below, i can build a supermarket softtware
function calculateTotalPrice(produce, pricePerKg, quantity) { 
    let totalPrice = pricePerKg * quantity; 
    console.log("The total price for " + quantity + " kg of " + produce + " is: " + totalPrice + " UgX."); 
  }
  calculateTotalPrice("maize",3000, 5)
  calculateTotalPrice("beans",4000, 8)
  calculateTotalPrice("Cowpeas",6000, 10)