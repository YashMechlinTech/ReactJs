// // console.log("one")
// // console.log("two")
// // console.log("three") output will be the one two three and hence this is called the synchronous programming

// function  hello(){
//     console.log("hello world")
// }

// // setTimeout(hello,4000)
// //after 4seconds it will run

// console.log("one")
// console.log("two")
// setTimeout(()=>{console.log("three")},4000)
// console.log("four")

// function sum(a,b){
//   console.log(a+b)
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b);
// }

// console.log(calculator(6,2,sum))

// //callback hell

// function getData(dataId)
// {
//  setTimeout(() => {
//  console.log(dataId)
//  }, 2000);
//   //returning the data from the database suppose
// }

// getData(123)

// //question

// function getData(dataId,getNextData)
// {
//   setTimeout(()=>{
//     console.log("dataId=",dataId)
//     if(getNextData)
//     {
//       getNextData();
//     }
//   },2000)
// }

// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4); //this is the callback hell
//     })
//   })
// })

// //Promises are used in javascript to solve the problem of the callback hell

// let promise=new Promise((resolve,reject)=>{
//   console.log("I am a promise") //initailly it is in the pending state
//   //be fullfilled result will be 123
//   // reject("some error,it throws the error ")
// })//I am a promise

// //promise state and the promise result

// //API always return data in promise
// function getApiData(dataId,getNextData)
// {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("data=",dataId)
//       if(getNextData)
//       {
//         getNextData()
//       }
//     },2000)
//   })
// }

// let result=getApiData(123)
// console.log(result)

const getpromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1..");
      resolve("successs getting data 1");
    }, 4000);
  });
};

const getpromise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2..");
      resolve("successs gettting data2");
    },4000);
  });
};
let gettingData = getpromise();

console.log("fetching data1.. ");
gettingData.then((resolve) => {
  console.log(resolve)
  console.log("fetching data2..");
  let gettingData2 = getpromise2();

  gettingData2.then((resolve) => {
    console.log(resolve);
  });
});  //this is called the chaining in the promises



// fetching data1.. 
// data1..
// successs getting data 1
// fetching data2..
// data2..
// successs gettting data2



//solving the callback hell

//async and await


function api(){
  return new Promise((resolve, reject) => {
   setTimeout(() => {
    console.log("weather data")
    resolve(200)//success message 
   }, 2000);
  })
}


async function getweatherData(){
  await api();
  await api(); //after 4 seconds we got second weather data
}
//chaining and callback hell is bad and complex for complex logic in the projects 
getweatherData(); //calling the weather data after 2 seconds we got  =>>  weather data and after 4 seconds we got second weather data