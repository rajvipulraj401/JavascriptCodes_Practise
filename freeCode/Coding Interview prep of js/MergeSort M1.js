			// mergeSort M1 (without any method or es6)


// function for merging two sorted array(i.e from one index to other not actually an array)
function merge( array,si ,ei){
// now here we will have to merge this two sorted array into one and for that we need an empty array and compare and copy them .
const temp =[];
let mid = Math.floor((si+ei)/2);
let i = si,j= mid+1;

 for( ; i<=mid && j<=ei;){
      // use and operator this will check for both not comma operator
    if(array[i] < array[j]){
    temp.push(array[i]);
      i++;
    }    	else{
      	temp.push(array[j]);
     	 j++;
                 }
 }
    while(i<=mid){
    temp.push(array[i]);
      i++;  
    }
    while(j<=ei){
    temp.push(array[j]);
      j++;
    }

// Now copying back the elements from temporary array to our original array.
let m =0;
for(let i = si;i<=ei;i++){
  array[i]= temp[m];
  m++;
}
      return array;
} 


// FUNCTION FOR THE MERGE sort algo 
function mSort(array ,si,ei){
// defining the base case
if(si>=ei) return;

// now recursive function on both halves
let mid =Math.floor((si+ei)/2);

 mSort(array, si ,mid);
 mSort(array,mid+1, ei);

// now we need to merge this two sorted array into one

return  merge( array ,si ,ei);

}

function mergeSort(array) {
return mSort(array, 0 , array.length-1);
  // return array; 
}
console.log(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));


/* 
  8. Merge Sort
What is Merge Sort?
Merge Sort is a divide-and-conquer sorting algorithm that works by dividing the array into two halves, recursively sorting each half, and then merging the sorted halves.

Logic
In Merge Sort, the array is repeatedly divided into halves until each sub-array contains a single element. Then, the merging process begins, where two adjacent sub-arrays are merged to produce a new sorted array.

Steps---
Given an array array and indices si (start index) and ei (end index).
Define the base case: if si >= ei, return.
Calculate the middle index mid as (si + ei) / 2.
Recursively call mergeSort on the first half: mSort(array, si, mid).
Recursively call mergeSort on the second half: mSort(array, mid + 1, ei).
Merge the two sorted halves using the merge function.


Dry Run-:

// Initial Array: [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

// Pass 1:
//   - Divide into two halves: [1, 4, 2, 8, 345, 123, 43, 32] | [5643, 63, 123, 43, 2, 55, 1, 234, 92]
//   - Recursive calls on each half
//     - Left half: [1, 4, 2, 8, 345, 123, 43, 32]
//       - Divide into two halves: [1, 4, 2, 8] | [345, 123, 43, 32]
//       - Recursive calls on each half
//         - Left half: [1, 4, 2, 8]
//           - Divide into two halves: [1, 4] | [2, 8]
//           - Recursive calls on each half
//             - Left half: [1, 4] - base case, no change
//             - Right half: [2, 8] - base case, no change
//           - Merge [1, 4] and [2, 8] -> [1, 2, 4, 8]
//         - Right half: [345, 123, 43, 32] - further recursive calls
//           - ... (similar process as above)
//           - Final merged result: [32, 43, 123, 345]
//       - Merge [1, 2, 4, 8] and [32, 43, 123, 345] -> [1, 2, 4, 8, 32, 43, 123, 345]
//     - Right half: [5643, 63, 123, 43, 2, 55, 1, 234, 92] - further recursive calls
//       - ... (similar process as above)
//       - Final merged result: [1, 2, 43, 55, 63, 92, 123, 234, 5643]
//   - Merge [1, 2, 4, 8, 32, 43, 123, 345] and [1, 2, 43, 55, 63, 92, 123, 234, 5643]
//     -> [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]

// Final Sorted Array: [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]




*/