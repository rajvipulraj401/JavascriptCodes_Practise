    // method 1(using another loop )

function frankenSplice(arr1, arr2, n) {
  // Create a copy of arr2 using slice to avoid modifying the original array
  const arr2New = arr2.slice();

  // Traverse each element in arr1 for splicing into arr2New
  for (let i = 0; i < arr1.length; i++) {
    // Use splice to insert the current element of arr1 at index n in arr2New
    // The parameters for splice: (start index, delete count, items to add)
    // In this case, delete count is 0, as we are not removing any elements
    arr2New.splice(n, 0, arr1[i]);

    // Increment the index n for the next insertion position in arr2New
    n++;
  }

  // Return the resulting array after all insertions
  return arr2New;
}

// Example usage
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

