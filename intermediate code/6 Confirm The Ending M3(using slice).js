// Method 2 (using slice)
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
// Example usage
console.log(confirmEnding("Bastian", "n"));

/* 
  Logic of Method 2:
  1) Use slice method to extract the portion of the string from the difference of str.length and target.length.
  2) Compare the extracted portion with the target string.
  3) Return true if they match, indicating that the given string ends with the target string; otherwise, return false.
*/
