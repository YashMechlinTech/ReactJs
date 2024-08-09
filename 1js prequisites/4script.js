// //window object the window objec represents the open window in a browser .it is browser's object (not javascript's ) & is automatically created by the browser

// //it is a global object with lots of the properties and methods
// // console.log("hello")
// // window.console.log("helllo2")

// // //console.log is actually an part of the window object .. 
// //  //alert is also an window object part but we dont write the window keyword the browser already know it

// // console.dir()//properties and method ko print kara deta hain

// // console.log(window.document) //window giving error in the vs code but in browser it will run properly .  

// //dom is an tree structure of the html document and each component is called the node .

// // window->document->html ->Head,body, etc..
// //window object represents an open window in an browser . it is browser object & is automatically created by the browser
// //it is a global object with lots of properties and methods
// // in js the html act as an object and hence to manipulate the data of the html by js is done by the predefined methods  like th innerHTML and like attribute ..etx..


// //console.log() actually print the things into the console

// //console.dir() is basically used for the printing the properties and methods of the object 


// //console.log(window.document) is actually equal to the console.log(document)


// // console.log(document.body)

// // document.body.style.backgroundColor="green"

// // document.body.childNodes[2].innerText="Hello this is the edited text"

// // const element=document.getElementById("heading1")
// // console.log(element)


// // let parahs=document.getElementsByTagName("p")
// // console.dir(parahs)


// // document.querySelector("p").style.color="white"//to change the p tag content color to the white

// let allElements=document.querySelectorAll("html")
// console.log(allElements) 

// //return the nodelist of all contenst of the html

// //DOM MANIPULATION

// //tagname returns the tag for the element nodes 
// //innerText returns the text content of the element and all its children 
// //innerHTML returns the plain text or HTML contents in the element 
// //textContent returns textual content even for hidden elements

 //practising dom manipulation using the id,tags,class,queryselector 
 //problem1 add the extra content to the h2
console.log(document.querySelector("h2"))

let element=document.querySelector("h2")
element.innerText=element.innerText+" from Apna college"
//problem 2 add the unique extra content to the each div of the same class
let divs=document.querySelectorAll(".box")
console.log(divs)

divs[0].innerText=divs[0].innerText+" Unique text one"
divs[1].innerText=divs[1].innerText+" Unique text two"
divs[2].innerText=divs[2].innerText+" Unique text three"

// or else we can use the method like for each 

