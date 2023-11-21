// Function to sum all numbers in a range
function sumAll(arr) {
  // Destructure the array into variables a and b
  const [a, b] = arr;

  // Initialize a variable sum to store the result
  let sum = 0;

  // Determine the smaller and larger numbers in the range
  const smallNo = a > b ? b : a;
  const bigNo = a > b ? a : b;

  // Loop through the range and add each number to the sum
  for (let i = smallNo; i <= bigNo; i++) {
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
  2) Destructure the input array into variables a and b.
EITHer destructure directly in function like 
sumAll([a,b]) or destructure inside .
  3) Determine the smaller and larger numbers in the range.
  4) Loop through the range from the smaller to the larger number.
  5) Add each number to the sum.
  6) Return the final sum.
*/
