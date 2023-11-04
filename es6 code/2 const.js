const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  const [x , y ,z] =s;
 s[0]=z;
 s[1]=x;
 s[2]=y;

  // Only change code above this line
}
editInPlace();
console.log(s);