```javascript
// Left Rotate an Array Once and return it (Method 1 optimal)

// Time Complexity: O(n)
// Space Complexity: O(1)
/* NOTE - space complexity is O(1) as we are not using any extra space (extra datastructure) but  
yes we are modifying the array so the space used to solve the problem is O(n)  .
Yes that array is already there but we are using it . 
 SO WHAT is the space used in your algorithm then it becomes O(n) */

// Code
const rotateArray = arr => {

   if (arr.length <= 1) {
        return arr; // No need to rotate if array has 0 or 1 element
    }
  const temp = arr[0];

  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;

  return arr; 
}

// Test the function with an example array
const arr = [2, 3, 1, 4, 1];
console.log(rotateArray(arr));

// Logic
/* 
I have given an array 'arr' containing 'n' elements, and I need to rotate this array left once and return it.
Rotating the array left by one means shifting all elements by one place to the left and moving the first element to the last position in the array.

Example:
Input: arr = [1, 2, 3, 4, 5]
Output: [2, 3, 4, 5, 1]


 LOGIC (EXPLAINED) -->Store the  first index value as a temp and then iterate 
 the array from 1 to arr.length-1 and then 
keep  arr[i-1] = arr[i]
and then after the iteration keep arr[arr.length-1] = temp;

*/
// Steps
/* 
1) Store the first index value as temp.
2) Iterate through the array from index 1 to arr.length - 1.
3) For each element, move the element at index i to index i - 1.
4) After the loop, assign temp to the last index of the array.

*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'arr'.
Constraints:
1 ≤ n ≤ 10^5
0 ≤ arr[i] ≤ 10^9
*/

// Dry Run
/*
Given Example: arr = [2, 3, 1, 4, 1]

Initial array: [2, 3, 1, 4, 1]

Iteration 1:
temp = 2
Shift elements: [3, 1, 4, 1, 2]

Final array after rotation: [3, 1, 4, 1, 2]
*/