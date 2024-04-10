// Find Second Largest and Second Smallest Elements in Array (Method 2 Better Solution)

/* 
Time Complexity: O(n) + O(n) = O(n)
Space Complexity: O(1)

Note: We can do it in one pass for larger datasets, but the effect on code performance will be minimal. 
The below code is more readable and modular.
*/ 
// Code


const  secondSmallest = function(){
  
  // function to find secondSmallest
  

  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = num;
    } else if (num < secondSmallest && num !== firstSmallest) {
      secondSmallest = num;
    }
}
  return secondSmallest;
}


const secondLargest = function(arr){
  // fun to find secondLargest
  
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  
  // for (let num of arr) {
   
  // if (num > firstLargest) {
  //     secondLargest = firstLargest;
  //     firstLargest = num;
  //   } else if (num > secondLargest && num !== firstLargest) {
  //     secondLargest = num;
  //   }
  // }
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > firstLargest) {
//         secondLargest = firstLargest;
//         firstLargest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
//         secondLargest = arr[i];
//     }
// }
// return secondLargest;
  
  arr.forEach((curr)=>{
    
    if (curr > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = curr;
    } else if (curr > secondLargest && curr !== firstLargest) {
      secondLargest = curr;
    }
  });
  
    return secondLargest;
}

const secondLargAndMin = function(arr) {

if(arr.length<=1){
// cause if there are just one element  then it can't be compared and also in case of empty
return arr }
  
 const secondSmall= secondSmallest(arr);
 const secondLarge= secondLargest(arr);
 return [secondSmall, secondLarge];
 // return {secondLarge,secondSmall};
 // the above will make return like this in output 
 // making it a property inside an object by same name and assigning the value
 // { secondLarge: -1, secondSmall: -1 }

}



// Logic-----------------------
/* 
I have given an array "arr" of size 'n'.
I have to find the second largest and second smallest elements from the array.
For example:
Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]
Output: 4, 2

Logic Explanation: We will find the second smallest and second largest 
elements in a single pass through the array. we will keep 4 variables and store each value and then compare.
*/

// Steps---------------------------
/* 
1) Initialize variables to keep track of the first and second smallest/largest elements.
2) Iterate through the array:
    - Update the first and second smallest elements.
    - Update the first and second largest elements.
3) Return the second smallest and second largest elements as an array.
*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'arr'.
Constraints:
2 ≤ n ≤ 10^5
0 ≤ arr[i] ≤ 10^9
*/

// Dry Run
/*
Given Example: arr = [5, 3, 2, 4, 1]

Iteration 1:
firstSmallest = Infinity, secondSmallest = Infinity
firstLargest = -Infinity, secondLargest = -Infinity

num = 5
5 > Infinity: false
5 > -Infinity: true => Update firstLargest = 5
=> secondLargest = -Infinity

Iteration 2:
num = 1
1 < Infinity: true => Update secondSmallest = 1
=> secondSmallest = 1

Iteration 3:
num = 1
1 < 5: true => Update secondLargest = 1
=> secondLargest = 1

Iteration 4:
num = 2
2 < 5: true => Update secondLargest = 2
=> secondLargest = 2

Iteration 5:
num = 1
1 < 5: true => Update secondLargest = 1
=> secondLargest = 1

Output: [1, 2]
*/
