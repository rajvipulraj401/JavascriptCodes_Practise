// 4.1) Sum of First N numbers (using recursion) Parameterized way (printing the sum inside fun)

function sumN(n, sum) {
  if (n === 0) {
    console.log(sum);
    // print the sum when n==0 and return sum 
    return sum;
  } 
  // base case

  sum = sum + n;
  return sumN(n - 1, sum);

  // now make the recursive call where you add n to the sum variable and send the sum in the recursive call
}

sumN(4, 0);



/* 
Explanation:

The function sumN takes two parameters n and sum.
If n becomes 0, it prints the sum and returns it.
In each recursive call, the current value of n is added to the sum.
The function is called with n-1 and the updated sum.
In this example, sumN(4, 0) prints the sum of the first 4 natural numbers, which is 10.
*/
