function quickCheck(arr, elem) {

  const value = arr.indexOf(elem);
  console.log (value);

  if (value<0){
return false;
  }
  return true;


}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushroom'));

// Logic

/*
array.indexOf will return -1 if the element is not in the array 
and the index if the element is present in the array. 
*/