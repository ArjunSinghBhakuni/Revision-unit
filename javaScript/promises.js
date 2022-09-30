

// function getImage(file){

//  return new Promise((res,rej)=>{
// rej("res reg")
//   try {
// const data =   "done"
// res(data)
//   }catch(err){
// rej(new Error(err))
//   }
//  })
// }

// getImage("https://miro.medium.com/max/1400/0*EMA5uWecEUDZzqG-.png").then((r)=>console.log(r)).catch((err)=>console.log(err))

function returnPromises() {
 
  
     console.log("Promise Executed...");
   
  
 
}

  async function ExecuteFunction() {
 var newData = "Mayank";
   let z = await returnPromises();
 console.log(newData);
}

ExecuteFunction()