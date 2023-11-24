function chunkArrayInGroups(arr, size) {
  let result = [];

  // Loop until the main array is not empty
  while (arr.length > 0) {
    // Push a chunk of the specified size into the result array using splice
    result.push(arr.splice(0, size));
  }

  // Return the final result array
  return result;
}

/* 
  Revised Logic (with Splice):

  1) Initialize an empty array (result) to store the result.
  2) Loop until the main array is not empty.
  3) Inside the loop, push a chunk of the specified size into the result array using the splice method.
  4) The splice method extracts elements from the main array, starting from index 0, up to the specified size.
  5) Repeat the process until the main array is empty.
  6) Return the final result array.
*/

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
