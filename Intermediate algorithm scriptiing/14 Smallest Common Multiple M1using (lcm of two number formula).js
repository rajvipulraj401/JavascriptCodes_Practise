
// Smallest Common Multiple M1using (lcm of two number formula)


// Function to find the HCF of two numbers using repeated division
function hcf(a, b) {
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a; // Return the HCF
}

// Function to find the LCM of two numbers
function lcm(a, b) {
  return (a * b) / hcf(a, b);
}

// Function to find the LCM of an array of numbers
function smallestCommons(arr) {

  let smallno = Math.min(...arr);
  let bigno = arr[0] >arr[1]?arr[0]:arr[1];
  for(let i =1;i<bigno-smallno;i++){
    arr.push(smallno+i);
  }
  console.log(arr);

  let multiple = arr[0]; // Initialize the multiple with the first element

  for (let i = 1; i < arr.length; i++) {
    multiple = lcm(multiple, arr[i]); // Update the multiple with the LCM of the current element
  }

  return multiple; // Return the final multiple
}

console.log(smallestCommons([1, 5]));


// Logic:

// Given a range specified by an array [a, b], including both a and b, 
// the task is to find the Least Common Multiple (LCM) of all numbers within this range.

// Steps:
// 1) Initialize 'smallno' as the minimum value in the array.
// 2) Initialize 'bigno' as the maximum value in the array.
// 3) Loop through numbers between 'smallno' and 'bigno' and push each number to the array.
// 4) Initialize 'multiple' with the first element of the array.
// 5) Loop through the rest of the array.
//    a) For each element, go inside the lcm function.
//    b) Inside the lcm function, go inside the hcf function.
//        - Initialize a loop that continues until b becomes zero.
//        - Calculate the remainder when a is divided by b.
//        - Update a with the value of b, and b with the remainder.
//        - Repeat the process until b becomes zero.
//        - The last non-zero remainder is the HCF, return it.
//    c) Utilize the HCF to find the LCM: (current element * multiple) / HCF.
//    d) Update 'multiple' with the calculated LCM.
// 6) Continue this process until all elements are processed.
// 7) Return the final calculated LCM.




// Dry Run:
// Given array: [21, 19]
// 1) Initialize 'smallno' as 19 and 'bigno' as 21.
// 2) Loop from 1 to 1 and push each number to the array: [19, 20].
// 3) Initialize 'multiple' with the first element, i.e., 19.
// 4) Loop starts with i = 1:
//    - Update 'multiple' with the LCM of 19 and 20 (lcm(19, 20) = 380):
//      - Step 1: Utilize the HCF function to find the HCF of 19 and 20 (hcf(19, 20) = 1).
//      - Step 2: Calculate the LCM using the formula: (19 * 20) / 1 = 380.
//    - Update 'multiple' with the LCM of 380 and 21 (lcm(380, 21) = 7980):
//      - Step 1: Utilize the HCF function to find the HCF of 380 and 21 (hcf(380, 21) = 1).
//      - Step 2: Calculate the LCM using the formula: (380 * 21) / 1 = 7980.
// 5) End of loop, return the final 'multiple': 7980.


// dry run for hcf function
// Dry Run:
// Given numbers: a = 48, b = 18
// a = 48, b = 18 -> 48 % 18 = 12 (remainder), a = 18, b = 12
// a = 18, b = 12 -> 18 % 12 = 6 (remainder), a = 12, b = 6
// a = 12, b = 6 -> 12 % 6 = 0 (remainder), a = 6, b = 0
// Loop ends as b becomes zero.
// The last non-zero remainder is 6, which is the HCF.
// Return HCF: 6