function solve(n,arr){
   
   
 for(let i=0;i<n-1;i++){
     
     let min =i;
     
     for(let j=i+1;j<n;j++){
         if(arr[j]<arr[min]){
             min = j
         }
     }
     if(min !=i){
         temp = arr[i]
         arr[i] = arr[min]
         arr[min] = temp;
     }
 }
 console.log(arr.join(' '))
}


let n = 5
let arr = [3, 5, 0, 9 ,8]
solve(n,arr)