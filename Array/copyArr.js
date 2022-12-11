/*
  You have an array1 and need to copy that array to array2
  ex: arr1=[1,2,3,4,5]
      arr2=copy of arr1
 Algorithm:
 Approach1:
 step1:Create second empty array
 step2:push the array by iterate it
 step3:print the array
 Approach2:
 step1:use array destructure to store the arr1
 step1:by doing step1 you're copying that to another 
*/
function copyArr(arr1){
    for(let i=0;i<arr1.length;i++){
        arr2.push(arr1[i])
    }
    return arr2;
}
function copDestArr(arr1){
    arr2=[...arr1]
    return arr2
}
let arr1=[1,2,3,4,5]
let arr2=[]
console.log(`Through iterate copy ${copyArr(arr1)}`)
console.log(`Through array destructure ${copDestArr(arr1)}`)