// Find Second Largest and Second Smallest Elements in Array (Method 2 using sort method)

// Time Complexity: O(n log n) - due to the sorting operation
// Space Complexity: O(1)

// Code
const secondLargAndMin = function(arr) {
  // Sort the array in ascending order using the sort method
  arr.sort((a, b) => a - b);
  
  // Return the second largest and second smallest elements
  return [arr[arr.length - 2], arr[1]];
}

// Test the function with an example array
const arr = [5, 3, 2, 4, 1];
console.log(secondLargAndMin(arr));

// Logic
/* 
I have given an array "a" of size 'n'.
I have to find the second largest and second smallest elements from the array.
For example:
Input: 'n' = 5, 'a' = [1, 2, 3, 4, 5]
Output: 4, 2
Explanation: The second largest element after 5 is 4, and the second smallest element after 1 is 2.
*/

// Steps
/* 
1) Sort the array in ascending order using the sort method.
2) The second largest element will be the second last element of the sorted array.
3) The second smallest element will be the second element of the sorted array.
4) Return the second largest and second smallest elements as an array.
*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'a'.
Constraints:
2 ≤ n ≤ 10^5
0 ≤ a[i] ≤ 10^9
*/

// Dry Run
/*
Given Example: arr = [5, 3, 2, 4, 1]

Sorted array: [1, 2, 3, 4, 5]

Second largest element: 4
Second smallest element: 2

Output: [4, 2]
*/
