//node.event=()=>{
//handle here}
let body=document.querySelector("body")

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
button1.onclick = () => {
  console.log("Button was clicked");
  let a = 23;
  console.log(a);
};

button2.onmouseover = () => {
  console.log("you are hovering over the button2");
};


let divison = document.querySelector("div");

divison.onmouseover=()=>{
 divison.style.backgroundColor='green'

}


//js event handle priority is higher than the priority of the inline event handling like the <button onclick="">clickme!</button> has lower priority than the js event handler functions

//no overriding shouldn't be done ie. it handle the same event again for the particular event 
//so why we should do all work in the same handler


//event object 


button1.onclick=(e)=>{
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX,e.clientY)
}



//event listeners 

//node.addEventListener(event,callbackFxn)
//node.removeEventListener(event,callbackFxn)

// *Note: the callback reference should be same to remove 

divison.addEventListener("click",()=>{console.log('divison was clicked using the event listener1')})
divison.addEventListener("click",()=>{console.log('divison was clicked using the event listener2')})
divison.addEventListener("click",()=>{console.log('divison was clicked using the event listener3')})
divison.addEventListener("click",()=>{console.log('divison was clicked using the event listener4')})

//ALL FOUR EVENTS GONNA TRIGGER FOR THE EVENT LISTENER OF THE BUTTON
const handler3=()=>{console.log('divison was clicked using the event listener3')}
divison.removeEventListener('click',handler3) //will remove this 

let theme=document.querySelector('#theme')
let currmode="light"

theme.addEventListener('click',()=>{
    if(currmode==='light')
    {
        body.style.backgroundColor='black'
        currmode='black'
        theme.innerText='Set white theme'

    }
    else{ 
        
        body.style.backgroundColor='white'
        currmode='light'
        theme.innerText='Set dark theme'
    }
})

