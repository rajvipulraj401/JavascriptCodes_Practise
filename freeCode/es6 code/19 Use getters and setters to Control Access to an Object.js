class Thermostat {

  // Constructor to initialize the Fahrenheit temperature
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  // Getter method to retrieve the temperature in Celsius
  get temperature() {
    // Conversion formula: Celsius = 5/9 * (Fahrenheit - 32)
    // It's crucial to include ".0" in JavaScript division to ensure accurate results, especially for decimal values crucial for precision (accuracy) refers to the level of detail or accuracy in a measurement, calculation, or representation of a value..
    let celsius = 5.0 / 9 * (this.fahrenheit - 32);
    // Return the temperature in Celsius
    return celsius;
  }

  // Setter method to set the temperature in Celsius and convert it to Fahrenheit
  set temperature(celsius) {
    // Conversion formula: Fahrenheit = Celsius * 9.0 / 5 + 32
    this.fahrenheit = celsius * 9.0 / 5 + 32;
  }
}

// Creating an instance of the Thermostat class with an initial Fahrenheit temperature of 76
const thermos = new Thermostat(76);

// Getting the temperature in Celsius and logging it to the console
let temp = thermos.temperature; // Expected output: 24.44 in Celsius
console.log(temp);

// Setting the temperature to 26 degrees Celsius using the setter method
thermos.temperature = 26;

// Getting the updated temperature in Celsius and logging it to the console
temp = thermos.temperature; // Expected output: 26 in Celsius
console.log(temp);



/* 
      Logic

      Use getters and setters to Control Access to an Object
You can obtain values from an object and set the value of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable.

Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.




for example


class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);


The console would display the strings anonymous and newAuthor.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

Note: It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.

Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.

In the class, create a getter to obtain the temperature in Celsius and a setter that accepts a temperature in Celsius.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.

Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.

In other words, you are abstracting implementation details from the user.

*/
