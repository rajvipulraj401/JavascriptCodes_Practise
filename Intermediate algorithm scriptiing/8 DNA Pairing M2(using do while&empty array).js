// DNA Pairing (using empty array and do-while)
function pairElement(str) {
  // Create an empty array to store pairs
  const pairs = [];

  // Initialize index variable for the do-while loop
  let i = 0;

  // Loop over the given string to match pairs using a do-while loop
  do {
    if (str[i] === "G") {
      pairs.push(["G", "C"]);
    } else if (str[i] === "C") {
      pairs.push(["C", "G"]);
    } else if (str[i] === "A") {
      pairs.push(["A", "T"]);
    } else if (str[i] === "T") {
      pairs.push(["T", "A"]);
    }

    // Increment the index
    i++;
  } while (i < str.length);

  return pairs;
}

// Test the function with an example
console.log(pairElement("GCG"));

// Logic (using empty array and do-while)
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
3) Initialize an index variable (i) for the do-while loop.
4) Use a do-while loop to match each letter with its pair and push it inside the pairs array.
5) Increment the index (i) after each iteration.
6) Continue the loop until the index is less than the length of the input string.
7) Return the pairs array.

Dry Run:
- Given DNA strand: "GCG"
- i = 0
  - "G" is matched with its pair "C" and pushed to pairs.
  - Increment i to 1
- i = 1
  - "C" is matched with its pair "G" and pushed to pairs.
  - Increment i to 2
- i = 2
  - "G" is matched with its pair "C" and pushed to pairs.
  - Increment i to 3
- Loop ends as i (3) is equal to the length of the input string.
- Return pairs: [["G", "C"], ["C", "G"], ["G", "C"]]
*/
