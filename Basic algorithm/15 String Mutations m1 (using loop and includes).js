function mutation(arr) {
   const string1 = arr[0].toLowerCase();
   const string2 = arr[1].toLowerCase();
  for (let i = 0; i < string2.length; i++) {
    if (!string1.includes(string2[i])) {
      // check if string 1 doesn't include any element of string 2 if so return false.
      return false;
      }
  }
  return true;
}

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

