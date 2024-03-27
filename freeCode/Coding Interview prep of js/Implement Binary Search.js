"use strict";
// Binary Search 

// Function to perform binary search and return the path
function bS(array, si, ei, Search, path) {
  // Base case: if starting index is greater than ending index, value not found
  if (si > ei) return "Value Not Found";

  // Calculate mid index
  let mid = Math.floor((si + ei) / 2);

  // Add the current element to the path
  path.push(array[mid]);

  // Check if the middle element is the search element
  if (array[mid] == Search) {
    return path; // Element found, return the path
  } else if (array[mid] > Search) {
    // If the middle element is greater than the search element, search in the left half
    let firstHalf = bS(array, si, mid - 1, Search, path);
    return firstHalf; // Return result of left sub-array search
  } else {
    // If the middle element is less than the search element, search in the right half
    return bS(array, mid + 1, ei, Search, path); // Return result of right sub-array search
  }
}

// Function to call binary search with initial parameters
function binarySearch(array, Search) {
  // Initialize an empty path array
  const path = [];
  // Call bS function with initial parameters and empty path
  return bS(array, 0, array.length - 1, Search, path);
}

// Example: Search for the element 0 in the given sorted array
console.log(binarySearch([0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70], 0));

/* 

Logic:
- Binary Search is a searching algorithm used to find an element in a sorted array.

Steps:
1) Check the base case: if the starting index is greater than the ending index, the value is not found.
2) Calculate the mid index.
3) Add the current element to the path.
4) Check if the middle element is equal to the search element. If yes, return the path.
5) If the middle element is greater than the search element, perform binary search on the left half.
6) If the middle element is less than the search element, perform binary search on the right half.
7) Recursively repeat steps 2-6 until the element is found or the base case is met.


PseudoCode-------

bS(array, si, ei, Search, path) {
if (si > ei) return "Value Not Found";
mid = floor((si + ei) / 2);
path.push(array[mid]);
if (array[mid] == Search) return path;
else if (array[mid] > Search) return bS(array, si, mid - 1, Search, path);
else return bS(array, mid + 1, ei, Search, path);
}

binarySearch(array, Search) {
path = [];
return bS(array, 0, array.length - 1, Search, path);
}



Dry Run:
- Given sorted array: [0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 49, 70]
- Search element: 0
- Initial call to binarySearch
  - Call bS function with si = 0, ei = 23, Search = 0, and an empty path
    - Calculate mid: 11
    - Add array[mid] (13) to the path
    - Since array[mid] > Search, call bS on the left sub-array (si to mid-1)
      - Call bS function with si = 0, ei = 10, Search = 0, and path [13]
        - Calculate mid: 5
        - Add array[mid] (5) to the path
        - Since array[mid] > Search, call bS on the left sub-array (si to mid-1)
          - Call bS function with si = 0, ei = 4, Search = 0, and path [13, 5]
            - Calculate mid: 2
            - Add array[mid] (2) to the path
            - Since array[mid] > Search, call bS on the left sub-array (si to mid-1)
              - Call bS function with si = 0, ei = 1, Search = 0, and path [13, 5, 2]
                - Calculate mid: 0
                - Add array[mid] (0) to the path
                - Element found, return path [13, 5, 2, 0]
              - Return path [13, 5, 2, 0]
            - Return path [13, 5, 2, 0]
          - Return path [13, 5, 2, 0]
        - Return path [13, 5, 2, 0]
      - Return path [13, 5, 2, 0]
    - Return path [13, 5, 2, 0]
  - Final result: Element 0 found, path [13, 5, 2, 0]



 */
