// METHOD 1 (without filter or any method) 
function sym() {
  const args = [];

  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
       // console.log(arguments.length)
        // getting all the arguments array from the argument object.
  }
  

  // Helper function to find elements unique to the first array
  function findUniqueElements(arrayOne, arrayTwo) {
    const result = [];

    // 1) Using forEach loop
    // arrayOne.forEach(function (item) {
    //   if (arrayTwo.indexOf(item) === -1 && result.indexOf(item) === -1) {
    //     result.push(item);
    //   }
    // });

    // 2) Using traditional for loop
    // for (let i = 0; i < arrayOne.length; i++) {
    //   const item = arrayOne[i];
    //   if (arrayTwo.indexOf(item) === -1 && result.indexOf(item) === -1) {
    //     result.push(item);
    //   }
    // }

    // Using for...of loop
    for (let item of arrayOne) {
      if (arrayTwo.indexOf(item) === -1 && result.indexOf(item) === -1) {
        result.push(item);
      }
    }

    return result;
  }

  // Function to calculate symmetric difference
  function symDiff(arrayOne, arrayTwo) {
    return findUniqueElements(arrayOne, arrayTwo)
      .concat(findUniqueElements(arrayTwo, arrayOne));
  }

  let result = args[0];
  for (let i = 1; i < args.length; i++) {
    result = symDiff(result, args[i]);
  }

  return result;
}


console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]));

/*

Logic:
- Given multiple arrays, find the symmetric difference of all arrays.
- Symmetric difference is the set of elements that are in either of the sets but not in their intersection.

Steps:
1) Convert the arguments object to an array.
2) Define a helper function findUniqueElements to find elements unique to the first array compared to the second.
3) Define a function symDiff to calculate the symmetric difference of two arrays using the helper function.
4) Initialize the result with the first array.
5) Iterate over the remaining arrays and calculate the symmetric difference with the result.
6) Return the final result.

Dry Run:
- Given arrays: [3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]
- Convert the arguments object to an array: args = [[3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]]
- Initialize result with the first array: result = [3, 3, 3, 2, 5]
- Iterating over the remaining arrays:
  - Calculate the symmetric difference with the result:
    - symDiff([3, 3, 3, 2, 5], [2, 1, 5, 7]) => [3, 1, 7]
    - Update result: [3, 1, 7]
  - Calculate the symmetric difference with the result:
    - symDiff([3, 1, 7], [3, 4, 6, 6]) => [1, 7, 4, 6]
    - Update result: [1, 7, 4, 6]
  - Calculate the symmetric difference with the result:
    - symDiff([1, 7, 4, 6], [1, 2, 3]) => [7, 4, 6, 2, 3]
    - Update result: [7, 4, 6, 2, 3]
- Return the final result: [7, 4, 6, 2, 3]
*/
