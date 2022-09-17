

let main =(n,arr,key)=>{

 
 let l =0;
 let h =n-1;

 while(l<=h){
  let mid = Math.floor((l+h)/2)

  if(key === arr[mid]){
   return mid
   } else if (key > arr[mid]){
    l = mid+1
   } else {
    h = mid-1
   }
 }
 return -1

}

let arr = [
 1, 2, 4, 5,
 6, 7, 9
]
let n = 7;
let k =8

console.log(main(n,arr,k))