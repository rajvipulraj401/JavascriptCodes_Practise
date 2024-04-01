```javascript
// Find Second Largest and Second Smallest Elements in Array (Method 1 optimal)

// Time Complexity: O(n)
// Space Complexity: O(1)

// Code
const secondLargAndMin = function(arr) {
  let max1 = -Infinity;
  let max2 = -Infinity;
  let min1 = Infinity;
  let min2 = Infinity;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    } else if (arr[i] > max2) {
      max2 = arr[i];
    }
    
    if (arr[i] < min1) {
      min2 = min1;
      min1 = arr[i];
    } else if (arr[i] < min2) {
      min2 = arr[i];
    }
  }
  
  return [max2, min2];
}

// Test the function with an example array
const arr = [5, 3, 2, 4, 1];
console.log(secondLargAndMin(arr));

/* 

Logic-----

I have given an array "a" of n size, and I need to find the second largest and second smallest elements from the array. For example, if I have an array of size 5: [5, 3, 2, 4, 1], the second largest element after 5 is 4, and the second smallest element after 1 is 2.

Expected Time Complexity:
O(n), where 'n' is the size of the input array 'a'.

Constraints:
2 ≤ n ≤ 10^5
0 ≤ a[i] ≤ 10^9

Time limit: 1 sec

*/

/* 
Steps (Method 1):

1) Initialize four variables: max1, max2, min1, min2. 
   - max1 and max2 will store the two maximum elements, initialized to negative infinity.
   - min1 and min2 will store the two minimum elements, initialized to positive infinity.
2) Iterate through the array.
3) For each element in the array:
   - Compare it with max1:
     - If it is greater than max1, update max2 to max1 and max1 to the current element.
     - If it is greater than max2, update max2 to the current element.
   - Compare it with min1:
     - If it is less than min1, update min2 to min1 and min1 to the current element.
     - If it is less than min2, update min2 to the current element.
4) After iterating through the entire array, max2 and min2 will contain the second largest and second smallest elements, respectively.
5) Return [max2, min2].

*/

/* 
Dry Run:

Given Example: arr = [5, 3, 2, 4, 1]

Initial values:
max1 = -Infinity, max2 = -Infinity, min1 = Infinity, min2 = Infinity

Iteration 1:
arr[0] = 5
5 > -Infinity => Update max2 to -Infinity, max1 to 5

Iteration 2:
arr[1] = 3
3 > -Infinity => Update max2 to 5

Iteration 3:
arr[2] = 2
2 < Infinity => Update min2 to Infinity, min1 to 2

Iteration 4:
arr[3] = 4
4 < 5 => No update to max1 or max2
4 > 2 => Update min2 to 4

Iteration 5:
arr[4] = 1
1 < 5 => No update to max1 or max2
1 < 2 => No update to min1 or min2

Final second largest element: 4
Final second smallest element: 2
*/
```