function reverseString(str) {

// method 1 (using swapping)

/*
steps ->

1) since string is immutable conver it into array to mutate it and then do swapping .
  
    TRY TO USE SPLIT METHODDDDDDDDDDDDDDDDD
  */

  // console.log(str.length);

  // let strCopy = [...str];
let  strCopy = str.split("");

  for ( let i =0 ,j= strCopy.length-1 ;i<j; i++,j--){
    
  let temp = strCopy[i];
  strCopy[i] = strCopy[j];
  strCopy[j] = temp;
  }
str = strCopy.join("");
  return str;
}

console.log(reverseString("hello"));