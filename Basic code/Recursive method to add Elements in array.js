function sum(arr, n) {
  
  if (n<=0){
    return 0;
  }
 return sum (arr ,n-1)+ arr[n-1];
}
const ans =sum([1,2,3,4,5],5);

console.log(ans);

// logic

/*

 1) we have to add the elements in an array .

 2) we have a length of the array represented as n .

 3) we have to return the sum of first n elements of an array.

 so .

   recursion method .
(any method which can be done in loop canbe done via recursion .)


a) if we don't have element in the array []
return 0;
b) and on other case we will just call the function with smaller argument 
 ex   sumArr( arr , n-1)+ arr[n-1];
 HERE we are doing the small calculation .
 like - when we get the array to sum till n then we will call the sum function and then sum it till n-1 and then add the last element arr[n-1] to it .  
*/