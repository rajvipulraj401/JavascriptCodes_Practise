// 7 Search and replace (Method 1 using loops (without replace method))
function myReplace(str, before, after) {
  // Convert the string into an array of words using split method.
  const newStr = str.split(" ");

  // Check if the first letter of the before word is capital or not.
  if (before[0] === before[0].toUpperCase()) {
    // If capital, make the first letter of the new word also capital and add remaining letters.
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    // If not capital, make the first letter of the new word also in lowercase and concatenate the remaining letters.
    after = after[0].toLowerCase() + after.substring(1);
  }

  // Replace the before word with the after word.

  // Find index of the before word in the newStr.
  const index = newStr.indexOf(before);

  // Change the value at that index in newStr.
  newStr[index] = after;

  // Now use the join method to join newStr and copy it back to the original string.
  str = newStr.join(" ");

  return str;
}

// Test the function with an example
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/* Logic (Using provided comments):

I have given a sentence and two words, one is the before word that is present in the original sentence, and the other word which we are given is the word that we have to put in place of the before word.

Steps (Method 1 using loops (without replace method)):

0) Let's convert the string into an array of words so that each word is at each index using the split method.

1) Check if the first letter of the before word is capital or not.
  a) If it is capital:
     - Make the first letter of the new word also capital.
     - Add the remaining letters using the slice or substring method.
  b) If it is not capital:
     - Make the first letter of the new word also in lowercase.
     - Concatenate the remaining letters using the slice or substring method.

2) Now to replace the before word with the after word, we find the index of the before word in the str using indexOf.

3) Go to that index and change the element at that index.

4) Use the join method to join it back and then return the string.
*/

// Dry run
/*
Initial Sentence: "A quick brown fox jumped over the lazy dog"
Before Word: "jumped"
After Word: "leaped"

1) Check if the first letter of "jumped" is capital (true).
   a) "leaped" becomes "L" + "eaped" -> "Leaped"

2) Replace "jumped" with "Leaped" in the sentence.
   - Result: "A quick brown fox Leaped over the lazy dog"

3) Return the modified sentence: "A quick brown fox Leaped over the lazy dog"
*/
