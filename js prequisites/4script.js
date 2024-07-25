//window object the window objec represents the open window in a browser .it is browser's object (not javascript's ) & is automatically created by the browser

//it is a global object with lots of the properties and methods
console.log("hello")
window.console.log("helllo2")

//console.log is actually an part of the window object .. 
 //alert is also an window object part but we dont write the window keyword the browser already know it

console.dir()//properties and method ko print kara deta hain

console.log(window.document) //window giving error in the vs code but in browser it will run properly .  

//dom is an tree structure of the html document and each component is called the node .

// window->document->html ->Head,body, etc..
//window object represents an open window in an browser . it is browser object & is automatically created by the browser
//it is a global object with lots of properties and methods
// in js the html act as an object and hence to manipulate the data of the html by js is done by the predefined methods  like th innerHTML and like attribute ..etx..


//console.log() actually print the things into the console

//console.dir() is basically used for the printing the properties and methods of the object 


//console.log(window.document) is actually equal to the console.log(document)


console.log(document.body)

// document.body.style.backgroundColor="green"

document.body.childNodes[2].innerText="Hello this is the edited text"