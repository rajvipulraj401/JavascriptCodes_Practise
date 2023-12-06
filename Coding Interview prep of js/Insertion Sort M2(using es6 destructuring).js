// Insertion sort function using ES6 destructuring for swapping

function insertionSort(arr) {
  const n = arr.length;

  // Iterate through the array starting from the second element
  for (let i = 1; i < n; i++) {
    // Iterate backwards to find the correct position for the current element

    for (let currentIndex = i; currentIndex > 0 && arr[currentIndex] < arr[currentIndex - 1]; currentIndex--) {

      // Swap the current element with its preceding element using destructuring
      [arr[currentIndex], arr[currentIndex - 1]] = [arr[currentIndex - 1], arr[currentIndex]];

    }
  }

  // Return the sorted array
  return arr;
}

// Example usage of insertionSort
console.log(insertionSort([14, 9, 6]));
