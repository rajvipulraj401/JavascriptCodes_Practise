// function bouncer(arr) {
// const falsy = [false, null,0,"","undefinded",NaN];

// // let's use filter method to return only truth value array(method1)

// return arr.filter(function(curr){
// return (!curr === false);
// // only truthy value will return;
// });

//   // return arr;
// }


// // to remove all the falsy boouncer from the array .

// console.log(bouncer([7, "ate", "", false, 9]));


// // method 2 (same thing but more optimized)

// function bouncer(arr) {
//   // Use the filter method to create a new array containing only truthy values

//    // Return the array containing only truthy values
//   return arr.filter(function(curr) {
//     // The callback function returns true for truthy values and false for falsy values
//     return curr;
//   });
// //  return arr.filter((curr)=> curr);
// }

// // Test the function with an example array
// console.log(bouncer([7, "ate", "", false, 9]));

// /*
//   Explanation:
//   1. The filter method is used on the input array 'arr'.
//   2. The filter callback function is executed for each element 'curr' in 'arr'.
//   3. The callback function returns true for truthy values and false for falsy values.
//   4. The resulting array 'truthyValues' contains only truthy values.
//   5. The 'truthyValues' array is returned.
// */

