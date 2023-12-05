// Bubble Sort Algorithm

/* Logic 
- In this sorting, we push the maximum to the last by doing adjacent swapping.
- We repeat this process until there is only one element left in the array.
*/

function bubbleSort(array) {
  // Using another loop to track the total number of loop traversals
  for (let j = array.length; j > 0; j--) {
    // Using a loop to traverse and compare adjacent elements, then do swapping if needed
    for (let i = 0; i < j - 1; i++) {
      // If the current element is greater than the next one, swap them
      if (array[i] > array[i + 1]) {
        // Swap the elements
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
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

Bubble Sort
- In this sorting, we push the maximum to the last by doing adjacent swapping.
- We repeat this process until there is only one element left in the array.

Steps (Using provided comments):

1) Using another loop to track the total number of loop traversals.
2) Using a loop to traverse and compare adjacent elements, then do swapping if needed.
3) If the current element is greater than the next one, swap them.
4) After each loop traversal, the largest unsorted element is moved to its correct position.
5) Continue this process until there is only one element left in the array.

Optimization Explanation:
- The inner loop condition is `i < j - 1` for optimization purposes.
- After each pass, the largest unsorted element is already in its correct position at the end of the array.
- By using `j - 1`, we avoid unnecessary comparisons with the already sorted elements, making the algorithm more efficient.

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
