// TranslatePigLatin (without any method)

function translatePigLatin(str) {
  // Define an array of vowels for checking
  const vowels = ["a", "e", "i", "o", "u"];

  // Check if the first character is a vowel
  const firstIsVowel = vowels.includes(str[0]);

  if (firstIsVowel) {
    // If the first character is a vowel, add "way" to the end
    return str + "way";
  } else {
    // If the first character is a consonant, find the consonant cluster
    let i = 0;
    let consonantCluster = "";

    // Keep checking characters until a vowel is found
    while (i < str.length) {
      if (!vowels.includes(str[i])) {
        consonantCluster += str[i];
      } else {
        break;
      }
      i++;
    }

    // Concatenate the remaining string after the consonant cluster and add "ay"
    return str.slice(i) + consonantCluster + "ay";
  }
}

// Test the function with an example
// console.log(translatePigLatin("glwove"));
console.log(translatePigLatin("rhythm"));

// Logic (without any method)

/* 
I will be given a word, and I have to check if the word begins with a consonant.
If it does, I will take out the first consonant, move it to the end of the word, and add "ay" to it.
This means we will keep checking until the word starts with a vowel. 
At last, add "ay" to it.

If the word starts with a vowel, just add "way" at the end.

Steps:
1) Let's make a vowel array that contains all the vowels to check if the first character is a vowel or not.
2) Check if the first character is a vowel. If it is, add "way" to the end and return the new string.
3) If it is not a vowel, slice out the first word and check the remaining word again. If it is again
   a consonant, keep checking until a vowel is found and then add "ay" to the end.
*/

// Dry Run
/*
Initial Word: "rhythm"

1) Check if the first character "r" is a vowel (false).
2) Since the first character is a consonant, find the consonant cluster.
   a) Add "r" to the consonant cluster.
   b) Move to the next character "h" (another consonant), add it to the cluster.
   c) Move to the next character "y" (another consonant), add it to the cluster.
3) After the while loop, consonantCluster = "rhy"
4) Concatenate the remaining string after the consonant cluster ("thm") and add "ay".
5) Return the translated Pig Latin word: "ythmrhay"
*/
