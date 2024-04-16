// Pair Sum (Method 1 Brute Force)

/* 
Time Complexity: O(n^2)
Space Complexity: O(1)
*/ 

// Code

const pairSum = function(arr, sum) {
  // We get an array 'arr' and a sum 'sum'
  const pairs = [];
  
  // Check if the array has less than 2 elements
  if (arr.length <= 1) return pairs;

  // Sort the array
  arr.sort((a, b) => a - b);
  
  // Initialize an empty array to store pairs
  const arr1 = [];

  // Iterate through the array to find pairs
  for (let i = 0; i < arr.length - 1; i++) {
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] + arr[i]=== sum) {
        arr1.push([arr[i], arr[j]]);
      }
    }
  }
  
  return arr1;
}

// Test the function with an example array
const arr = [2, 2, 2, 3, 2];
console.log(pairSum(arr, 4));


// // Logic-----------------------
// /* 
// In a given array we have to return all the pairs that equal to the sum S  and each value should be sorted
// that means the first value will be smaller than the second value We have to return the list
// of all pairs in ascending order The pair with the smaller first value will come first and if the value is similar
// then the pair whose second value is smaller will come first..
// For example:
// Sample Input 1:
// 5 5
// 1 2 3 4 5
// Sample Output 1:
// 1 4
// 2 3
// */

// Steps :--

/* 
1) Sort the array in ascending order.
2) Iterate through the array to find pairs whose sum equals the target sum.
3) While iterating, store pairs in an array.
4) Return the array containing all pairs whose sum equals the target sum.
*/


//  Constraints
/* 
-10^5 <= arr[i] <= 10^5
2 <= arr.length <= 104
-2 * 10^5 <= sum <= 2 * 10^5

Time Limit: 1 sec
*/

// Dry Run
/*
Given Example: arr = [2, 2, 2, 3, 2], sum = 4

Sorted array: [2, 2, 2, 2, 3]

Iteration 1:
firstPair = 2, arr[j] = 2
2 + 2 = 4 (sum)
Push [2, 2] to arr1

Iteration 2:
firstPair = 2, arr[j] = 2
2 + 2 = 4 (sum)
Push [2, 2] to arr1

Iteration 3:
firstPair = 2, arr[j] = 2
2 + 2 = 4 (sum)
Push [2, 2] to arr1

Iteration 4:
firstPair = 2, arr[j] = 3
2 + 3 ≠ 4 (sum)

Output: [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]]
*/





