function chunkArrayInGroups(arr, size) {
  // return arr;
let result =[];
let smallArr = [];
for(let i =0;i<arr.length; i++){
    // start pushing directly and if smallArr.length=== size then

    smallArr.push(arr[i]);

    if(smallArr.length === size){
    result.push(smallArr);
    smallArr=[];
    }
  }
  // check if there is element in small Arr remaining
    if(smallArr.length>0){
      result.push(smallArr);
      smallArr=[];
    }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d","e"], 2));


// logic

/*    logic (withou any method)
1) we will have two extra arrays one will have big result and the other will have small arrays of groups of size = size given.
2) we will loop through the main array and then we will push the element in small array .
3) inside the loop we will check if the size of small array is equal to the given size .
4) if so , then we will push the small array in the result big array.
5) outside the loop we will check again if there is any more element in the small arr . 
if so , we will push it inside the result arr.
6)at last we will return the result array .

*/