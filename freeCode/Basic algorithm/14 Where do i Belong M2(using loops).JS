function getIndexToIns(arr, num) {
  let indexPlacer = 0;
if(arr.length<1){
  return 0;

  // handling edge cases 
}

else{

  // i should start the indexing from 0 only as we only want to tell where does it actually belong 
  for (let i=0;i<arr.length ;i++){
    if (arr[i]<num){
      indexPlacer ++;
    }
  }
}

  return indexPlacer;
}

console.log(getIndexToIns([40, 60], 50));

// logic  

/* 

1) i am getting an array and a number i have to see that the number i am getting should be greater than certain number and lesser than certain number so that i can place it there.


steps - create a variable indexPlacer to find the actual index;
      - then return the indexPlacer
*/

