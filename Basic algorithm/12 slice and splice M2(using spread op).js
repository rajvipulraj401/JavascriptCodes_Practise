


///METHOD 2 

function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 using slice to avoid modifying the original array
  let localArr = arr2.slice();

  // Use splice to insert the elements of arr1 into localArr starting at index n
  // The parameters for splice: (start index, delete count, items to add)
  // In this case, delete count is 0, as we are not removing any elements
  // Use the spread operator (...) to insert each element of arr1 individually

  localArr.splice(n, 0, ...arr1);

  // Return the resulting array after all insertions
  return localArr;
}

// Example usage
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

/* 
  Revised Logic:

  1) Create a copy of arr2 using the slice method to prevent modifying the original array.
  2) Use splice to insert the elements of arr1 into localArr starting at index n.
     - The parameters for splice: (start index, delete count, items to add).
     - In this case, delete count is 0, as we are not removing any elements.
     - Use the spread operator (...) to insert each element of arr1 individually.
  3) Return the resulting array after all insertions.
*/

