// Find Second Largest and Second Smallest Elements in Array (Method 1 Brute force)

// Time Complexity: O(n log n) +O(n) +O(n) - due to the sorting operation 
/* Note - The time complexity can be improved slightly for larger 
data set if we just do it in single function pass without two function but the 
readability will be bad so instead just opt for the optimal case tell in the interview
*/
// Space Complexity: O(1)

// Code

const secondSmallest = function(arr){
 const smallest = arr[0];
 for (let i = 0;i<arr.length-1;i++ ){
  if (arr[i]>smallest)
  return arr[i];
 }
 return -1;
}

const secondLargest = function(arr){
 const largest = arr[arr.length-1];
 for (let i = arr.length-2 ; i >= 0 ;i-- ){
  if (arr[i]<largest)
  return arr[i];
 }
 return -1;
}


const secondLargAndMin = function(arr) {

if(arr.length<=1){
// cause if there are just one element  then it can't be compared and also in case of empty
return arr }
 // Sort the array in ascending order using the sort method
  arr.sort((a, b) => a - b);
  
 const secondSmall= secondSmallest(arr);
 const secondLarge= secondLargest(arr);
 return [secondSmall, secondLarge];
 // return {secondLarge,secondSmall};
 // the above will make return like this in output 
 // making it a property inside an object by same name and assigning the value
 // { secondLarge: -1, secondSmall: -1 }

}


// Test the function with an example array
// const arr = [5, 1 ,1, 2, 5, 1];
const arr = [1, 1 ,1, 1, 1, 1];
console.log(secondLargAndMin(arr));


// Logic
/* 
I have given an array "a" of size 'n'.
I have to find the second largest and second smallest elements from the array.
For example:
Input: 'n' = 5, 'a' = [1, 2, 3, 4, 5]
Output: 4, 2

Logic Explanation :-- We will sort the array 
then we will call secondSmallest function and secondLargest function and get the value
of both of them and then return them.
*/

// Steps
/* 
1) Sort the array in ascending order using the sort method.
2) Then call the secondSmallest function and return the first element which is larger than
the smallest else just return -1 
3) Then call the secondLargest function and return the first element which is smaller than
the largest else just return -1 
4) Return the second largest and second smallest elements as an array.
*/

// Constraints
/* 
Expected Time Complexity: O(n), where 'n' is the size of the input array 'a'.
Constraints:
2 ≤ n ≤ 10^5
0 ≤ a[i] ≤ 10^9
*/

// Dry Run
/*
Given Example: arr = [5, 3, 2, 4, 1]

Sorted array: [1, 2, 3, 4, 5]

Second largest element: 4
Second smallest element: 2

Output: [4, 2]
*/
