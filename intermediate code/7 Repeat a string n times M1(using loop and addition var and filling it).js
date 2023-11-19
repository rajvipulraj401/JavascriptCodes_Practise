
// Function to repeat a given string a specified number of times

function repeatStringNumTimes(str, num) {
  // If the specified number is less than 1, return an empty string
  if (num < 1) {
    return "";
  }

  // Initialize a new string to accumulate repeated copies of the original string
  let newStr = "";

  // Use a loop to concatenate the original string to the new string 'num' times
  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  // Return the accumulated string
  return newStr;
}

// Example usage
const ans = repeatStringNumTimes("abc", 3);
console.log(ans);

/* 
  Logic of repeatStringNumTimes Function:
  1) Check if the specified number is less than 1; if true, return an empty string.
  2) Initialize a new string to accumulate repeated copies of the original string.
  3) Use a loop to concatenate the original string to the new string 'num' times.
  4) Return the accumulated string.
*/

// Dry Run:
/*
  num = 3
  str = "abc"
  i = 0

  1st iteration: newStr = "abc" (concatenate str to newStr)
  2nd iteration: newStr = "abcabc" (concatenate str to newStr)
  3rd iteration: newStr = "abcabcabc" (concatenate str to newStr)

  Final result: "abcabcabc"
*/
