  // method 1
function truncateString(str, num) {
  if (str.length > num){
    return str.slice(0, num) +"...";
  }
  else{
  return str;
  }
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// logic
/* 
  Logic of Method 1:
  1) Check the length of the string.
  2) If the length is greater than the specified num:
      - Use slice method to extract a portion of the string (from start to num). (end index excluded)
      - Concatenate "..." to the extracted portion.
      - Return the result.
  3) If the length is not greater, return the original string.
*/

// Dry Run:
/*
  Given string: "A-tisket a-tasket A green and yellow basket"
  Specified num: 8

  Result: "A-tisket..."
*/