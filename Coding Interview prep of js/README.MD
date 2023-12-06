# Sorting Algorithms in JavaScript

## 1. Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Steps (Using provided comments):

1) Using another loop to track the total number of loop traversals.
2) Using a loop to traverse and compare adjacent elements, then do swapping if needed.
3) If the current element is greater than the next one, swap them and set the `didSwap` tracker to 1.
4) After each inner loop traversal, check if any swapping occurred (`didSwap === 1`). If yes, the largest unsorted element is moved to its correct position at the end of the array.
   - Optimization Explanation: If no swapping occurred in the inner loop, the array is already partially sorted. This optimization is especially beneficial in the best-case scenario, where the array is already sorted. It helps break out of unnecessary iterations, making the algorithm more efficient.

5) Continue this process until there is only one element left in the array.

### Optimization Explanation:
- The inner loop condition is `i < j - 1` for optimization purposes.
- After each pass, the largest unsorted element is already in its correct position at the end of the array.
- By using `j - 1`, we avoid unnecessary comparisons with the already sorted elements, making the algorithm more efficient.
- The `didSwap` tracker helps optimize the algorithm further. If no swapping occurred in the inner loop, the array is already sorted, and we can break out of the outer loop, saving unnecessary iterations.


### Example:
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


## 2. Bubble Sort - Method 2

Bubble Sort Method 2 is another implementation of the Bubble Sort algorithm. It repeatedly traverses the array, comparing and swapping adjacent elements to push the maximum to the last. This process is repeated until the entire array is sorted.

### Steps (Using provided comments):

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

### Example:
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




## 3. Selection Sort Algorithm (Method 1)

## What is Selection Sort?

Selection Sort is a sorting algorithm that works by repeatedly selecting the minimum element from the unsorted part of the array and placing it at the beginning. This process is repeated until the entire array is sorted.

## Logic

The goal is to sort an array using the Selection Sort algorithm.

## Steps

1. **Loop through the array:** Use a loop to iterate through the array.
   
2. **Initialize variables:** Declare `min` and `minIndex` and initialize them with the first element. Update these variables in each iteration.
   
3. **Find the minimum:** Use another loop (`j` from `i+1`) to find the minimum element in the remaining unsorted array.
   
4. **Swap elements:** Check if the current element is less than the minimum. If true, swap the elements and update `min` and `minIndex`.
   
5. **Place minimum at the beginning:** After each iteration, the minimum is placed at the starting index of the remaining unsorted array.
   
6. **Repeat until sorted:** Continue this process until the entire array is sorted.

## Dry Run

**Initial Array:** [13, 24, 11, 46, 23]

**Pass 1:**
  - Minimum: 11 (at index 2)
  - Swap 13 and 11 -> [11, 24, 13, 46, 23]

**Pass 2:**
  - Minimum: 13 (at index 2)
  - Swap 24 and 13 -> [11, 13, 24, 46, 23]

**Pass 3:**
  - Minimum: 23 (at index 4)
  - Swap 46 and 23 -> [11, 13, 24, 23, 46]

**Pass 4:**
  - Minimum: 24 (at index 2)
  - Swap 24 and 24 (no change)

**Final Sorted Array:** [11, 13, 23, 24, 46]


## 4. Selection Sort Algorithm (Method 2 using destructuring for swapping)

## What is Selection Sort?

Selection Sort is a sorting algorithm that works by repeatedly selecting the minimum element from the unsorted part of the array and placing it at the beginning. This process is repeated until the entire array is sorted.

## Logic

The goal is to sort an array using the Selection Sort algorithm.

## Steps

1. **Loop through the array:** Use a loop to iterate through the array.
   
2. **Initialize variables:** Declare `minIndex` and initialize it with the current index `i`.
   
3. **Find the minimum:** Use another loop (`j` from `i+1`) to find the minimum element in the remaining unsorted array.
   
4. **Swap elements using destructuring:** Check if the current element is less than the minimum. If true, swap the elements using array destructuring.
   
5. **Repeat until sorted:** Continue this process until the entire array is sorted.

## Dry Run

**Initial Array:** [13, 24, 11, 46, 23]

**Pass 1:**
  - Minimum: 11 (at index 2)
  - Swap 13 and 11 -> [11, 24, 13, 46, 23]

**Pass 2:**
  - Minimum: 13 (at index 2)
  - Swap 24 and 13 -> [11, 13, 24, 46, 23]

**Pass 3:**
  - Minimum: 23 (at index 4)
  - Swap 46 and 23 -> [11, 13, 24, 23, 46]

**Pass 4:**
  - Minimum: 24 (at index 2)
  - Swap 24 and 24 (no change)

**Final Sorted Array:** [11, 13, 23, 24, 46]




