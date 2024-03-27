

// //  1) print Name n no of times using Recursion .
// Time complexity O(n) , Space complexity - O(n).
 
// function printNameN(name , i,n){

// if(n<i)
// return;

// console.log(name);
// printNameN(name ,i+1,n);
// // console.log(n-1);


// }
//  printNameN("Rambo",1, 5);
 

// /* logic -we are given a  name and a number we have to print that name that number of times.

// steps - 

// 1)define the base caee .if  n<1 return else keep printing or use another variable i to do decrment and checking.
// 2) 


// dry run -


// */




// //  2) print linerally from 1 to n  .


// function printLinearally1toN(n){

// if(n<1) return;
// // basecase

// // call function for small case.

// printLinearally1toN(n-1);
// // now when the base case hits then print after that for every call
// console.log(n);
// }


// printLinearally1toN(10);






// //  2.1) print linerally from 1 to n  .


// function printLinearally1toN(i,n){

// if(i<1) return;
// // basecase

// // call function for small case.

// printLinearally1toN(i-1,n);
// // now when the base case hits then print after that for every call
// console.log(i);
// }


// printLinearally1toN(10,10);




// //  3.1) print from n to 1

// function printNto1(n){

// if(n<1) return;
// // basecase

// // Print first then call for the small cases using recursion
// console.log(n);
// printNto1(n-1);

// }


// printNto1(10);


// //  3.2) print from n to 1
// // what if we use an extra variable i for tracking .

// function printNto1(i,n){

// if(n<i) return;
// // basecase

// // Print first then call for the small cases using recursion

// printNto1(i+1,n);
// console.log(i);

// }


// printNto1(1,10);



// NOTES -

/* 
1) PRINTING after recursive function call it is called backtracking.
*/