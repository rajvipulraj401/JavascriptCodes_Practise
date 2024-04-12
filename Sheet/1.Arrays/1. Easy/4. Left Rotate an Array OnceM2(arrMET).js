```javascript
 // Left Rotate an Array Once and return it (Method 2 (using Array methods))
 
/* NOTE - Brute is not needed as this problem is needed to be solved in this 
array only no extra space .
 But in brute method i have to take another array and then copy all of the elements from 
 index 0+1 till n-1 and then at last copy elements from 0 th index (as only moving 1 space for left 
 rotation)
*/

// Time Complexity: O(n)
// This code is not better for bigger data set as array methods is changing index one by one
// Space Complexity: O(1)
/* NOTE - space complexity is O(1) as we are not using any extra space (extra datastructure) but  
yes we are modifying the array so the space used to solve the problem is O(n)  .
Yes that array is already there but we are using it . 
 SO WHAT is the space used in your algorithm then it becomes O(n) */

// Code

  
  const  rotateArray = arr=> {
  const temp =   arr.shift();

  // Shift all elements to the left by one position


  // Move the first element to the end
  arr.push(temp);
 
  return arr; 
  }
 

// Test the function with an example array
const arr = [2, 3, 1, 4, 1];
console.log(rotateArray(arr));


// Logic
/* 
I have given array 'arr' containing 'n' elements, rotate this array left once and return it.
Rotating the array left by one means shifting all elements by one place to the left
 and moving the first element to the last position in the array.

 example 

Input: 'a' = 5, 'arr' = [1, 2, 3, 4, 5]
 Output: [2, 3, 4, 5, 1]

*/

// Steps
/* 
1) Store the first index value as temp.
2) Use the `shift` method to remove the first element from the array.
3) Use the `push` method to append the stored temp value to the end of the array.

*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'a'.
Constraints:
1 ≤ n ≤ 10^5
0 ≤ a[i] ≤ 10^9
*/

// Dry Run
/*Given Example: arr = [2, 3, 1, 4, 1]

Initial array: [2, 3, 1, 4, 1]

After shift: [3, 1, 4, 1, 2]

After push: [3, 1, 4, 1, 2]
*/

```