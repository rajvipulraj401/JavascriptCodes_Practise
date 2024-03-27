// Function to sum all numbers in a range
// method (using max and min method) METHOD 2
function sumAll(arr) {
  // Destructure the array into variables a and b
  const [a, b] = arr;
  // Initialize a variable sum to store the result
  let sum = 0;

  // Loop through the range from the smaller to the larger number
  for (let i = Math.min(...arr); i <= Math.max(a, b); i++) {
    // Add each number to the sum
    sum += i;
  }

  // Return the final sum
  return sum;
}

// Example usage
console.log(sumAll([1, 4]));

/* 
  Revised Logic:

  1) Initialize a variable sum to store the result.
  2) Destructure the input array into variables a and b using const [a, b] = arr.
     or directly destructure in the function parameters -> sumAll([a, b])
  3) Determine the smaller and larger numbers in the range using Math.min(...arr) and Math.max(a, b).
     (Spread operator (...) is used to handle the array elements directly.)
  4) Loop through the range from the smaller to the larger number.
  5) Add each number to the sum.
  6) Return the final sum.
*/
