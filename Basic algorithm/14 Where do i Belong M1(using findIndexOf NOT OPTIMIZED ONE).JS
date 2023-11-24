// METHOD 2(using sorting and indexof method not OPTIMIZED one)

function getIndexToIns(arr, num) {
  
  // console.log(typeof(arr.length));

  if(arr.length<1){
    return 0;
  }
  if(num>Math.max(...arr)){
    // console.log(arr.length);
    return arr.length;
  }

  console.log(arr.sort((a,b)=>a-b));
  // note - sort method mutates the original array .
  // sort method works differently brother ----

  /* 
      sort method takes a callback fucntion not like just the normal value       
  */

return  arr.findIndex(function(curr){
// now i want to return the index where the current value is higher .
// mtlb i will check the first current element which is larger than the num so that i can place the num there (arrey large number se chhota hai toh ye wha place hoga aur large number agla index pr)

return curr >= num;

  });
  
}

console.log(getIndexToIns([2, 5, 10], 15));