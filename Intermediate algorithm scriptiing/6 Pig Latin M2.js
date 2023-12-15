
// pig latin M2(using findIndexOf method).


function translatePigLatin(str) {

const vowels = [ "a","e","i","o","u"];

const first = vowels.includes(str[0]);

        if(first){
          return str+"way";
        }
    
    else {
// now when the first chr is not vowel then it will be consonant then we have to keep checking it till we get the character as vowel here .

// const index = str.split("").findIndex((char)=>vowels.  includes(char));


const index = [...str].findIndex((char)=>vowels.includes(char));

// we need to know the index where we get the vowel for the first time .


if (index === -1){
  // if there is now vowel in the chr then 
  // ex - rhythm  so we return rythmay.
  return str + "ay";

}
// if there is a vowel at any index in the chr then 
const sliced = str.slice(0, index);
return str.slice(index)+sliced+"ay";
}

 }
  
// console.log(translatePigLatin("glwove"));
console.log(translatePigLatin("rhythm"));


// logic (without any method)


/* 

I will be a given a word i have to check if the word begins with a  consonant i will take out the first consonant and move it to the end of the word and add ay to it. (so this means we will keep checking till the word starts with a vowel that is we will keep placing all the consonat words at back until the starting word becomes a vowel and then at last add ay to it .) and if we find no word as vowel in between then add ay to the word and return the word.
and if the word starts with a vowel just add way at the end .

/*

Steps:
1) Let's create an array of vowels to check if the first character is a vowel or not.
2) Check if the first character is a vowel. If it is, add "way" to the end and return the new string.
3) If the first character is not a vowel, find out where we get the first vowel using the findIndex method.
4) If there is no vowel in the word, return the string by adding "ay" at the end.
5) If a vowel is found, slice the string from 0th index till the vowel index and rearrange the string.
str.slice(index)+sliced+"ay" 
6) Return the translated Pig Latin word.
*/

// Dry Run
/*
Initial Word: "rhythm"

1) Check if the first character "r" is a vowel (false).
2) Find the index of the first vowel using findIndex (index = 0, first vowel is "y").
3) If there is a vowel, slice the string before the vowel ("").
4) Return the translated Pig Latin word: "rhythmway"
*/