 // method 2
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


/* 
  Logic of Method 2:
  - Use a ternary operator to check if the length of the string is greater than the specified num.
  - If true, use slice method to extract a portion of the string (from start to num) and concatenate with "..."
  - If false, return the original string.
*/

// Dry Run:
/*
  Given string: "A-tisket a-tasket A green and yellow basket"
  Specified num: 8

  Result: "A-tisket..."
*/