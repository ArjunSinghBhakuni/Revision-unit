const property = "firstname"
const name = "birhar"

const obj = {
 [property]:name,
 name:"arjun",
 age:12
}
delete obj.age
obj.age = 10
for(key in obj){

 
}

const a = {...obj}
a.name = "suraj"
console.log(a,obj)

const value = {number :10}

const multiply =(x = {...value})=>{
console.log((x.number *=2))
}

multiply() // 20
multiply() // 20
multiply(value) //20
multiply(value) // 40