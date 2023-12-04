Certainly! Let me address your points and provide the updated notes:

## Object-Oriented Programming (OOP) in JavaScript

### 1. The `this` Keyword

- `this` refers to the object that the method is associated with.

### 2. Define a Constructor Function

- Constructors are functions that create new objects, defining properties and behaviors for the new object.
- They use the keyword `this` to set properties of the object they will create.
- Constructors are defined with a capitalized name to distinguish them from other functions.
- Constructors define properties and behaviors instead of returning a value.

**Code:**
```javascript
function Dog() {
  this.name = "Hunter";
  this.color = "White";
  this.numLegs = 4;
}
```

### 3. Use a Constructor to Create Objects

- The `new` operator is used when calling a constructor to create a new instance of an object.
- `new` tells JavaScript to create a new instance, and `this` inside the constructor refers to the new object.
- Without the `new` operator, `this` inside the `constructor` would not point to the newly created object, giving unexpected results. 

**Code:**
```javascript
const hound = new Dog();
```

### 4. Extend Constructors to Receive Arguments

- Constructors can receive arguments, allowing dynamic property initialization during object creation.

**Code:**
```javascript
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("hunter", "white");
```

### 5. Verify an Object's Constructor with instanceof

- The `instanceof` operator allows you to compare an object to a constructor, returning true or false based on whether the object was created with that constructor.
- The `constructor` property is another way to check the constructor.

**Code:**
```javascript
const myHouse = new House(4);
console.log(myHouse instanceof House); // Outputs: true
console.log(myHouse.constructor === House); // Outputs: true
```

### 6. Understand Own Properties

- Own properties are defined directly on the object instance itself, not on the prototype.
- Looping through properties using `for...in` and checking with `hasOwnProperty` helps identify own properties.

**Code:**
```javascript
let ownProps = [];
for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}
```

### 7. Use Prototype Properties to Reduce Duplicate Code

- Prototype properties are shared among all instances, reducing redundancy.
- In easy words, rather than repeating the same properties for each instance, we use prototype properties to avoid redundancy.

- Think Prototype as a recipe it is shared in all the objects but it is not inside it. 

**Code:**
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");
```

### 8. Iterate Over All Properties

- There are two kind of properties we studied uptil now : own properties and prototype properties.
- Own properties are defined directly on the object instance itself and prototype properties are defined on the protyotype.
- Iterate over both own and prototype properties to distinguish them.

**Code:**
```javascript
let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}
```

### 9. Understand the Constructor Property

- The `constructor` property is a reference to the constructor function that created the instance.
- The `instanceof` operator checks if an object is an instance of a particular constructor.
- The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

**Code:**
```javascript
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
console.log(.candidate.constructor === Bird); // Outputs: true
console.log (candidate instanceof Bird); // Outputs: true
```

### 10. Change the Prototype to a New Object

- A more efficient way is to set the prototype to a new object that contains the properties.

**Code:**
```javascript
function Dog(name) {
  this.name = name;
}
/*
INSTEAD OF doing this do like this .
 Bird.prototype.numLegs = 2;

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}
*/

Dog.prototype = {
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

### 11. Remember to Set the Constructor Property when Changing the Prototype
- When manually setting the prototype to a new object, remember to define the `constructor` property. as when we manually set the prototype to a new object . It erases the constructor property .

**Code:**
```javascript
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

### 12. Understand Where an Object’s Prototype Comes From

- An object inherits its prototype directly from the constructor function that created it.Note that the constructor property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

**Code:**
```javascript
function Animal() { }

let myAnimal = new Animal();
console.log(Object.getPrototypeOf(myAnimal) === Animal.prototype); // Outputs: true
console.log(Animal.prototype.isPrototypeOf(myAnimal)); // Outputs: true
```
