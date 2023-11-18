// method 2
function largestOfFour(arr) {
  return arr.map(function(group) {
    // group is the current element which is the sub array in main array
    return group.reduce(function(prev, current) {
      return current > prev ? current : prev;
    },group[0]);
  });
}
const ans =largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

console.log(ans);

// logic
      // In this code:
/* 
// - We map all items within the main array to a new array using Array.prototype.map().
// - Within each inner array, we use Array.prototype.reduce() to reduce its contents to a single value.
// - The callback function passed to the reduce method takes the previous value and the current value, comparing the two.
// - If the current value is higher than the previous value, it becomes the new previous value for further comparison with the next item within the array.
// - The result is returned to the map method callback if it's the last item in the inner array.
// - The final mapped array, containing the maximum values from each inner array, is returned as the result.

*/