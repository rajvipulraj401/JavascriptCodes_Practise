
---

### **Notes**

#### **1) Array**

- **One-Dimensional Array:**
  ```javascript
  let simpleArray = ['one', 2, 'three', true, false, undefined, null];
  console.log(simpleArray.length);
  ```

- **Two-Dimensional Array:**
  - Arrays containing arrays as elements.

#### **2) Properties in Array**

- `.length`: Returns the number of elements in the array.

#### **3) Storing Various Objects in Array**

- Arrays can store any kind of object, including primitives, objects, and functions.
  ```javascript
  let mixedArray = [1, 'two', { key: 'value' }, function() { console.log('Hello!'); }, true];
  ```

#### **4) Accessing Array Elements**

- Two main ways:
  - Bracket Notation: `array[index]`
  - Dot Notation: `array.property`

#### **5) Array Methods**

- **Common Methods:**
  - `push()`: Adds elements to the end of an array.
  - `unshift()`: Adds elements to the beginning of an array.
  - `pop()`: Removes the last element from an array.
  - `shift()`: Removes the first element from an array.
  - `slice(start, end)`: Returns a shallow copy of a portion of an array.
  - `splice(start, deleteCount, itemsToAdd)`: Adds or removes elements from an array.
  - `map(callback)`: Creates a new array with the results of calling a provided function on every element in the array.
  - `indexOf(element)`: Returns the first index at which a given element can be found in the array.
  - `filter(callback)`: Creates a new array with all elements that pass the test implemented by the provided function.
  - `reduce(callback, initialValue)`: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

- **Examples:**
  ```javascript
  // Using push and unshift
  function mixedNumbers(arr) {
    arr.unshift('I', 2, 'three');
    arr.push(7, 'VIII', 9);
    return arr;
  }
  console.log(mixedNumbers(['IV', 5, 'six']));

  // Using splice
  function htmlColorNames(arr) {
    arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
    return arr;
  }
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

  // Using reduce
  function sumArray(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
  }
  console.log(sumArray([1, 2, 3, 4, 5]));

#### **6) Array Additional Notes**

- `splice()` not only modifies the array it's being called on but also returns a new array containing the value of the removed elements.

#### **7) Objects**

- **Basic Object and Nested Objects:**
  ```javascript
  const refrigerator = {
    'milk': 1,
    'eggs': 12,
    'nestedObj': {
      'vegetables': ['carrot', 'spinach'],
    },
  };
  ```

- **Accessing Objects:**
  - Dot Notation: `object.property`
  - Bracket Notation: `object['property']`

- **Deleting Properties:**
  ```javascript
  delete refrigerator.milk;
  ```

- **Checking Property Existence:**
  ```javascript
  users.hasOwnProperty('Alan');
  'Alan' in users;
  ```

#### **8) Iterating Through Objects**

- **Using `for...in` Loop:**
  ```javascript
  for (const food in refrigerator) {
    console.log(food, refrigerator[food]);
  }
  ```

#### **9) Object Methods**

- `Object.keys(object)`: Returns an array of a given object's property names.
  ```javascript
  const keysArray = Object.keys(refrigerator);
  console.log('Keys:', keysArray);
  ```

- `Object.entries(object)`: Returns an array of a given object's own enumerable property `[key, value]` pairs.
  ```javascript
  const entriesArray = Object.entries(refrigerator);
  console.log('Entries:', entriesArray);
  ```

- `Object.values(object)`: Returns an array of a given object's own enumerable property values.
  ```javascript
  const valuesArray = Object.values(refrigerator);
  console.log('Values:', valuesArray);
  ```

#### **10) Miscellaneous**

- Using `for...in` loop for iterating through object properties.
- Using the `in` keyword for checking the existence of a property in an object.

#### **11) Summary**

- Arrays are versatile data structures that can hold various data types.
- Objects are collections of key-value pairs, and they can be nested.
- Both arrays and objects have specific methods for manipulation and iteration.

---

### **4) Console Functions:**

- **console.log()**
  - Outputs information to the console.
  - Example:
    ```javascript
    console.log('Hello, World!');
    ```

- **console.warn()**
  - Outputs a warning message to the console.
  - Example:
    ```javascript
    console.warn('This is a warning!');
    ```

- **console.error()**
  - Outputs an error message to the console.
  - Example:
    ```javascript
    console.error('This is an error!');
    ```

- **console.info()**
  - Outputs an informational message to the console.
  - Example:
    ```javascript
    console.info('This is an information!');
    ```

- **console.clear()**
  - Clears the console.
  - Example:
    ```javascript
    console.clear();
    ```

- **console.dir()**
  - Displays an interactive list of the properties of the specified JavaScript object.
  - Example

:
    ```javascript
    const user = { name: 'Alice', age: 28 };
    console.dir(user);
    ```

These are some commonly used console functions in JavaScript. They provide various ways to output information and debug code during development.

---

### **Additional Question Notes**

The issue is that you're using the same `row` array for each row in your `newArray`. When you use `push`, it doesn't create a new copy of the `row` array but rather adds a reference to the `row` array. So when you modify `row` in subsequent iterations, it also changes the `row` arrays that were already pushed into `newArray`.

Here's a dry run of your code:

1. Initialize `newArray` as an empty array and `row` as an empty array.
2. For `i = 0` (first row):
   - For `j = 0` and `j = 1` (two columns), push `0` into `row`. Now `row` is `[0, 0]`.
   - Push `row` into `newArray`. Now `newArray` is `[[0, 0]]`.
3. For `i = 1` (second row):
   - For `j = 0` and `j = 1`, push `0` into `row`. Now `row` is `[0, 0, 0, 0]`.
   - Push `row` into `newArray`. But since `row` is a reference, not a copy, all instancesof `row` in `newArray` are updated. Now `newArray` is `[[0, 0, 0, 0], [0, 0, 0, 0]]`.
4. For `i = 2` (third row):
   - For `j = 0` and `j = 1`, push `0` into `row`. Now `row` is `[0, 0, 0, 0, 0, 0]`.
   - Push `row` into `newArray`. Again, all instances of `row` in `newArray` are updated. Now `newArray` is `[[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]`.
To fix this, you should initialize `row` inside the first loop so that a new `row` array is created for each row in `newArray`. Here's the corrected code:


```javascript
function zeroArray(m, n) {
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
```