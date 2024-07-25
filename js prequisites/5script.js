// let div=document.querySelector('div')

// let id=div.getAttribute('id')
// console.log(id)

// let name=div.getAttribute('name')
// console.log(name,"is the name attribute in the box class")

// let para=document.querySelector('para')
// console.log(para.getAttribute('id'))
// para.setAttribute("class","newclass")


let div=document.querySelector('div')

div.style.color="white"



// div.style.visibility="hidden" to hide the element from the website
//creating element such as button


let newButton =document.createElement("button")
newButton.innerText="click me ASAP!"
div.append(newButton)
div.before(newButton)
//either append or prepand work any one will work only inside the div 
//either before and after the div element the content is inserted and while  



//node.append(element) adds the end of the node

//node.prepend(element) adds at the start of the node(inside)
//node.before(el) //adds before the node(outside)
//node.after(element)//adds after the node (outside)
//problem to add the heading into our html page without touching the html document 

let newheading=document.createElement("h1")

newheading.innerText="This is the heading of the html document"

let body=document.querySelector("body")

body.prepend(newheading)



//to removve any element in the document 
let para=document.querySelector("div")
// para.remove()


//read about the append child , remove child . 


let newbutton2=document.createElement("button")

newbutton2.innerText="clickme"

body.after(newbutton2)
newbutton2.style.backgroundColor="red"
newbutton2.style.color="white"
newbutton2.style.borderRadius="4px"


let paragraph=document.querySelector("p")

//  paragraph.setAttribute("class","newclass") //changing the attribute or say class of the paragraph to the at

 //we use the class list attribute because when we change the class to newclass name the properties are reverted back to default one i.e no attributes will remain same as they work in the class keyword

paragraph.classList.add("newclass")//previous class lies together with the new class too 

para.classList.remove("newclass")