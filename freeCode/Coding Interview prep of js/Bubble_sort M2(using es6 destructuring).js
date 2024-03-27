// Bubble Sort Algorithm - Method 2


//time complexity - worst case O(n2) and best case O(n)

// Using a loop to iterate through the array
function modifiedBubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let didSwap = 0; // tracker to check if there has been any swapping or not

    // Using another loop to traverse and compare adjacent elements
    for (let j = 0; j < array.length - 1 - i; j++) {
      // If the current element is greater than the next one, swap them using ES6 array destructuring
      if (array[j] > array[j + 1]) {
        // Swap the elements using array destructuring
        [array[j], array[j + 1]] = [array[j + 1], array[j]];

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
console.log(modifiedBubbleSort([13, 24, 9, 46, 23]));

// Logic code dry run 

/* 
Logic:
We are given an array, and the goal is to sort it using the bubble sort algorithm.

Bubble Sort - Method 2
- In this sorting, we repeatedly traverse the array, comparing and swapping adjacent elements to push the maximum to the last.
- We repeat this process until the entire array is sorted.Steps (Using provided comments):

1) Using a loop to iterate through the array.
2) Using another loop to traverse and compare adjacent elements.
3) If the current element is greater than the next one, swap them using ES6 array destructuring and set the `didSwap` tracker to 1.
   - Array Destructuring Explanation: The line below swaps the values of array[j] and array[j + 1].
     [array[j], array[j + 1]] = [array[j + 1], array[j]];
     - Right-hand side (RHS): [array[j + 1], array[j]]
        - This creates a temporary array containing two elements: array[j + 1] and array[j].
     - Left-hand side (LHS): [array[j], array[j + 1]]
        - This is the destructuring assignment syntax.
        - It says to take the values from the RHS array and assign them to the corresponding positions on the LHS array.
     - Destructuring Assignment:
        - The value at array[j + 1] on the RHS is assigned to array[j] on the LHS.
        - The value at array[j] on the RHS is assigned to array[j + 1] on the LHS.
     - Swapping:
        - This effectively swaps the values of array[j] and array[j + 1].
4) After each inner loop traversal, check if any swapping occurred (`didSwap === 1`). If yes, the largest unsorted element is moved to its correct position at the end of the array.
   - Optimization Explanation: If no swapping occurred in the inner loop, the array is already partially sorted. This optimization is especially beneficial in the best-case scenario, where the array is already sorted. It helps break out of unnecessary iterations, making the algorithm more efficient.
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
