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

// function returnPromises() {

//      console.log("Promise Executed...");

// }

//   async function ExecuteFunction() {
//  var newData = "Mayank";
//    let z = await returnPromises();
//  console.log(newData);
// }

// ExecuteFunction()

//Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
 //param A : head node of linked list
 //return the head node in the linked list
    solve : function(A){
        class Node {
            constructor(data) {
                    this.data=data;
                    this.next=null;
                }
        }
        let headone= new Node(1);
        let headzero=new Node(0);
        let one=headone,zero=headzero;
        let temp=A;

        //console.log(headzero.data,headone.data,one.data,zero.data,A.data,temp.data);

        while(temp != null){
            if(temp.data==0){
                zero.next = temp;
                zero = zero.next;
                temp=temp.next;
                zero.next=null;
            }
            else{
                one.next = temp;
                one=one.next;
                temp=temp.next;
                one.next=null;
            }

        }
        zero.next=headone.next;

        return headzero.next;

    }
};

 