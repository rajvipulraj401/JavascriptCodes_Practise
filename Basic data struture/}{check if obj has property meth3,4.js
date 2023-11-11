let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
      // method 3 ( using every method )
/*
  1) use an array to store all the names in it and then use every method to compare that with the object if true return it.
 */
const ans = [ "Alan" ,"Jeff" , "Sarah" ,   "Ryan"].every (function(curr){
//  if current element equal to object property then true .
return curr in userObj;
// return userObj.hasOwnProperty(curr);
});

    //method 4(in short way)
// function isEveryoneHere(userObj) {
//   return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
//     userObj.hasOwnProperty(name)
//   );
// }

return ans;
}

console.log(isEveryoneHere(users));