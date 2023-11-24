
// method 3 (using loops)
// Function to remove falsy values from an array
function bouncer(arr) {
  // Initialize a new array to store truthy values
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// Example usage
console.log(bouncer([7, "ate", "", false, 9]));

/* 
  Revised Logic:

  1) Initialize a new array (newArr) to store truthy values.
  2) Iterate through the elements of the input array (arr).
  3) Check if the current element is truthy (evaluates to true in a boolean context).
  4) If truthy, push the element into newArr.
  5) Return newArr containing only truthy values.
*/
