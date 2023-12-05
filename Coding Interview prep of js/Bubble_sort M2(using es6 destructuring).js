// Bubble Sort Algorithm - Method 2

/* Logic 
- In this sorting, we repeatedly traverse the array, comparing and swapping adjacent elements to push the maximum to the last.
- We repeat this process until the entire array is sorted.
*/

function bubbleSort(array) {
  // Using a loop to iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Using another loop to traverse and compare adjacent elements
    for (let j = 0; j < array.length - 1 - i; j++) {
      // If the current element is greater than the next one, swap them using ES6 array destructuring
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Using ES6 array destructuring to swap
    }
  }

  // Return the sorted array
  return array;
}

// Test the function with an example array
console.log(bubbleSort([13, 24, 9, 46, 23]));

// Logic code dry run 

/* 
Logic:
We are given an array, and the goal is to sort it using the bubble sort algorithm.

Bubble Sort - Method 2
- In this sorting, we repeatedly traverse the array, comparing and swapping adjacent elements to push the maximum to the last.
- We repeat this process until the entire array is sorted.

Steps (Using provided comments):

1) Using a loop to iterate through the array.
2) Using another loop to traverse and compare adjacent elements.
3) If the current element is greater than the next one, swap them using ES6 array destructuring.
4) After each inner loop traversal, the largest unsorted element is moved to its correct position at the end of the array.
5) Continue this process until the entire array is sorted.

Example:
Input: [13, 24, 9, 46, 23]

Pass 1:
  Compare and swap 13 with 24 -> [13, 9, 24, 23, 46]
  Compare and swap 24 with 9 -> [13, 9, 23, 24, 46]
  Compare and swap 24 with 23 -> [13, 9, 23, 24, 46]
  Compare and swap 24 with 46 -> [13, 9, 23, 24, 46]

Pass 2:
  Compare and swap 13 with 9 -> [9, 13, 23, 24, 46]
  Compare and swap 13 with 23 -> [9, 13, 23, 24, 46]
  Compare and swap 23 with 24 -> [9, 13, 23, 24, 46]

Pass 3:
  Compare and swap 9 with 13 -> [9, 13, 23, 24, 46]
  Compare and swap 13 with 23 -> [9, 13, 23, 24, 46]

Pass 4:
  Compare and swap 9 with 13 -> [9, 13, 23, 24, 46]

Final Sorted Array: [9, 13, 23, 24, 46]
*/