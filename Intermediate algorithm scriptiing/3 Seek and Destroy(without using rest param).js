// (Seek and Destroy)
// Method 2 (without using rest parameter)


function destroyer(arr) {
  // Retrieve additional arguments (others) using the 'arguments' object
  // const others = Array.from(arguments).slice(1);
  const others = [...arguments].slice(1);

  // Logic:

  /*
    1) The function takes in one parameter: 'arr' (an array).
    2) Retrieve additional arguments (others) using the 'arguments' object and convert it to an array.
    3) Use the slice method to exclude the first element (which is 'arr') from the 'others' array.
    4) We want to remove elements specified in the 'others' array from the original 'arr' array.
    5) We can use the filter method to return a new array with elements that satisfy our boolean condition.
    6) The filter method iterates over each element (curr) in 'arr'.
    7) For each element, we check if it is not included in the 'others' array using the includes method.
    8) If the element is not included in 'others', it is retained in the filtered array.
    9) The result is a new array containing elements from 'arr' that are not present in the 'others' array.
  */

  // Use the filter method to return a new array with elements that do not match any in the 'others' array
  return arr.filter((curr) => !others.includes(curr));
}

// Example usage
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
