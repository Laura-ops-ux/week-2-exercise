let person = {
    name:"Laura",
    age: 30,
    speak :function (){
        console.log("Hello there, my name is " + this.name + "I am" + this.age +"years  old")
    }
}
console.log(person.name)
person.speak()

let store = {
    name:"Karibu Groceries",
    location:"Maganjo",
    stock:{
        beans:100,
        maize:200,
        peas:250,
    },
    salesProduce: function(quantity) {
        console.log("sold successfully")
    }
}
store.salesProduce()

let calculator ={
    add:function(a,b){
        return a+b
     },
     subtract:function(a,b){
        return a-b
     }
}
console.log(calculator.add(4,6))
console.log(calculator.subtract(15,4))