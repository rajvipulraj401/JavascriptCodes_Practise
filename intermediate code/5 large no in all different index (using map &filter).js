// method 2
// function largestOfFour(arr) {
//   return arr.map(function(group) {
//     // group is the current element which is the sub array in main array
//     return group.reduce(function(prev, current) {
//       return current > prev ? current : prev;
//     },group[0]);
//   });
// }
// const ans =largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// console.log(ans);

// second practise

function largestOfFour(arr) {
  return arr.map(
    (curr) =>
      // we use map method to go at every index and return new array with the maximum of each sub array.

      curr.reduce((acc, current) => (acc > current ? acc : current), curr[0])
    // we set accumulator to the first index of every sub array which is curr as set in map method.
    // we use reduce method to find maximum of each subarray.
  );
  // return arr;
}

const ans = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);

console.log(ans);
