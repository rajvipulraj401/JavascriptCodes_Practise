// Method 1: Using a loop to find the sum of odd Fibonacci numbers
function findSumOddFibs(num) {
  let a = 0;
  let b = 1;
  let c = a + b;
  let sum = 0;

  // Loop until a is less than or equal to num
  while (a <= num) {
    // Check if a is odd, then add it to the sum
    if (a % 2 === 1) {
      sum += a;
    }
    // Update values for the next iteration
    a = b;
    b = c;
    c = a + b;
  }
  return sum;
}
// Example usage
console.log(findSumOddFibs(75025)); // Output: 135721

// Logic for Method 1:

/* 
  Given a positive num, return the sum of all odd Fibonacci numbers less than num.
  For example, if num is 4, the Fibonacci numbers less than 4 are 1, 1, and 3, so the sum is 5.

  1) Use a loop to iterate through Fibonacci numbers.
  2) Start with a = 0, b = 1, and c = a + b.
  3) Initialize sum = 0.
  4) Check if a is odd; if true, add it to the sum. ( BS CHECK KR RHE HAI A KO aur kuch nahi samgho bs seedha seedha check ho rha hai ) 
  5) Update values for the next Fibonacci numbers.
  6) Repeat the process until a is less than or equal to num.
*/
