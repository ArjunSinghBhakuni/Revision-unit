
function solve(n,arr){
 //insertion sort
 
 for(let i=1;i<n;i++){
     
     let temp = arr[i]
     let j = i-1;
     
     while(j>=0 && arr[j]>temp){
         
         arr[j+1] = arr[j]
         j--
      
     }
     arr[j+1] = temp;
 }
 console.log(arr.join(' '))
}

let n = 5
let arr = [3, 5, 0, 9 ,8]
solve(n,arr)