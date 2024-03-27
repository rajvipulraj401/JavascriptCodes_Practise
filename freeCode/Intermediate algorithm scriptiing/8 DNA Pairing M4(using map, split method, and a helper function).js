// DNA Pairing M4(using map, split method, and a helper function)

function pairElement(str) {
  // Helper function to match a DNA element with its pair
  function matchPair(char) {
    switch (char) {
      case "G":
        return ["G", "C"];
      case "C":
        return ["C", "G"];
      case "A":
        return ["A", "T"];
      case "T":
        return ["T", "A"];
      default:
        // Log an error if the character doesn't match any pair.
        console.error(`${char} is not a pair; use another character.`);
        return ["NA", "NA"];
    }
  }

  // Create an array of pairs for each DNA element
  const pairs = str.split("").map(char => matchPair(char));   //map((char)=>{)

  return pairs; // Return the array of pairs.
}

// Test the function with an example
console.log(pairElement("GCGX"));

// Logic (using map, split method, and a helper function)
/*
We are given a DNA strand represented by a string. The task is to return an array containing the pairs for each DNA element.

Pairs:
- G always pairs with C
- C always pairs with G
- A always pairs with T
- T always pairs with A

Steps:
1) Get a string as input.
2) Create a helper function matchPair(char) to match a DNA element with its pair based on a switch-case.
3) In the helper function:
   - If the character is "G," the pair is ["G", "C"].
   - If the character is "C," the pair is ["C", "G"].
   - If the character is "A," the pair is ["A", "T"].
   - If the character is "T," the pair is ["T", "A"].
   - In the default case (if the character is none of the above), an error is logged, and the pair ["NA", "NA"] is returned.
4) Create an array of pairs for each DNA element using the map method and the helper function.
5) The resulting pairs are stored in the pairs array.
6) The function returns the pairs array.

Dry Run:
- Given DNA strand: "GCGX"
- The input string is split into an array: ["G", "C", "G", "X"].
- The map function is applied to each character, using the helper function matchPair:
   - "G" maps to ["G", "C"]
   - "C" maps to ["C", "G"]
   - "G" maps to ["G", "C"]
   - "X" (default case) logs an error and maps to ["NA", "NA"].
- The final pairs array is [["G", "C"], ["C", "G"], ["G", "C"], ["NA", "NA"]].
- The result is logged to the console.
*/
