// function find(index){

//  let a = []
//  for(let i =0; i< 10000000;i++){
//   a[i] = i*i
//  }

//  console.log(a[index])
// }

// console.time("100")
// find(100)
// console.timeEnd("100")
// console.time("50")
// find(50)
// console.timeEnd("50")

// // if we use closure here So we can optmise the time
// // just return the function
// function find( ){

//  let a = []
//  for(let i =0; i< 10000000;i++){
//   a[i] = i*i
//  }
// return function (index){

//  console.log(a[index])
// }
// }
// const closure = find()
// console.time("100")
// closure(100)
// console.timeEnd("100")
// console.time("50")
// closure(50)
// console.timeEnd("50")
 


// // what is module pattern
// // he module pattern is a special Design pattern in which we use IFFI 
// //(Immediately invoked function expression), and we return an object. 
// //Inside of that object, we can have functions as well as variables.

// var module = (function(){
//  function privateMethod(){
//   // do something
//  console.log("Private")
//  }
//  return {
//   publicMethod : function(){
//   // can call private method
//  console.log("public")
//  }
//  };
//  })();
 
//  module.privateMehod() // get error 
//  module.publicMehod() // print public


 // code only call one time

let view; 

function liketheVideo(){

 let called =0;
return function (){

 if(called > 0){
  console.log("allready sub")
 }else {
  view = "subsribe"
  console.log( view)
  called++
 }
 }
}

const isSubscribed = liketheVideo()
isSubscribed() // subsribe
isSubscribed() // aleardy subscribe
isSubscribed()