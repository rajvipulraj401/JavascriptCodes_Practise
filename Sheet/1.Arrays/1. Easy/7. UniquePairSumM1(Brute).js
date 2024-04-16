// Pair Sum (Method 1 Brute Force Solution)

/* 
Time Complexity: O(n^2)
Space Complexity: O(n)

*/ 
// Code

const pairSum = function(arr, sum){
  // we will get an array and a sum
  
  const pairs = [];
     
  // creating an extra array to store pairs.
  
  if(arr.length<=1) return pairs;
  
    arr.sort((a, b) => a - b);
 
  
  
 // Iterate through the array to find pairs
  for (let i = 0; i < arr.length - 1; i++) {
    
    // Skip duplicates
    
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    
    // Store the first number of the pair
    let firstNum = arr[i];
    // Iterate through the remaining elements of the array
    for (let j = i + 1; j < arr.length; j++) {
      
      // Skip duplicates
      
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      
      // Store the second number of the pair
      
      let secondNum = arr[j];
     
      // Check if the pair's sum equals the given sum
      
      if (firstNum + secondNum === sum) {
      
        pairs.push([firstNum, secondNum]);
        
      }
    }
  }

  return pairs;
}

// Test the function with an example array
const arr = [2, -2, -3, 3, 3, -2];
console.log(pairSum(arr, 0));


// Logic
/* 
Given an array 'arr' and a target sum 'sum', we need to find all pairs in the array whose sum equals the target sum.
Each pair should be sorted in ascending order. If there are duplicates, skip them to avoid duplicate pairs in the result.

For example:
Sample Input 1:
5 5
1 2 3 4 5
Sample Output 1:
1 4
2 3
*/


/*

// Steps :--

/* 
1) Sort the array in ascending order.
2) Iterate through the array to find pairs whose sum equals the target sum.
3) While iterating, skip duplicates to avoid duplicate pairs in the result.
4) If a pair is found, add it to the result array.
5) Return the result array containing all pairs whose sum equals the target sum.
*/


// Constraints
/* 
1 <= N <= 10^3
-10^5 <= ARR[i] <= 10^5
-2 * 10^5 <= S <= 2 * 10^5

Time Limit: 1 sec
*/

// Dry Run
/*
Given Example: arr = [2, -2, -3, 3, 3, -2], sum = 0

Sorted array: [-3, -2, -2, 2, 3, 3]

Iteration 1:
firstNum = -3, secondNum = -2
-3 + (-2) = -5 ≠ 0 => Continue

Iteration 2:
firstNum = -3, secondNum = 2
-3 + 2 = -1 ≠ 0 => Continue

Iteration 3:
firstNum = -3, secondNum = 3
-3 + 3 = 0 => Push [firstNum, secondNum] to pairs => pairs = [[-3, 3]]

Iteration 4:
firstNum = -2, secondNum = 2
-2 + 2 = 0 => Push [firstNum, secondNum] to pairs => pairs = [[-3, 3], [-2, 2]]

Iteration 5:
firstNum = 3, secondNum = -2
3 + (-2) = 1 ≠ 0 => Continue

Output: [[-3, 3], [-2, 2]]
*/