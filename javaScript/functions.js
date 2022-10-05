// pure functions ->

//  we can passthem inside a another function just like a variable we can return and mainpute
// from that function

// square is pure function here
// function square(num) {
//   return num * num;
// }

// function display(fn) {
//   console.log("square is " + fn(5));
// }

// display(square);

 
 
// function name1(){
//  console.log(num) // not defined
//  num = 20
// }
// name1()
 
// function name2(){
//  console.log(num) // undefined
//  var num = 20
// }
// name2()

// var num = 10
// function name3(){
//  console.log(num) // undefined
//  num = 20
// }
// name3()

//  var num = 10
// function name4(){
//  console.log(num) // 10
//  num = 20
// }
// name4()

// var num = 10
// function name5(){
//  num = 20
//  console.log(num) // 20
// }
// name5()

// difference  normal function and arrow funtion
// syntax
// return
// this
// arguments
console.log("d")
function fn(){
 console.log("normal funcion",arguments) // access without receiving parameter
// arrray
}
fn( 1,2,3)

let fnArr = ()=>{
 console.log("arrow funcion",arguments) // argiments not defined
}

fnArr(1,2,3)
