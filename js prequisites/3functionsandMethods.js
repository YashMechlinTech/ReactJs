function CountVowels(string) {
  let count = 0;
  for (character of string) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(CountVowels("Tanushree".replace(" ", "").toLowerCase()));

//doing from the arrow function

const countingViaArrow = (string) => {
  let count = 0;
  for (character of string) {
    if (
      character === "a" ||
      character === "e" ||
      character === "i" ||
      character === "o" ||
      character === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countingViaArrow("Yashu Chauhan".replace(" ", "").toLowerCase()));

//for each method in arrays

//callback function is an function in which the function is passed as an argument matlab ki hum ek function ko hi pass kar dete hain
function abc() {
  console.log("hello");
}
function myfunction(abc) {
  return abc;
}

//for each is an callback function which takes an argument

let arr = ["pune", "delhi", "mumbai"];
arr.forEach((val, index) => console.log(val.toUpperCase(), index, arr));

//For ecah method is an Higher order function : these are those function who takes as an function as an parameter or return an function

//for a given array of numbers ,print the square of each value using the for each loop

let array = [4, 6, 2, 12, 3];
array.forEach((element) => {
  console.log(element * element);
});

let calculatesquare = (num) => console.log(num * num);

console.log(calculatesquare(4));

//map method is much similiar as the map method

//map return the new array

// arr.map(callbackFnx(value,index,array))
let newArr = array.map((val) => val);
console.log(newArr); //return the array of the elements in the arr

//for each basically used for the normal calculation
//map is used for creating the new array

//filter method creates a  new array of the elments that give true for a condition filter
//eg all even elements

let newArray = array.filter((val) => {
  return val % 2 == 0;
}); //[ 4, 6, 2, 12 ]

console.log(newArray); //returns only those elements which are divided by two only

//return value greater than 3

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let editedArray = numbers.filter((val) => {
  return val > 3;
});
console.log(editedArray); //[ 4, 5, 6, 7, 8, 9 ]

//reduce method performs some opereations and reduces the array to the single value . it returns that single value

const output = numbers.reduce((result, current) => {
  return result + current;
}); //start from the shuruat ki do values ke sath result is firstly empty thent he current pointer increase till the length of the array ..but the result remain at the same location which is the first position

console.log(output);

//calculate the largest element from the number array

const output1 = numbers.reduce((prev, current) => {
  if (current > prev) {
    prev = current;
    return prev;
  }
});
 
console.log(output1) // 9 is the largest number in the array


//we are given the array of marks of the students filer out teh marks of the students that scored 90+

let marks=[34,56,78,90,91,97,99,12]
console.log(marks.filter(val=>{return val>90}))

//take a number n as input from the user . create an array of numbers from the 1 to n 
//use the reduce method to calculate the sum of all numbers in the array . use the reduce method to calculat the product of all numbers in the array

let n=26

//creating the array from the number n 
let userarray=[]
for (let i=1;i<=n;i++)
{
    userarray[i]=i
}
let sum=userarray.reduce((prev,curr)=>{return prev+curr})
console.log(sum)

let product=userarray.reduce((prev,curr)=>{prev=prev*curr
    return prev
})

console.log(product)