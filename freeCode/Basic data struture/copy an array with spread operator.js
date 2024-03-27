function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
   //method 1
  //   let newarr2 = [...arr];
  //  newArr.push(newarr2);

//method2
newArr.push([...arr])
// note we have to push it in form of array not individual
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

//  logic

/* 
1) we have to make num numbers of copy of original arr and push it inside a newArr.

so steps

1) a loop till num is greater than or equal to 1 .
2) inside that a small array where we will get all the num numbers of copy of original array .
3) and we should have a big newArr where we will push small copy array in each iteration.



or  

a) we can just simply push ...arr in newArr in each iteration withut making new Arr.
*/