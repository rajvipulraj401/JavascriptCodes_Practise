/*
  //using slice method 
function removeFirstTwo(list) {
  const newArr =list.slice(2, list.length);
  console.log(newArr)
  list = newArr;
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(sourceWithoutFirstTwo);

*/

  //  using rest parameter/operator

// function removeFirstTwo(...list) {
  // NOTE - THIS WILL make it a nested array because below we are passing array in the argument and then here we are using rest parameter to do the destructuring so that will collect all the elements from the array argument below and then put it INSIDE ANOTHER ARRAY . HENCE NESTED ARRAY 
function removeFirstTwo(list) {


  const [a, b,...other]= list;
  list = other;
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
console.log(`Because we pass array that's why nested array
`);
console.log(removeFirstTwo([2,3,4]));



// logic

/* 
   1) we will pass the elements from here and collect it using spread
      operator
   2) then we will use another rest operator to just get the elements 
      from 2nd index excluding first two elements.
   3) Then we will copy the new destructred array which we got from using rest operator   [a, b, ...other] and we will copy the value of other into list and then we will return it .

   */