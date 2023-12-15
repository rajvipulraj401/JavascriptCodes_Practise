//  DNA Pairing (using empty array and SwitchCase);
function pairElement(str) {

// let's create an empty array to store all the small pairs.
const pairs = [];

// now let's loop over the given string in order to match all the pairs one by one .

for (let i=0 ;i<str.length ;i++){

switch (str[i]){
// kispe swich case lagana hai str[i] pr 

case "G":
// agr case g hua toh kya
 pairs.push(["G","C"]);
 break;

case "C":
  pairs.push(["C","G"]);
  break;

case "A":
  pairs.push(["A","T"]);
  break;

case "T":
  pairs.push(["T","A"]);
  break;  

  default :
  pairs.push(["NA","NA"]);
  console.log(`${str[i]} Nota pair use other`);
  break;

  }

}

  return pairs;
}

console.log(pairElement("GCGX"));

// Logic (using empty array and Switch-Case)
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
3) Loop over each element in the input string.
4) Use a switch-case to match each letter with its pair and push it inside the pairs array.
5) If the character doesn't match any specified case, log a warning and continue to the next iteration.
6) Return the pairs array.

Dry Run:
- Given DNA strand: "GCG"
- i = 0
  - "G" matches with its pair "C" and is pushed to pairs.
- i = 1
  - "C" matches with its pair "G" and is pushed to pairs.
- i = 2
  - "G" matches with its pair "C" and is pushed to pairs.
- Loop ends as i (2) is equal to the length of the input string.
- Return pairs: [["G", "C"], ["C", "G"], ["G", "C"]]
*/