// 12 Sum All Odd Fibonacci Numbers (Method 1)

function sumFibs(num) {
  let a = 0;
  let b = 1;
  let c = a + b;
  let sum = 0;

  while (a <= num) {
    if (a % 2 === 1) {
      sum += a;
    }
    a = b;
    b = c;
    c = a + b;
  }

  return sum;
}

// Test the function with an example
console.log(sumFibs(4));

/* Logic (Using provided comments):

I have given a number 4, so the Fibonacci sequence is like this: 0, 1, 1, 2, 3, 5, and 8.
I need to find the sum of all the odd numbers that are less than or equal to the given number. 
For example, if I get the number 4, I have to find the sum of all the odd Fibonacci numbers that are less than or equal to that number. 
So, 1 + 1 + 3 = 5.

Steps (Method 1 using loops):

1) Let's consider how the Fibonacci numbers work. We have the 1st number and the 2nd number, and the 3rd number is formed from the sum of the previous two numbers.

2) Set up 4 variables: a, b, c.
   - a = 0
   - b = 1
   - c = a + b
   We also have a sum variable initialized to 0 to keep incrementing it by the next odd number that is lower than or equal to the given number.

3) Inside a loop, keep checking if a is less than or equal to the given num. Inside the loop, use an if statement to check if a is an odd number. If it is, increment the sum by the odd number.

*/ 

// Dry run
/*
Given Example: sumFibs(4)

Initial values:
a = 0
b = 1
c = 1
sum = 0

Iteration 1:
a = 1 (odd) => Increment sum by 1 (sum = 1)
Update a, b, and c: a = 1, b = 1, c = 2

Iteration 2:
a = 1 (odd) => Increment sum by 1 (sum = 2)
Update a, b, and c: a = 1, b = 2, c = 3

Iteration 3:
a = 2 (even)
Update a, b, and c: a = 2, b = 3, c = 5

Iteration 4:
a = 3 (odd) => Increment sum by 3 (sum = 5)
Update a, b, and c: a = 3, b = 5, c = 8

Iteration 5:
a = 5 (odd) => Increment sum by 5 (sum = 10)
Update a, b, and c: a = 5, b = 8, c = 13

Final sum: 10
*/
