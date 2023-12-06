// Selection Sort Algorithm (method 1)
/* Notes 
 What is a selection sort?

 It is a sorting process where we select the minimum out of the entire array and place it at the starting index and swap.
 In the next iteration, we select the minimum from the second index till the end and then repeat the step when there is only one element left in the array.
*/

/* Logic - we have to sort this array using selection sort */

/* Steps (Using provided comments):

1) Using a loop to iterate through the array.
2) Declaring `min` and `minIndex` as the first element and updating them in each iteration.
3) Another loop (`j` from `i+1`) to find the minimum in the remaining array.
4) Check if the current element is less than the minimum. If so, swap it and update `min` and `minIndex`.
5) After each iteration, the minimum is placed at the starting index of the remaining unsorted array.
6) Continue this process until the entire array is sorted.
*/

// Code
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) { // no need to to check the last element only till 3rd index when length=5
    let min = array[i];
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      // Check if the current element is less than the minimum, if so, swap it
      if (array[j] < min) {
        // Update the min value and minIndex value
        min = array[j];
        minIndex = j;
        let temp = array[i];
        array[i] = min;
        array[j] = temp;
      }
    }
  }

  return array;
}

// Test the function with an example array
console.log(selectionSort([13, 24, 11, 46, 23]));

/* Dry run 

Initial Array: [13, 24, 11, 46, 23]

Pass 1:
  Minimum: 11 (at index 2)
  Swap 13 and 11 -> [11, 24, 13, 46, 23]

Pass 2:
  Minimum: 13 (at index 2)
  Swap 24 and 13 -> [11, 13, 24, 46, 23]

Pass 3:
  Minimum: 23 (at index 4)
  Swap 46 and 23 -> [11, 13, 24, 23, 46]

Pass 4:
  Minimum: 24 (at index 2)
  Swap 24 and 24 (no change)

Final Sorted Array: [11, 13, 23, 24, 46]
*/
