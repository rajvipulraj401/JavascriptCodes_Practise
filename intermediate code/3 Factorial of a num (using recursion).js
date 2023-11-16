// method 2 (using recursion)

function factorialize(num) {

  if (num===0){
    return 1;
  }
  else if(num===1){
return 1
  }
  let smallAns = factorialize(num-1);
  // now i have to write how to solve small problem.
  // so i think for example we want to get factorial of 5 
  // then we will do 4 ! * num 
  // so 4! *5 

  return smallAns*num;

  // return num;
}

console.log(factorialize(5));

// logic

/* 
1) if num chhota 1 se toh return num
2) agr nahi toh small num call hoga 

4,3 ,2,1
*/