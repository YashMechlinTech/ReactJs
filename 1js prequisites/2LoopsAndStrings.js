for (let i = 1; i <= 5; i++) {
  console.log("Yash chauhan");
}

//calculate sum of all number from 1 to 5

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}
console.log(sum); //15

for (let i = 1; i <= 5; i++) {
  console.log("i=", i);
}

// console.log(i) //error will come here

//Infinite loops in Js -> we should avoid the infinite loop

//--------------while condition in Js-----------------
let i = 1;
while (i <= 5) {
  //do some work
  console.log("x=", i);
  i++;
}
console.log("loop ended");
//do while loop
let x = 90;
do {
  console.log(x);
  x--;
} while (x != 0);

//for of loop and for in loops
//for of used in string and
//for object we use the for in loops

let str = "apna college";
for (let i of str) {
  console.log(i);
  //   a
  //   p
  //   n
  //   a

  //   c
  //   o
  //   l
  //   l
  //   e
  //   g
  //   e
}

const student = {
  name: "yash chauhan",
  age: "21",
  email: "chauhan@gmail.com",
  isPass: true,
};

for (let i in student) {
  //returns only the keys but not the value
  console.log(i);
  // name
  // age
  // email
  // isPass
  console.log(student[i]);
  //     yash chauhan
  // 21
  // chauhan@gmail.com
  // true
}

//Print all the even numbers from the 0 to 100

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

//dont print the even number and just print

//create a game where you start with a random game number . ask the user to keep he guessing the game number untill the user enters the correct value

// let gameNum=25
// let UserInput=prompt("Guess the game number ")
// while(gameNum!=UserInput)
// {
//     UserInput=Number(prompt("oops you entered the wrong Number ! try again "))
// }
// alert("congratulations You have entered the correct number ")

//Strings is an sequence of characters which represents the text

let string1 = "Apna college";
let string2 = "Hello world";

console.log(string1.length);

//Template literals : special type of string

let literals = `this is the string which is an template litrals in literals we could also use the varible using ${""}`;

console.log(typeof literals); //string

let obj = {
  item: "pen",
  price: 10,
};

console.log("the cost of", obj.item, "is and price is ", obj.price);
console.log(`The cost of ${obj.item} is ${obj.price}`);

//String methods in js

console.log(string1.toUpperCase());
console.log(string1.toLocaleUpperCase());
//APNA COLLEGE
//APNA COLLEGE
let string3 = "  Yash Chauhan     ";
console.log("Before trim:", string3);
console.log("After trim:", string3.trim());
//trim the whitespaces from the starting and ending

//strings are immutable in js to change we have create a new string

//slice method in Js
console.log("Before slicing the string :", string1);
console.log(string1.slice(1, 3)); //pn retured from the apna college string1
console.log("after slicing string: ", string1);

//in slice the original array is not changed just returns the sliced array ..

//concatenate the string1 and string2

console.log(string1.concat(string2));
//we can also join the strin using the +

console.log(string1 + string2);


//replace method which replaces the particular val with new one


console.log(string1.replace("Apna","Humara"))

//charAT method in string used to print the elment the index in 

console.log(string1.charAt(3)) //return a from the Apna college

//prompt the user to enter their full name . genreate a username for them based on the input start username with @, followed by their full name and ending with the fullname length. eg:user name='shraddhakhapra,username should be" @shradhakhapra13"
const fullname=prompt("Enter Your full name ")

const trimmedName=fullname.replace(" ","")

const genreatedId="@"+trimmedName+Math.floor(Math.random()*100)
console.log(genreatedId) //@yashchauhan37 or any random number 
console.log(typeof(genreatedId)) //@yashchauhan37 or any random number 

alert(`The genreatdId is ${genreatedId}`)

//we use the interpolation string method to pass the value in the function 
 