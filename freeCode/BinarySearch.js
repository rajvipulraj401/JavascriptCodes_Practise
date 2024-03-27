"use strict";
// Binary Search

// Function to perform binary search
function bS(array, si, ei, Search) {
  // Base case: if starting index is greater than ending index, element not found
  if (si > ei) return -1;

  // Calculate mid index
  let mid = Math.floor((si + ei) / 2);

  // Check if the middle element is the search element
  if (array[mid] == Search) {
    return mid; // Element found, return its index
  } else if (array[mid] > Search) {
    // If the middle element is greater than the search element, search in the left half
    let firstHalf = bS(array, si, mid-1, Search);
    return firstHalf; // Return result of left sub-array search
  } else {
    
    return bS(array, mid + 1, ei, Search); // Return result of right sub-array search
  }
}

// Function to call binary search with initial parameters
function BinarySearch(array, Search) {
  return bS(array, 0, array.length - 1, Search);
}

// Example: Search for the element 21 in the given array [2, 6, 12, 21, 32, 42]
console.log(BinarySearch([2, 6, 12,15,21,24, 32, 42], 21));

/* 

Logic:
- In this algorithm, we search for an element in a sorted array.

Steps:
1) Check the base case: if the starting index is greater than the ending index, the element is not found.
2) Calculate the mid index.
3) Check if the middle element is equal to the search element. If yes, return the mid index.
4) If the middle element is greater than the search element, perform binary search on the left half from 0 to middle-1.
5) If the middle element is less than the search element, perform binary search on the right half from middle+1 to endIndex.
6) Recursively repeat steps 2-5 until the element is found or the base case is met.

Dry Run:
- Given array: [2, 6, 12, 21, 32, 42]
- Search element: 21
- Initial call to BinarySearch
  - Call bS function with si = 0, ei = 5, Search = 21
    - Calculate mid: 2
    - Compare array[mid] (12) with Search (21)
    - Since array[mid] < Search, call bS on the right sub-array (mid+1 to ei)
      - Call bS function with si = 3, ei = 5, Search = 21
        - Calculate mid: 4
        - Compare array[mid] (32) with Search (21)
        - Since array[mid] > Search, call bS on the left sub-array (si to mid)
          - Call bS function with si = 3, ei = 3, Search = 21
            - Check base case (si > ei) - false
            - Calculate mid: 3
            - Compare array[mid] (21) with Search (21)
            - Element found, return mid: 3
          - Return mid (result of left sub-array search): 3
        - Return mid (result of right sub-array search): 3
    - Return mid (result of right sub-array search): 3
  - Final result: Element 21 found at index 3

*/
