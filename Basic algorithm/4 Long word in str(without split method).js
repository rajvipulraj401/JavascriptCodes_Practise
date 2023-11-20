      // method 2 (without split method)

// lets make a word lenght counter function.

function wordLength(startIndex=0, endIndex){
  return (endIndex-startIndex)+1;
}


function findLongestWordLength(str) {

// keeping a maxLength variable to cal max Length ;
let maxLength  =0;


// let's run a loop on this whole str

let startInd =0;
let endInd =0;
for ( let i=0; i<=str.length;i++){

if(str[i]===" "||i===str.length){
  endInd=i-1;
  let length =wordLength(startInd,endInd);

  if(maxLength<length){
    maxLength = length;
  }

  startInd = i+1;
}


}

  
  return maxLength;
}

const ans =findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

console.log(ans);







// Method 2 (without using split method)

/*
    Logic:

    1) Iterate over the string to check the length of each word.

    2) When encountering a space or reaching the end of the string, call the word length counter function.

    3) The word length counter function takes a starting index (default is 0) and an end index. Update these indices in each iteration.

    4) Calculate the length of the word using the formula (end index - start index) + 1.

    5) Compare the calculated length with a count variable to find the maximum length.

*/

