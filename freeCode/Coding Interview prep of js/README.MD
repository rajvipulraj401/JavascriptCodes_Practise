# Sorting Algorithms in JavaScript

## 1. Bubble Sort

Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### Steps (Using provided comments):

1. Using another loop to track the total number of loop traversals.
2. Using a loop to traverse and compare adjacent elements, then do swapping if needed.
3. If the current element is greater than the next one, swap them and set the `didSwap` tracker to 1.
4. After each inner loop traversal, check if any swapping occurred (`didSwap === 1`). If yes, the largest unsorted element is moved to its correct position at the end of the array.

   - Optimization Explanation: If no swapping occurred in the inner loop, the array is already partially sorted. This optimization is especially beneficial in the best-case scenario, where the array is already sorted. It helps break out of unnecessary iterations, making the algorithm more efficient.

5. Continue this process until there is only one element left in the array.

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

1. Using a loop to iterate through the array.
2. Using another loop to traverse and compare adjacent elements.
3. If the current element is greater than the next one, swap them using ES6 array destructuring and set the `didSwap` tracker to 1.
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
4. After each inner loop traversal, check if any swapping occurred (`didSwap === 1`). If yes, the largest unsorted element is moved to its correct position at the end of the array.
   - Optimization Explanation: If no swapping occurred in the inner loop, the array is already partially sorted. This optimization is especially beneficial in the best-case scenario, where the array is already sorted. It helps break out of unnecessary iterations, making the algorithm more efficient.
5. Continue this process until the entire array is sorted.

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

## 5. Insertion Sort (method 1)

## Notes

It is a sorting process where we take an element and place it in its correct position in the array.

## Logic

In this sorting process:

- We iterate through the array, starting from the second index (`i = 1`) as the first element is considered sorted.
- For each element, we compare it with the preceding elements and swap if necessary to place it in its correct sorted position.
- This process continues until the entire array is traversed, and each element is in its appropriate position.

## Steps

1. Initialize a loop to iterate through the array, starting from the second index (`i = 1`) as the first element is considered sorted.

2. Set `currentIndex` to the current loop index `i`.

3. Enter a while loop that continues as long as `currentIndex` is greater than 0 and the element at `arr[currentIndex]` is smaller than the element at `arr[currentIndex - 1]`.

4. Within the while loop:

   - Swap the current element with its preceding element.
   - Move to the preceding index for the next comparison by decrementing `currentIndex`.

5. Continue the outer loop until the entire array is traversed, and each element is placed in its correct sorted position.

## Dry Run

Initial Array: [14, 9, 6]

Pass 1:
Current Element: 9 (at index 1)
Compare 9 with 14 (at index 0), swap them -> [9, 14, 6]

Pass 2:
Current Element: 6 (at index 2)
Compare 6 with 14 (at index 1), swap them -> [9, 6, 14]
Compare 6 with 9 (at index 0), swap them -> [6, 9, 14]

Final Sorted Array: [6, 9, 14]

## 6. Insertion Sort (method 2 using ES6 Destructuring for Swapping)

## Notes

What is an Insertion Sort?
It is a sorting process where each element is taken and placed in its correct position in the array.

## Logic

In this sorting process:

- We iterate through the array, starting from the second index (`i = 1`) as the first element is considered sorted.
- For each element, we compare it with the preceding elements and swap if necessary to place it in its correct sorted position.
- This process continues until the entire array is traversed, and each element is in its appropriate position.

## Steps

1. Initialize a loop to iterate through the array, starting from the second index (`i = 1`) as the first element is considered sorted.

2. For each element, set `minIndex` to the current loop index `i`.

3. Enter a loop that continues as long as `minIndex` is greater than 0 and the element at `arr[minIndex]` is smaller than the element at `arr[minIndex - 1]`.

4. Within the loop:

   - Swap the current element with its preceding element using ES6 array destructuring.
   - Move to the preceding index for the next comparison by decrementing `minIndex`.

5. Continue the outer loop until the entire array is traversed, and each element is placed in its correct sorted position.

## Dry Run

Initial Array: [14, 9, 6]

Pass 1:
Current Element: 9 (at index 1)
Compare 9 with 14 (at index 0), swap them -> [9, 14, 6]

Pass 2:
Current Element: 6 (at index 2)
Compare 6 with 14 (at index 1), swap them -> [9, 6, 14]
Compare 6 with 9 (at index 0), swap them -> [6, 9, 14]

Final Sorted Array: [6, 9, 14]

## 7. Quick Sort

### What is Quick Sort?

Quick Sort is a divide-and-conquer sorting algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

### Logic

In Quick Sort, the steps involve selecting a pivot, placing it in its correct position in the array, and then recursively sorting the sub-arrays on either side of the pivot.

### Steps

1. Given an array `arr` and indices `si` (start index) and `ei` (end index).
2. Check if `si >= ei`, if true, return.
3. Call a partition function to place the pivot element at its correct position and return its index.
4. Recursively call Quick Sort on the left sub-array (`si` to `Pindx - 1`) and the right sub-array (`Pindx + 1` to `ei`).

### Pseudocode

```javascript
function quickSort(arr, si, ei) {
  if (si >= ei) {
    return;
  }
  let Pindx = partition(arr, si, ei);
  quickSort(arr, si, Pindx - 1);
  quickSort(arr, Pindx + 1, ei);
}

// Call quickSort with the entire array initially:
// quickSort(arr, 0, arr.length - 1);
```

### Dry Run

```javascript
// Given array: [23, 8, 345, 4, 2]
// Step 1: Initial call to quickSort
//   - si = 0, ei = 4
//   - Call quickSort function

// quickSort(arr, 0, 4)
//   - Check if si (0) is less than ei (4) - true
//   - Call partition function
//     - Select pivot (x) as arr[0] = 23
//     - Initialize countSmallElm = 0
//     - Iterate from si+1 (1) to ei (4)
//       - Compare elements and increment countSmallElm for elements <= pivot
//     - Swap pivot to its correct position: [8, 4, 2, 23, 345]
//     - Iterate to ensure left elements <= pivot and right elements > pivot
//   - Call quickSort on left and right sub-arrays
//     - Left sub-array (si = 0, pindx - 1 = 2)
//       - Call quickSort function
//         - Check if si < ei - true
//         - Call partition
//           - Select pivot as arr[0] = 8
//           - ... (similar steps as above)
//           - Final left sub-array: [4, 2, 8]
//         - Recursively call quickSort on left and right sub-arrays
//     - Right sub-array (pindx + 1 = 4, ei = 4)
//       - Call quickSort function
//         - Check if si < ei - false (base case, return)
//   - Final sorted array: [2, 4, 8, 23, 345]
// End of Dry Run
```

### Complexity

- **Time Complexity**: Best Case - O(n log n), Average Case - O(n log n), Worst Case - O(n^2)
- **Space Complexity**: O(log n) - Recursive stack space.
