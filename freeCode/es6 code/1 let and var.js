function checkScope() {
  let i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
    // as i used let keyword to declare the variable what happens is at every iteration i is a different variable 
  }
  i = "function scope"
  console.log('Function scope i is: ', i);
  return i;
}
console.log(checkScope());
// Date - 4th november 

/* 
    Logic

    i = 0 
    ye printNumTwo variable me ek function assign kr diya jo i  ka value return krega .
    Phir jab loop ka condition false hota hai i =3 hone pe tab hum log
    neeche jaate hai console.log krne jaha printNumTwo function ko call krte hai 
    -> aur wha se i ka value return krte hai joki abhi i =3 ho chuka hai 
    kyunki var use hua tha (so global space )
*/