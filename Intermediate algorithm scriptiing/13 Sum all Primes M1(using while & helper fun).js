// Sum All Primes (using while loop and helper function)

// Helper function to check if a number is prime
const isPrime = function(n) {
  // Check if the number gets divided by any number from 2 to n-1, and if so, return false.
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Function to sum all prime numbers below a given number
function sumPrimes(num) {
  let sum = 0;
  // Use a while loop to iterate through numbers starting from num and decrementing until 1
  while (num > 1) {
    // Check if the current number is prime using the isPrime helper function
    if (isPrime(num)) {
      // If it is prime, add it to the sum
      sum += num;
    }
    num--;
  }

  return sum;
}

// Test the function with an example
console.log(sumPrimes(6));

/* Logic:

We are given a number, and we have to add all the prime numbers below that number. For example, sumPrimes(6) should return 10, as below 6 there are three prime numbers: 2, 3, 5.

Steps:

1) Check if a number is prime or not. If it is prime, then add that number to the sum of the prime variable.
   a) Create a helper function that will check if the number is prime or not.
   b) When the helper function returns whether the number is prime or not, add the number if the helper function returns true.
   c) Return the sum from the function.
*/

// Dry Run:

/*Given Example: sumPrimes(6)

Initial values:
num = 6
sum = 0

Iteration 1:
Check if 6 is prime (false), move to the next iteration.

Iteration 2:
Check if 5 is prime (true), add 5 to sum (sum = 5)
Decrement num: num = 4

Iteration 3:
Check if 4 is prime (false), move to the next iteration.

Iteration 4:
Check if 3 is prime (true), add 3 to sum (sum = 8)
Decrement num: num = 2

Iteration 5:
Check if 2 is prime (true), add 2 to sum (sum = 10)
Decrement num: num = 1

Exit the loop since num (1) is not greater than 1.

Final sum: 10

*/
