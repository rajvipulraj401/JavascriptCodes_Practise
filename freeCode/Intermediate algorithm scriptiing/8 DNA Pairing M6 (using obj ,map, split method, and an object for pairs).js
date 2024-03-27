// DNA Pairing M6 (using map, split method, and an object for pairs)

function pairElement(str) {
  // Object to store DNA pairs
  const pairsObj = { G: "C", C: "G", A: "T", T: "A" };

  // Create an array of pairs for each DNA element
  const pairs = str.split("").map((char) => [char, pairsObj[char]]);

  return pairs; // Return the array of pairs.
}

console.log(pairElement("GCX"));

// Logic (using map, split method, and an object for pairs)
/*
We are given a DNA strand represented by a string. The task is to return an array containing the pairs for each DNA element.

Pairs:
- G always pairs with C
- C always pairs with G
- A always pairs with T
- T always pairs with A

Steps:
1) Get a string as input.
2) Create an object pairsObj to store DNA pairs.
3) Define pairings in pairsObj: G-C, C-G, A-T, T-A.
4) Create an array of pairs for each DNA element using the map method and pairsObj.
5) The resulting pairs are stored in the pairs array.
6) The function returns the pairs array.

Dry Run:
- Given DNA strand: "GCG"
- The input string is split into an array: ["G", "C", "G"].
- The map function is applied to each character, using the pairsObj object:
   - "G" maps to ["G", "C"]
   - "C" maps to ["C", "G"]
   - "G" maps to ["G", "C"]
- The final pairs array is [["G", "C"], ["C", "G"], ["G", "C"]].
- The result is logged to the console.
*/
