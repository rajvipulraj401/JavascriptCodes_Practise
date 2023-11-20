
function countdown(n){

  // first lets write base case

  if (n<1){
    return [];
    // return empty array .
  }
  else{
    // now i want to see how to interact with slighter smaller value
    //and then get to the result with that .
    const smallAns = countdown(n-1);
    // now lets start filling the array from starting instead of pushing from behind .

    smallAns.unshift(n);
      return smallAns;
  }
}


// Recursion 

// logic ,code ,dry run 

/* 

1)  base case , 
2) i have to return 5 ,4,3,2,1 for countdown(5) in reverse manner.
 */