```javascript
// twoSum BruteForce

// Time Complexity: O(n^2)
// Space Complexity: O(1)
    
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}

// Logic
/* 
1) Loop through the array and check for each pair if their sum equals the target.
2) If found, return the indices of the pair.
3) Since it's mentioned that there will be exactly one solution, we can assume there's only one valid answer.
*/

// Steps
/* 
1) Start a loop to iterate through the array from the first element to the second last element.
2) Inside the loop, start another loop to iterate through the array from the next element to the last element.
3) For each pair of elements, check if their sum equals the target.
4) If the sum equals the target, return the indices of the pair.
5) If no pair is found after the loops, return null or an empty array to indicate no solution.
*/

// Test the function with an example array
const arr = [3, 2, 4];
console.log(twoSum(arr, 4));

// Constraints
/* 
-10^5 <= nums[i] <= 10^5
2 <= nums.length <= 10^4
Only one valid answer exists.
-2 * 10^5 <= target <= 2 * 10^5

Time Limit: 1 sec
*/

// Dry Run
/*
Given Example: arr = [3, 2, 4], target = 4

Iteration 1:
i = 0, j = 1
nums[0] + nums[1] = 3 + 2 = 5 ≠ 4

Iteration 2:
i = 0, j = 2
nums[0] + nums[2] = 3 + 4 = 7 ≠ 4

Iteration 3:
i = 1, j = 2
nums[1] + nums[2] = 2 + 4 = 6 ≠ 4

Output: [1, 2]
*/
```