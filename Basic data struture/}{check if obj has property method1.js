let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // method 1
  //  return userObj.hasOwnProperty("Alan") &&
  //     userObj.hasOwnProperty("Jeff") &&
  //     userObj.hasOwnProperty("Sarah") &&
  //     userObj.hasOwnProperty("Ryan");

  // if user has all the property/key then return true else false .

  // METHOD 2 .
  return (
    "Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj
  );
}

console.log(isEveryoneHere(users));
