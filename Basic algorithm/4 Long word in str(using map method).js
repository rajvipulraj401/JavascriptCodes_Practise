  // method 3(using map method)

function findLongestWordLength(str) {
  console.log((str.split(" ").map(word=>word.length)));

  // note - Math.max doesn't work on an array so that's why you have to spread all the values and then check which among them is max
  // example Math.max(10,20);
  // so we need to spread the array value 

  return Math.max(...str.split(" ").map(word => word.length));
}
const ans =findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");

console.log(ans);
