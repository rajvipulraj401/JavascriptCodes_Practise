          // METHOD 1 
// (USING  SPLIT And making each word in  an array and then comparing each arrays lenght and returning the highest length.)

function findLongestWordLength(str) {

  let array = str.split(" ");
  // console.log(array);
  // now we get an array where at each index we have every word.
  // we can now compare each index lenght and then return the highest one.
let maxLength =0;
let maxWord ="";
  for(let i =0;i<array.length;i++){
    if(array[i].length >maxLength){
      maxLength = array[i].length;
      maxWord = array[i];
    }
  }
  return maxLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//  Do this question and also try to return just the word besides length of that word.
