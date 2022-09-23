//closure

var arr = [1, 2, 3, 4, 5];

// for(var i=0;i<arr.length;i++){

//  setTimeout(()=>
//  console.log(arr[i],i)
//  ,i*1000)
// }

// IIFE -> MAKE it local scope
// clourser
// local scope right now
// for(var i=0;i<arr.length;i++){

//  setTimeout(function(i){

//   return function(){
//    console.log(arr[i],i)
//   }
//  }(i),i*1000)
// }

//

//separate display function
// call apply bind


// function display(i) {
//   setTimeout(
//     () => console.log(this[i], i),

//     i * 1000
//   );
// }

// for (var i = 0; i < arr.length; i++) {
//   display.call(arr, i);
// }


// change var to let 
// for(let i=0;i<arr.length;i++){

//  setTimeout(()=>
//  console.log(arr[i],i)
//  ,i*1000)
// }

// strict mode
// we cant asscess this 
// it will come undifined


// DSA
// input => 'key,value,pair,javascript'
// output => {key:{value:{pair:{javascript:{}}}}}