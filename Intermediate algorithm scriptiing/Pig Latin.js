
	// pig latin

function translatePigLatin(str) {
  const arr = str.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let first = arr[0];

// IF THE FIRST LETTER IS VOWEL
  if (vowels.includes(first)) {
    arr.push('w', 'a', 'y');
  } 
  // if FIRST LETTER IS NOT VOWEL
  else {
    let index = arr.findIndex((char) => vowels.includes(char));
    if (index !== -1) {
      const sliced = arr.splice(0, index);
      arr.push(...sliced, 'a', 'y');
    } else {
      arr.push('a', 'y');
    }
  }

  str = arr.join('');
  return str;
}

console.log(translatePigLatin("glove"));


