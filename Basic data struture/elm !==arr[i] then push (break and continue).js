
// method 4 (without using any boolean )

function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let j;
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        break; // Element found, exit the inner loop.
      }
    }
    if (j === arr[i].length) {
      newArr.push(arr[i]); // Element not found in the sub-array, add it to 'newArr'.
    }
  }
  return newArr;
}

console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));


		// Logic:
// 1) To filter out arrays that do not contain a specific element, we use two loops.
// 2) The outer loop iterates through the main array.
// 3) Inside the outer loop, we initiate the 'j' variable.
// 4) The inner loop iterates through each sub-array.
// 5) If the desired element is found within a sub-array, we use 'break' to exit the inner loop.
// 6) If 'break' is not triggered (i.e., 'j' equals 'arr[i].length'), the element was not found
//    in the current sub-array.
// 7) In this case, we add the sub-array to 'newArr' to include it in the result.
// 8) The outer loop continues until all sub-arrays are checked.
// 9) Finally, 'newArr' contains all sub-arrays that do not include the desired element.

// This code achieves the filtering without the use of a separate boolean flag by checking the value of 'j'
// to determine if the element was found in the current sub-array or not.
