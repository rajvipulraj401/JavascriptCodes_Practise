// // method 3 (without any method)
// function filteredArray(arr, elem) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//    let flag = false;
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] === elem) {
//        flag = true;
//         break;
//       }
//     }
//    if (!flag) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2));
//           // logic 

		// Logic:
// 1) To filter out arrays that do not contain a specific element, we use two loops.
// 2) We initialize a boolean flag to 'false' to track if the element is found.
// 3) The outer loop iterates through the main array.
// 4) Inside the outer loop, the inner loop iterates through each sub-array.
// 5) If the desired element is found within a sub-array, we set the flag to 'true'.
// 6) Using 'break,' we exit the inner loop, as the element is already found in the sub-array.
// 7) If the flag remains 'false' after the inner loop completes, it means the element
//    was not found in the current sub-array.
// 8) In this case, the sub-array is added to the 'newArr' to include it in the result.
// 9) The outer loop continues until all sub-arrays are checked.
// 10) Finally, 'newArr' contains all sub-arrays that do not include the desired element.

// The boolean flag is essential because it allows us to keep track of whether
// the element was found in the inner loop. Without the flag, we could use 'break'
// and 'continue' to control the loop, but it would make it more challenging to
// determine if the element was found in the current sub-array or not.
