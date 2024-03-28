```javascript
// Find Largest Element in Array (Method 1 using loops)

// Code
const largest = function(arr) {
  let ans = -100000;
// let ans = -Infinity
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > ans)
      ans = arr[i];
  }
  
  return ans;
}

// Test the function with an example array
const arr = [1, 2, 3, 4, 5];
console.log(largest(arr));

/* 

Logic-----

I have an array i have to find the largest element in that array for example if  i  have array of size 5 
[1,2,3,4,5]  then the output will be 5 as 5 is the largest element in the array.

*/

/* 
Steps (Method 1 using loops):

1) Initialize a variable `ans` to store the maximum value, initially set to a very small number (e.g., -100000).
2) Iterate through the array.
3) For each element in the array:
   - Check if it is greater than the current maximum value (`ans`).
   - If yes, update `ans` to the value of the current element.
4) After iterating through the entire array, `ans` will contain the largest element.
5) Return `ans`.

*/

/* 
Dry Run:

Given Example: arr = [1, 2, 3, 4, 5]

Initial values:
ans = -100000

Iteration 1:
arr[0] = 1
1 > -100000 => Update ans to 1

Iteration 2:
arr[1] = 2
2 > 1 => No update to ans

Iteration 3:
arr[2] = 3
3 > 1 => No update to ans

Iteration 4:
arr[3] = 4
4 > 1 => No update to ans

Iteration 5:
arr[4] = 5
5 > 1 => Update ans to 5

Final largest element: 5
*/
```