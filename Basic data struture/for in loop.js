const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  let count = 0;
  for ( const key in allUsers){
if (allUsers[key].online === true) {

/* Check if the online property of the current user's object is explicitly set to true.
If true, increment the count variable by 1 (count++).
*/
    console.log(key, allUsers[key])
    if ( allUsers[key].online=== true){
count++;
    }
  }

  return count;
}

console.log(countOnline(users));


// logic

/* 
  1) i go inside each keys and access their value and i will have to count the value which are set to true.
  2) so i will set a variable counter 

  const count =0;
  3) in each iteration we will check the value to be equal to true if yes then increas count variable and
  4) at last we will return the value.
*/