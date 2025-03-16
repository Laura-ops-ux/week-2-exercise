//list of operators

//Addition(+)
//Subtraction(-)
//greater than(>)
//less than(<)
//divide(|)
//Multiplication(*)
//Squareroot
//Equal(==)
//Exponations
//Increment operators()
//Less than or equal to(<=)
//Greater than or equal to(>=)
//Equality()
//Paranthesis()
//Not(!)
//Percentages(++)

//Six categories
//Comparison operators



let pricePerKg = 3000;
let quantity = 10;
let totalCost = pricePerKg*quantity;
console.log(totalCost)
console.log("The price of 10kg of beans is:" + totalCost)
console.log(`The price of beans is ${totalCost}`)

//discount
let discount=500;
letdiscountedPrice=totalCost-discount;
console.log(discountedPrice)

//comparison
let buyerMoney = 5000;
let priceOfMaizePerKg = 4000;
console.log(buyerMoney>=priceOfMaizePerKg)

//let buyerMoney = 5000;
//let priceOfMaizePerKg = 5000;
//console.log(buyerMoney===priceOfMaizePerKg)

//Logical operators
let stockIsAvailable = true;
let buyerIsLegit = false;
console.log(stockIsAvailable && buyerIsLegit)

//concatiantion
let buyerName ="Laura";
let productNme ="Millet";
letreceiptMessage ="Thank you," +buyerName +"You have just purchased"

//Assignment operators
let stock =100;
let sales =20
stock =stock-sales;//preferred mostly used //same thing with next line
stock-=sales//very important     a=a-b;
console.log(stock-sales)         //a-=b   

//Order of precedence
//let value = 3+(4*5);
//console.log(value);

let salesRevenue = 0;
salesRevenue += totalCost;
console.log(salesRevenue);