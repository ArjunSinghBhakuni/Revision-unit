
let main =(n,arr)=>{

 let low = 0;
 let high = n-1;
 quickSort(low,high)
 console.log(arr)
 
 function quickSort(low,high){

  if(low<high){

   let pivot = parition(low,high)

   quickSort(low,pivot-1)
   quickSort(pivot+1,high)
  
  }
 }


}
 // 4 6 2 5 7 9 1
 // pivot = 4
 // 4 1 2 5 7 9 6 ,i =1, j = 6
 // 4 1 2  5 , i = 3,j = 2
 // 2 1 4 5 7 9 6
 //
function parition(l,h){

// for optimisation we can do two thing
 // pivot = arr[mid]
 // pivot = random(l,h)
 let pivot = arr[l]

let i =l;
let j =h;

while(i<j){

 while(pivot>= arr[i]){
  i++
 }
 while(pivot<arr[j]){
  j--
}
if(i<j){
 swap(arr,i,j)
}
}

swap(arr,l,j)
return j

}

function swap(arr,i,j){
 temp = arr[i]
 arr[i] = arr[j]
 arr[j] = temp
}
let arr = [4, 1, 2, 5, 7, 9, 6]
main(7,arr)
