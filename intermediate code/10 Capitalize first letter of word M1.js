// Method 1 (Original Logic)
function titleCase(str) {
  // Split the string into an array of words
  const newTitle = str.split(" ");

  // Initialize an empty array to store the modified words
  const updatedTitle = [];

  // Iterate through each word in the array
  for (let i = 0; i < newTitle.length; i++) {
    // Capitalize the first letter and make the rest lowercase for each word
    updatedTitle[i] = newTitle[i][0].toUpperCase() + newTitle[i].slice(1).toLowerCase();
  }

  // Join the modified words back into a string
  return updatedTitle.join(" ");
}

// Example usage
console.log(titleCase("I'm a little tea pot"));

/* 
  Original Logic (Method 1):

  1) Split the string into an array of words.
  2) Initialize an empty array (updatedTitle) to store the modified words.
  3) Iterate through each word in the array.
  4) For each word, capitalize the first letter and make the rest lowercase.
  5) Store the modified word in the updatedTitle array.
  6) Join the modified words back into a string using the join method.
*/
