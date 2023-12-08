// 7 Search and replace (Method 2 using replace method)

function myReplace(str, before, after) {
  // Check if the first letter of the before word is capital or not.
  if (before[0] === before[0].toUpperCase()) {
    // If capital, make the first letter of the new word also capital and add remaining letters.
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    // If not capital, make the first letter of the new word also in lowercase and concatenate the remaining letters.
    after = after[0].toLowerCase() + after.substring(1);
  }

  // Replace the before word with the after word using the replace method.
  str = str.replace(before, after);
  return str;
}

// Test the function with an example
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

/* Logic (Using provided comments):

I have given a sentence and two words, one is the before word that is present in the original sentence, and the other word which we are given is the word that we have to put in place of the before word.

Steps (Method 2 using the replace method):

1) Check if the first letter of the before word is capital or not.
  a) If it is capital:
     - Make the first letter of the new word also capital.
     - Add the remaining letters using the slice or substring method.
  b) If it is not capital:
     - Make the first letter of the new word also in lowercase.
     - Concatenate the remaining letters using the slice or substring method.

2) Replace the before word with the after word using the replace method.

3) Copy the `str.replace` value in `str` and return the string.
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
