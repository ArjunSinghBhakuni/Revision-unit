//Wrong way

// function getEmail( data ){
//  console.log(this)
//  // return `${this.firstName}${this.lastName}@gmail.com`
// }
// we cant use normal function withoout call apply bind

// let student = {
// firstName:"Arjun",
// lastName:"Singh",
// getEmail: getEmail(this)

// }
// console.log(student.getEmail)



// right way

let teacher = {
 firstName:"interview",
 lastName:"uoipas",
 }


 function getEmail(){
  return this.email = `${this.firstName}${this.lastName}@gmail.com`
  }

  function chooseSubject(subject1,sub2){
  return this.subject= [subject1,sub2]
  }
 console.log(chooseSubject.call(teacher,"maths","english"))
 // any type params in call

 // apply take second parameter as an array
 console.log(chooseSubject.apply(teacher,["maths","english"]))
 

 
 //bind behave different from call and apply
 // bind return a function
 // bind give a function to reuse whenever it needed


 let call = getEmail.bind(teacher)
 console.log(call())
 console.log(teacher)