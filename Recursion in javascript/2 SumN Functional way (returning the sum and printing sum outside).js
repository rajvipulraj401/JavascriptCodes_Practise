// Time complexity O(n), Space complexity O(n).

// 4) Sum of First N numbers (using recursion) Functional way (returning the sum and printing sum outside)

function sumN(n) {
  if (n === 0) return 0;
  // base case

  // Print first, then call for the small cases using recursion
  return n + sumN(n - 1);
  // In this way, I am doing the work after I am getting the recursive result.
}

console.log(sumN(4));


/* Explanation:

The function sumN takes a parameter n.
If n becomes 0, it returns 0 (base case).
In each recursive call, the current value of n is added to the sum of the smaller case (sumN(n - 1)).
The final result is the sum of the first n natural numbers.
The console.log(sumN(4)) prints the sum, which is 10 for n = 4.*/