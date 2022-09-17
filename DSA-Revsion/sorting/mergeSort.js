

let main = (n,arr)=>{

 let l =0;
 let r = n-1;
 
 mergeSort(arr,l,r)
 console.log(arr)

 function mergeSort(arr,l,r){

  if(l<r){

   let mid = Math.floor((l+r)/2)
   mergeSort(arr,l,mid)
   mergeSort(arr,mid+1,r)
   merge(arr,l,mid,r)
  }
 }


}

function merge(arr,l,mid,r){

 let arr1 = []
 let arr2 = []

 for(let i=l;i<=mid;i++){
  arr1.push(arr[i])
 }
 
 for(let i=mid+1;i<=r;i++){
  arr2.push(arr[i])
 }

let i =0;
let j=0;
let curr = l;
 while(i<arr1.length && j<arr2.length){

  if(arr1[i]<=arr2[j]){
   arr[curr]= arr1[i]
   i++
  } else {
   arr[curr] = arr2[j]
   j++
  
  }
   curr++
 }


 while(i<arr1.length){
  arr[curr] = arr1[i]
  curr++
  i++

 } 

 while(j<arr2.length){
  arr[curr] = arr2[j]
  j++
  curr++
 }



}


let arr = [4, 1, 2, 5, 7, 9, 6]
main(7,arr)

 