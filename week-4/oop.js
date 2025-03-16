//Object literal
const person = {
    name: "Laura",
    age:40,
    greet:function(){
        console.log(`Hello, my name is ${this.name}`)

}

}
//New keywaord
//const person2=new Object()
//person2.name= "Wendy"
//person2.age=30



//Constuctor function. The function name must start with a capital letter
//function Person(name,age){
//    this.name=name
  //  this.age=age
//}
//person.prototype.greet =function(){
//    console.log(`Hello there, my name is ${this.name} `)
//}
//const person2=new Person("Laura",21)
//console.log(person2)
//person2.greet()

//class Xperson{
//    constructor (name,age,powers)
//    {
//        this.name=name;
//        this.age=age;
//        this.powers=powers;
//    }
//    powers(){
//        console.log(`I have ${this.powers}`)
//    }
//}
//const xperson2=new Xperson("Wolverine",61,"claws")
//console.log(xperson2)
//const xperson3=new Xperson("Deadpool",70,"cancer")
//console.log(xperson3)
//const xperson4=new Xperson("Storm",81,"wind")
//console.log(xperson4)



class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, I'm ${this.name}`);
    }
  }
  
  const person2 = new Person("Felicity", 20);
  person2.greet();


  
  //inheritence
  class Employee extends Person {
    constructor(name, age, job) {
      super(name, age); // Calls the parent constructor
      this.job = job;
    }
  
    work() {
      console.log(`${this.name} is working as a ${this.job}`);
    }
  }
  
  const emp1 = new Employee("David", 28, "Software Engineer");
  emp1.greet();
  emp1.work();