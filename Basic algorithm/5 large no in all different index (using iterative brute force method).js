// Method 1 (using iterative brute force method)

// Logic of Method 1:
/*
    0) Create an empty array to store the maximum values.
    1) Iterate through each sub-array in the given array.
    2) For each sub-array, initialize a max variable with the first value (index 0).
    3) Compare the max variable with each subsequent value in the sub-array.
    4) Update the max variable if a greater value is found.
    5) After checking all values in the sub-array, push the final max value into the empty array.
    6) Repeat this process for all sub-arrays.
    7) Return the array containing the maximum values for each sub-array.
*/



function largestOfFour(arr) {
    let maxArray = [];
    for (let i = 0; i < arr.length; i++) {
        let maxValue = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maxValue) {
                maxValue = arr[i][j];
            }
        }
        maxArray.push(maxValue);
    }
    return maxArray;
}

// Example usage
const ans = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(ans);