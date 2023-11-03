function multiplyAll(arr) {
  let product = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    // console.log(arr[i][j]);
    product *= arr[i][j];
    // logic
    /*
      1) simple keep a product  variable and multiply  every sub      
          element    with it for example .
            product *arr[i][j]; 
    */
  }
}

console.log(product);
  // Only change code above this line
  return product;
}



multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);