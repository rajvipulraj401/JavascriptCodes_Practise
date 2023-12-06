// Bubble Sort Algorithm

/* Logic 
- In this sorting, we push the maximum to the last by doing adjacent swapping.
- We repeat this process until there is only one element left in the array.
*/

// Bubble Sort Algorithm
function bubbleSort(array) {
  // Using another loop to track the total number of loop traversals
  for (let j = array.length; j > 0; j--) {
    let didSwap = 0; // tracker to check if there has been any swapping or not

    // Using a loop to traverse and compare adjacent elements, then do swapping if needed
    for (let i = 0; i < j - 1; i++) {
      // If the current element is greater than the next one, swap them
      if (array[i] > array[i + 1]) {
        // Swap the elements
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        didSwap = 1; // Mark that a swap has occurred
      }
    }

    if (didSwap === 0) {
      // If no swapping occurred in the inner loop, the array is already sorted
      break;
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
3) If the current element is greater than the next one, swap them and set the `didSwap` tracker to 1.
4) After each inner loop traversal, check if any swapping occurred (`didSwap === 1`). If yes, the largest unsorted element is moved to its correct position at the end of the array.
   - Optimization Explanation: If no swapping occurred in the inner loop, the array is already partially sorted. This optimization is especially beneficial in the best-case scenario, where the array is already sorted. It helps break out of unnecessary iterations, making the algorithm more efficient.

5) Continue this process until there is only one element left in the array.

Optimization Explanation:
- The inner loop condition is `i < j - 1` for optimization purposes.
- After each pass, the largest unsorted element is already in its correct position at the end of the array.
- By using `j - 1`, we avoid unnecessary comparisons with the already sorted elements, making the algorithm more efficient.
- The `didSwap` tracker helps optimize the algorithm further. If no swapping occurred in the inner loop, the array is already sorted, and we can break out of the outer loop, saving unnecessary iterations.


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
