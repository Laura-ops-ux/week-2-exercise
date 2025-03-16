let produce = {
    name:"maize",
    price:2000,
    category:"grain",
}
//using dot notation
const produceName = produce.name;
const producePrice = produce.price;
const produceCategory = produce.category

console.log(`${produceName} is ${produceCategory}`)
//Destructuring is being used
//let{name,price,category} = produce
//console.log(`${name}+ is +${category}`)
