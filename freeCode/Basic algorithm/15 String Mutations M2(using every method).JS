// method 2

function mutation(arr) {
// i need to split it because every is the method of array not string.
  return arr[1].toLowerCase().split("").every(function(curr){
  //  return arr[0].toLowerCase().includes(curr);
   return arr[0].toLowerCase().includes(curr);
  });
}

console.log(mutation(["hello", "hey"]));
