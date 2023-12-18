// MERGE sort method 2 (using custom merger function)

function merger(arr1, arr2) {
  // Given two sorted arrays, the function merges them into a single sorted array.
  // It uses pointers 'i' and 'j' to traverse arr1 and arr2, respectively.
  // The merged result is stored in the array 'mergedArr'.

  let i = 0,
    j = 0,
    mergedArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      mergedArr.push(arr2[j++]);
    } else {
      mergedArr.push(arr1[i++]);
    }
  }

  // If either array is not fully traversed, copy the remaining elements.
  while (i < arr1.length) {
    mergedArr.push(arr1[i++]);
  }

  while (j < arr2.length) {
    mergedArr.push(arr2[j++]);
  }

  return mergedArr;
}

function mergeSort(array) {
  // Logic:
  // Given an array, the task is to sort it in ascending order using the mergeSort algorithm.

  // Steps:
  // 1) If the array has only one element, return the same array.
  // 2) Divide the array into two halves: left and right.
  // 3) Recursively apply mergeSort to the left and right halves.
  // 4) Merge the two sorted halves using the custom 'merger' function.
  // 5) Return the merged and sorted array.

  // PseudoCode:
  /*
  merger(arr1, arr2) {
    let i = 0,
      j = 0,
      mergedArr = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] > arr2[j]) {
        mergedArr.push(arr2[j++]);
      } else {
        mergedArr.push(arr1[i++]);
      }
    }

    while (i < arr1.length) {
      mergedArr.push(arr1[i++]);
    }

    while (j < arr2.length) {
      mergedArr.push(arr2[j++]);
    }

    return mergedArr;
  }

  mergeSort(array) {
    if (array.length <= 1) return array;

    let middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Merge the two sorted halves using the custom 'merger' function.
    return merger(mergeSort(left), mergeSort(right));
  }
  */

  // Dry Run:
  // - Given array: [2, 4, 7, 8, 4, 6, 1]
  // - The array is divided into two parts: [2, 4, 7] and [8, 4, 6, 1].
  // - mergeSort is called recursively for both parts:
  //   - Left part: [2, 4, 7] -> divided into [2] and [4, 7] -> merged into [2, 4, 7].
  //   - Right part: [8, 4, 6, 1] -> divided into [8, 4] and [6, 1] -> merged into [4, 6, 1, 8].
  // - Finally, the two sorted parts [2, 4, 7] and [4, 6, 1, 8] are merged into the sorted array [2, 4, 4, 6, 1, 7, 8].

  // Code:
  if (array.length <= 1) return array;

  let middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Merge the two sorted halves using the custom 'merger' function.
  return merger(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([2, 4, 7, 8, 4, 6, 1]));
