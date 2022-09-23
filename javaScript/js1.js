console.log(undefined == null) //true
console.log(undefined === null) //false

// undefined and null are false value

console.log(NaN == NaN) //false
console.log(NaN === NaN) //false

console.log([]===[]) // false
console.log({}==={}) // false
// two object cannot be same because it refers different refers

console.log(5 && 2 && 0 ||  2 && 3|| 15 && 21) //3
// && is check all is true or not 
// || is check first true

console.log(5 && 2 && 0 ||  2 == 3|| 15 && 21) //21


console.log(5 && 2 && 0 ||  2 == 3 ) //false

console.log(5 && 2 && 0  ) //0

function test(arg1,arg2){
console.log(arguments)
}

 test(2,1)

 // HighOrder function

 // map vs foreach
 // map return a new array
 var arr = [1,2,3,4]

 let newaarr = arr.map((e)=>e*2)
 console.log(newaarr)

 // forEach does not return a array it can better use for iterate

 let forEachArray = arr.forEach((e)=>(e*2))
 console.log(forEachArray)
 
 // filter

 // filter return the true statements
 let filterData = arr.filter((e)=>e!=2)
 console.log(filterData)

 //Arrays
 // create Array
 // first size of array of come then fill
 var arr = new Array(3).fill(5)
 console.log(arr)

 // array is index value pair
 console.log(typeof arr === typeof {})

 //create obj
 
 var obj ={
  1:"value"
 }
console.log(obj["1"])
 // keys automatcially convert into string

 for(let key in obj){
  console.log(key,obj[key])
 }


 //hosting

 var x=100

 function testing(){
 // right to left
 // i = 10
 console.log(x) // undefined because hositing
 
 var x =( i =10)
 }
 testing()
 console.log(x,i) // 100 10


 //var,let,const


 // let donest not allow redirecional
// let x =20
//let x = 5000

// const cannot redeclare