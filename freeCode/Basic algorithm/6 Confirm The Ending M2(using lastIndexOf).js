	//method 2(using lastIndexOf )

function confirmEnding(str, target) {
  // Use lastIndexOf method to find the last occurrence of the target string in the given string
  // Check if the index of the last occurrence matches the calculated index based on the target's length
  return (str.lastIndexOf(target) === str.length - target.length);
}

console.log(confirmEnding("He give me name", "name"));

/*
  Explanation of Example:
  - The last index of "name" in the string "He give me name" is 11.
  - The length of the string is 15, and the length of the target ("name") is 4.
  - Calculated index based on the target's length is 15 - 4 = 11.
  - Since the last index of the target in the string matches the calculated index, the function returns true.
*/
