```javascript
// Find if array is sorted or not (Method 1 optimal)

// Time Complexity: O(n)
// Space Complexity: O(1)

// Code
const isSorted = function(a) {
  for (let i = 1; i < a.length; i++) {
    if (a[i] < a[i - 1]) {
      return 0;
    }
  }
  return 1;
}

// Test the function with an example array
const arr = [2, 3, 1, 4, 1];
console.log(isSorted(arr));

// Logic
/* 
I have given an array "a" of size 'n', and I need to check if the array is sorted in non-decreasing order (increasing order).
If the array is sorted, return 1; otherwise, return 0.
*/

// Steps
/* 
1) Iterate through the array starting from the second element.
2) For each element, check if it is less than the previous element.
3) If any element is less than the previous one, return 0 (not sorted).
4) If the loop completes without returning 0, return 1 (sorted).

*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'a'.
Constraints:
1 ≤ n ≤ 10^5
0 ≤ a[i] ≤ 10^9
*/

// Dry Run
/*
Given Example: arr = [2, 3, 1, 4, 1]

Iteration 1:
a[1] = 3, a[0] = 2
3 is not less than 2, continue.

Iteration 2:
a[2] = 1, a[1] = 3
1 is less than 3, return 0.

Output: 0
*/
```