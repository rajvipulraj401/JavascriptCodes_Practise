// 1 Diff two Array (using Filter)

function diffArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  console.log(newArr);
  const ans = newArr.filter(function (curr) {
    //  return arr1.concat(arr2).filter(function(curr){
    return !arr1.includes(curr) || !arr2.includes(curr);
  });

  return ans;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

/* 
  Logic:

  1) Combine both arrays into a new array (newArr) using either the spread operator or arr1.concat(arr2).
  2) Filter the elements in newArr.
  3) For each element (curr), check if it is not present in arr1 or arr2 using the includes method.
  4) Return a new array (ans) containing the differences.
*/
