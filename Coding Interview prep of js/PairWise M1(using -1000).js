 //"pairwise M1 WithUniqueValue"

"use strict";
function pairwise(arr, sum) {
  // Variable to store the sum of indices
  let sumIndices = 0;

  // Iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Iterate over the remaining elements to find a pair
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the sum of the current pair equals the given sum
      if (arr[i] + arr[j] == sum) {
        // Add the indices of the pair to the sumIndices
        sumIndices += i + j;
        // Mark the second element of the pair as used by assigning a unique value (-1000)
        arr[j] = -1000;
        // Break out of the inner loop to avoid reusing elements
        break;
      }
    }
  }
  // Return the sum of indices
  return sumIndices;
}

// Example: Find pairs in the array [1, 3, 2, 4] that sum up to 4 and return the sum of their indices
console.log(pairwise([1, 3, 2, 4], 4));

/*
Question:

Given an array arr, find element pairs whose sum equals the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used, it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6

Logic:
- Given an array and a sum, find all the unique pairs whose values sum to the given sum.
- Return the sum of the indices of these pairs.

Steps:
1) Initialize a variable sumIndices to store the sum of indices.
2) Iterate over each element in the array (first loop).
3) Iterate over the remaining elements to find a pair (second loop).
4) Check if the sum of the current pair equals the given sum.
5) If true, add the indices of the pair to sumIndices.
6) Mark the second element of the pair as used by assigning a unique value (-1000).
7) Break out of the inner loop to avoid reusing elements.
8) Repeat steps 2-7 until all pairs are found.
9) Return the sum of indices.
*/
