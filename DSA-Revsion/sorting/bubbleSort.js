function solve(n,arr){
 //write code here
 
 for(let i =0;i<n-1;i++){
     
     let isSwapped = false;
     for(let j =0;j<n-i-1;j++){
         
         isSwapped = true
         if(arr[j+1]<arr[j] ){
             
             temp = arr[j+1]
             arr[j+1]= arr[j]
             arr[j] = temp;
         }
     }
     if(!isSwapped){
         break;
     }
 }
 console.log(arr.join(" "))
}
let n = 5
let arr = [3, 5, 0, 9 ,8]
solve(n,arr)