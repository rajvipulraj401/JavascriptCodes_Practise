// 1 Diff two Array (using loop & Helper Fun)

function diffArray(arr1, arr2) {
  const newArr = [];

  // Helper function to find unique elements in arr1 compared to arrComp
  const uniqueFinder = function (arr1, arrComp) {
    for (let i = 0; i < arr1.length; i++) {
      // Check if the element at index i in arr1 is not present in arrComp
      if (!arrComp.includes(arr1[i])) {
        // If not present, push the element to newArr
        newArr.push(arr1[i]);
      }
    }
  };
  // Find unique elements in arr1 compared to arr2
  uniqueFinder(arr1, arr2);

  // Find unique elements in arr2 compared to arr1
  uniqueFinder(arr2, arr1);

  // Return the final array containing unique elements
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
// Logic:

/* 
    1) Two arrays are compared against each other.

    2) First, we check if there is any element in arr1 that is not present in arr2.
       If found, push it to the newArr since it is a unique element.

    3) Similarly, we compare arr2 to arr1, checking for elements in arr2 that are not in arr1.
       Again, push those unique elements to newArr.
  */
