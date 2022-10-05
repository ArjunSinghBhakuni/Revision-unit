// let name = "sonu";

// let obj = {
//   name: "arjun",

//   foo: () => {
//     console.log("this.name", this.name); // undefined
//   },
// };

// obj.foo();

 

// let obj = {
//   name: "arjun",

//   foo: () => {
//     console.log("this.name", this.name);
//   },
// };

// obj.foo();



// const user = {
//   name:"Piyush Agarwal",
//   logMessage(){
//     console.log(this.name)
//   }
// }
//  //setTimeout(user.logMessage(),1000) // nothing will print

 
// setTimeout(function(){ user.logMessage()},1000) // piyush agarwal
 
  
// setTimeout(()=> user.logMessage(),1000)


var length = 4;
function callback (){
  console.log(this.length)
}

const obj = {
  length:5,
  method(fn){
fn();
  },  //length 4
}
obj.method(callback)

 
// const obj = {
//   length:5,
//   method( ){  
//  arguments[0]()  // length of arguments
//   },
// }
// obj.method(callback)