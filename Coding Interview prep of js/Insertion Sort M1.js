
function insertionSort(arr) {

//time complexity - worst case O(n2) and best case O(n)

  let n = arr.length;

for ( let i=1; i<n;i++){
  let currentIndex= i;
  

 
/* NOW SEE we have to keep comparing the current index until it reaches it's correct position so for that we need another loop , what we can do is save currentIndex as a variable and we keep a while loop which  will be running until our currentIndex is greater than 0 and also till arr[currIndex]<arr[currentIndex-1])

 AND then WE CAN do the swapping in the loop .*/




while (currentIndex > 0 && arr[currentIndex] < arr[currentIndex - 1]) {
      // Swap the current element with its preceding element
      let temp = arr[currentIndex];
      arr[currentIndex] = arr[currentIndex - 1];
      arr[currentIndex - 1] = temp;

      // Move to the preceding index for the next comparison
      currentIndex--;
    }
 
}

  return arr;
}
console.log(insertionSort([14,9,6]))

