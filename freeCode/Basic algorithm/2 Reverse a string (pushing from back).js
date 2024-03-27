//  METHOD 3 (by pushing it from backward)


// logic

/*
1) we will run the loop from backward and then push all the things from back to the other variable .
*/
function reverseString(str) {

  let reverse = "";

  for ( let i = str.length-1;i>=0;i--){
    reverse+= str[i];
  }
  str = reverse;
  return str;
  return reverse;
}

console.log(reverseString("hello"));