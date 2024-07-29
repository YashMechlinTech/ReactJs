//Prototypes in js :

//A javascript is an entity having and state and the behaviour (properties and method)

//js objects have a special property called the prototype

//we can set the prototype using __proto__

//if object and prototype have same method object's method will be used

const student = {
  fullname: "Yash Chauhan",
  age: 27,
  marks: 90,
  //defining method in objects

  printmarks: function () {
    console.log("marks=", this.marks);
  },

  //automatically it has the __proto__ //which is actually an object having more functionalities
};

// {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, __lookupSetter__: ƒ, …}
// constructor
// :
// ƒ Object()
// hasOwnProperty
// :
// ƒ hasOwnProperty()
// isPrototypeOf
// :
// ƒ isPrototypeOf()
// propertyIsEnumerable
// :
// ƒ propertyIsEnumerable()
// toLocaleString
// :
// ƒ toLocaleString()
// toString
// :
// ƒ toString()
// valueOf
// :
// ƒ valueOf()
// __defineGetter__
// :
// ƒ __defineGetter__()
// __defineSetter__
// :
// ƒ __defineSetter__()
// __lookupGetter__
// :
// ƒ __lookupGetter__()
// __lookupSetter__
// :
// ƒ __lookupSetter__()
// __proto__
// :
// (...)
// get __proto__
// :
// ƒ __proto__()
// set __proto__
// :
// ƒ __proto__()

//IN JAVASCRIPT THE ARRAY IS NOT ACTUALLY AN TYPE IT IS AN OBJECT

// for eg ..
// let arr=['apple','banana','mango']

// typeof(arr)  would be the object

//because arr has inbuilt methods like push pop which can only be possible in objects

//all objects inherits some of the methods or functions from the __proto__ inbuilt object

//for creating our own prototype

const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  }, //withhout using function keyword
  calcTax2: function () {
    console.log(
      "This is also an correct way to define a function inside the object"
    );
  },
};

const karanArjun = {
  salary: 50000,
  //inheriting the calcTax from th employee for this we would write
};
//before inherit

// {salary: 50000}

//inheriting

karanArjun.__proto__ = employee;

//after that we can also use the functions of the employee inside the karanArjun Object

class ToyotaCar {
  constructor(brand) {
    console.log(`creating the new Toyota Car Named ${(this.brand = brand)}`);
  }
  start() {
    console.log("The car has started");
  }
  stop() {
    console.log("The car has stopped");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

//to create the new Object from the class Car

const Fortuner = new ToyotaCar("lexus");

//creating the new Toyota Car Named lexus
//The constructor has been called .
Fortuner.start();
//  The car has started

Fortuner.setBrand("Fortuner Xuv");

console.log(Fortuner);
//ToyotaCar { brand: 'Fortuner Xuv' }

//constructor is an reserve keyword

//automatically invoked when the new object was created

// it is basically used to initialise the object

//Inheritence in Js

class Parent {
  constructor() {
    console.log("2. constructor of the parent class");
  }
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {
  constructor(childnmame) {
    console.log(
      "1. object creating and firstly entered into the child class constructor"
    );
    super(); //must be called before accessing the this keyword
    console.log("3.Constructor of the child class ", childnmame);
  }
  hello() {
    console.log("hello from the child");
  }
} //method overriding is seen therefore th

let obj = new Child("franklin"); //we can't use this without invoking the parent for this we would use the super(); inside the constructor of our child class
//hello from the child class
//Now the child class method will be preferred instead of the Parent class me

//Notes _---------------------->

// ReferenceError: Must call super constructor
// in derived class before accessing 'this' or
// returning from derived constructor

//Lets practice

//You are creating the website for your college.Create a class use with 2 properties name and email. It also has method called viewData() that allows user to view website Data

//Create a new class called admin which inherits from user. Add a new method called editData to Admin that allows to edit the website Data

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(
      `The name of the user is ${this.name} and the email of the User is ${this.email}`
    );
  }
}

let student1 = new User("yash", "yash@8750gmail.com");

student1.viewData();

// The name of the user is yash and the email of the User is yash@8750gmail.com

//solution for the problem 2

class admin extends User {
  constructor(newName, newEmail) {
    super(newName, newEmail);
  } //to directly access the constructor from child class
}

let newAdmin = new admin("Rajveer", "yashu@gmail.com");
newAdmin.viewData();
// The name of the user is Rajveer and the email of the User is yashu@gmail.com


let a=23
let b=45

try{
    console.log(a+b)
    console.log(c)
}
catch(e)
{
    console.log(e)
}