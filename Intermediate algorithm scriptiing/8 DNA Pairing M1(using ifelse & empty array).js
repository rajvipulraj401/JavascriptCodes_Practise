// DNA Pairing (using empty array and if-else)
function pairElement(str) {
  // Create an empty array to store pairs
  const pairs = [];

  // Loop over the given string to match pairs
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "G") {
      pairs.push(["G", "C"]);
    } else if (str[i] === "C") {
      pairs.push(["C", "G"]);
    } else if (str[i] === "A") {
      pairs.push(["A", "T"]);
    } else if (str[i] === "T") {
      pairs.push(["T", "A"]);
    }
  }

  return pairs;
}

// Test the function with an example
console.log(pairElement("GCG"));

// Logic (using empty array and if-else)
/*
We are given a DNA strand represented by a string. The task is to return an array containing the pairs for each DNA element.

Pairs:
- G always pairs with C
- C always pairs with G
- A always pairs with T
- T always pairs with A

Steps:
1) Get a string as input.
2) Create an empty array to store pairs (pairs).
3) Loop over each character in the input string.
4) Use if-else conditions to match each letter with its pair and push it inside the pairs array.
5) Return the pairs array.

Dry Run:
- Given DNA strand: "GCG"
- Loop 1: "G" is matched with its pair "C" and pushed to pairs.
- Loop 2: "C" is matched with its pair "G" and pushed to pairs.
- Loop 3: "G" is matched with its pair "C" and pushed to pairs.
- Return pairs: [["G", "C"], ["C", "G"], ["G", "C"]]
*/
