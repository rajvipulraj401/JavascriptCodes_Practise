// METHOD 2 (using multiplication method)
	//NOTE - USE 1,3 TO explain this code 

function smallestCommons(arr) {

  let max = Math.max(arr[0],arr[1]);
  let min = Math.min(...arr);

  for (let i = max; ; i += max) {
    let j = min;
    while (i % j === 0) {
      // jab tk i completely divisible hoga j se tab tk ye loop chlte rhega.
      j++;
    }
    if (j >= max) {
      return i;
    }
  }
}
console.log(smallestCommons([1, 3])); // Output: 6
