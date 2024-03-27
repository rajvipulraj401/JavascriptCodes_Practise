function filteredArray(arr, elem) {
  let newArr = [];
for (let i = 0;i<arr.length;i++){

  // if(arr[i].includes(elem)){
  //   // continue;
  // }
  // else{

  // // SO NOW when there is no elements then we want to push the elements into a small array and then push that array into the newArr.
  // newArr.push(arr[i]);

  // } 

//   if(!arr[i].includes(elem)){
// newArr.push(arr[i]);
//   }


// METHOD 2 ---(USING indexOf)
if (arr[i].indexOf(elem) == -1) 
      //Checks every parameter for the element and if is NOT there continues the code
      newArr.push(arr[i]);

}
  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));



//logic


/* 
1) just see if the element is not present in the array if so push that array to newArray

for seeing 

use 
a) indexOf to check if the index is negative .

b) or includes method if it is false then push it .
*/




