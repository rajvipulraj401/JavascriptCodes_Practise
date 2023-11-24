// METHOD 2 (using sorting and indexof method)

function getIndexToIns(arr, num) {
  // Create a copy of the array and sort it
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Find the index where the first element is greater than or equal to num
  const index = sortedArr.findIndex((currentValue) => currentValue >= num);

  // If no such element is found, set the index to the length of the array
  return index === -1 ? sortedArr.length : index;
}

// Test cases
console.log(getIndexToIns([5, 3, 20, 3], 5));  // Should return 2 (index 2, 20 is the first element greater than or equal to 5)
console.log(getIndexToIns([2, 5, 10], 15));     // Should return 3 (index 3, no element is greater than or equal to 15)
console.log(getIndexToIns([], 1));              // Should return 0 (index 0, the array is empty)

/* 
  Logic:

  1) Create a copy of the array (sortedArr) using slice method to avoid mutating the original array.
  2) Sort the copied array in ascending order.
  3) Find the index where the first element in the sorted array is greater than or equal to num.
  4) If no such element is found, set the index to the length of the array.
  5) Return the calculated index.
*/
