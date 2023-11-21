// (Seek and Destroy)
// Method 1 (using rest parameter and filter method)
function destroyer(arr, ...others) {
  // Logic:

  /*
    1) The function takes in two parameters: 'arr' (an array) and 'others' (multiple arguments accessed using the rest parameter).
    2) The rest parameter (...) allows us to include all the additional arguments passed to the function in the 'others' array.
    3) We want to remove elements specified in the 'others' array from the original 'arr' array.
    4) We can use the filter method to return a new array with elements that satisfy our boolean condition.
    5) The filter method iterates over each element (curr) in 'arr'.
    6) For each element, we check if it is not included in the 'others' array using the includes method.
    7) If the element is not included in 'others', it is retained in the filtered array.
    8) The result is a new array containing elements from 'arr' that are not present in the 'others' array.
  */

  // Use the filter method to return a new array with elements that do not match any in the 'others' array
  return arr.filter((curr) => !others.includes(curr));
}

// Example usage
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
