
//selection sort method 2 (using es6)
// Function to perform Selection Sort on an array
function selectionSort(arr) {
  // Get the length of the array
  const n = arr.length;

  // Iterate through the array
  for (let i = 0; i < n - 1; i++) {
    // Assume the current index is the minimum
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      // Check if the current element is smaller than the assumed minimum
      if (arr[j] < arr[minIndex]) {
        // Update the index of the minimum element
        minIndex = j;
      }
    }

    // Swap the found minimum element with the first element of the unsorted part
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  // Return the sorted array
  return arr;
}

// Test the function with an example array
console.log(selectionSort([13, 24, 11, 46, 23]));
