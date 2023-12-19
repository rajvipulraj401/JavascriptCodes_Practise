function quickSort(array) {

let si = 0 ,ei = array.length-1;

// calling the qs functiion .
 qS(array , si ,ei);
return array;
}

// function to do quickSort
function qS(arr, si,ei){

if(si>=ei) return ;

let pindx = partition (arr ,si ,ei);
qS(arr, si ,pindx -1);
qS(arr, pindx +1, ei);


}

// function to partition around the first index Element choosen at random .
function partition(arr, si ,ei){

let x = arr[si];
// selecting pivot element (an element which is selected first by the algorithm)

let countSmallElm = 0;
// variable to count the no of elements smaller than our pivot element .

// putting out pivot element at its correct position.(also i should be si+1 because at si the pivot element is there)
for(let i =si+1; i<=ei;i++){
  if(arr[i]<=x)
  countSmallElm  ++;
}

//now let's swap the x element to its original posiiton .
let temp = arr[si];
arr[si] = arr[si+countSmallElm ];
arr[si+countSmallElm ] = temp;


// now we have to insure if all elements on (x) left side are less than or equal to it .

// and also all the element on the right side are greater than our (x) element.

let i = si , j= ei;
while(i<si+countSmallElm  && j>si+countSmallElm ){

if(arr[i]<=x){
  i++;
}
else if( arr[j]>x){
  j--;
}
else{
// we will swap both of them .

let tempNew = arr[i];
arr[i] = arr[j];
arr[j] = tempNew;
}


}

return si+countSmallElm ;
// returning the index of pivot element(x)



// variable to count the  no of elements which are smaller than th element

}

console.log(quickSort([23,8,345,4 ,2 ,123,43]));




/* 
  Logic --In quick sort we pick the first element and put it to its right place and then on its left side we place all the elements which are smaller or equal than that first element and similartly on the right side we place all the elements which are larger than it.
 And then we recursively call quick sort on its left and then on its right side .

  Steps -

  1) we get an array and a si , ei 
  2) we check if si>=ei if so we return .
  3) and if not we call a partition function which place the pivot element at its correct position and return its index as well as place all the elements smaller than pivot element to its left and all the elements larger than pivot to its right .
  4) we do that by swapping them and comparing them.
  5) and then we come back and call qS on left side and then on right side and then finally we return the array.


  pseuod Code-


qS(arr, si ,ei)
(si>=ei)
return;
Pindx = partition(si,ei);
qS(arr,si,Pindx-1):
qS(arr,Pindx+1 ,ei);


  Dry Run --

  // Dry Run:
// Given array: [23, 8, 345, 4, 2]
// Step 1: Initial call to quickSort
//   - si = 0, ei = 4
//   - Call qS function

// qS(arr, 0, 4)
//   - Check if si (0) is less than ei (4) - true
//   - Call partition function
//     - Select pivot (x) as arr[0] = 23
//     - Initialize countSmallElm = 0
//     - Iterate from si+1 (1) to ei (4)
//       - Compare elements and increment countSmallElm for elements <= pivot
//     - Swap pivot to its correct position: [8, 4, 2, 23, 345]
//     - Iterate to ensure left elements <= pivot and right elements > pivot
//   - Call qS on left and right sub-arrays
//     - Left sub-array (si = 0, pindx - 1 = 2)
//       - Call qS function
//         - Check if si < ei - true
//         - Call partition
//           - Select pivot as arr[0] = 8
//           - ... (similar steps as above)
//           - Final left sub-array: [4, 2, 8]
//         - Recursively call qS on left and right sub-arrays
//     - Right sub-array (pindx + 1 = 4, ei = 4)
//       - Call qS function
//         - Check if si < ei - false (base case, return)
//   - Final sorted array: [2, 4, 8, 23, 345]
// End of Dry Run


*/