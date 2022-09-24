 

let arr = [3,4,5,6]
 

let area = function(radius){

 return Math.PI * radius * radius
}

// one ways
// let calculate = (arr,logic)=>{

//  let output = []

//  for(let i =0;i<arr.length;i++){
//   output.push(logic(arr[i]))
//  }
//  return output
// }

// 2nd way 
console.log(arr.map(area))

// 3rd way write own HOF 

// if we use normal function so we have to use the this key for arr
Array.prototype.calculate = (logic)=>{

  let output = []
 
  for(let i =0;i<arr.length;i++){
   output.push(logic(arr[i]))
  }
  return output
 
} 
console.log(arr.calculate(area))