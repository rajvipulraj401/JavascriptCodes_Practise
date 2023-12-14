//Verify an Object's Constructor with instanceof

//code --

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

const myHouse = new House(4);
console.log(myHouse instanceof House);