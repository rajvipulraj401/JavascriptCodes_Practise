 	# Notes:

## 1) let vs Var-

```javascript
let printNumTwo;
for (let i = 0; i < 3; i++) {
if (i === 1) {
printNumTwo = function() {
return i;
};
}
}
console.log(printNumTwo());
```

a)let printNumTwo; - This line declares a variable named printNumTwo without assigning it a value.

b)```for (let i = 0; i < 3; i++) {...}``` - This is a for loop that will iterate three times. The variable i is declared with let, which means it has block scope. A new i is created for each iteration of the loop , resulting in three different i variables with unique values (0, 1, and 2).

c) ```if (i === 1) {...} ``` - This if statement checks if i is equal to 1. This will only be true during the second iteration of the loop.

d)```printNumTwo = function() {...};``` - This line assigns a function to printNumTwo. This function, when called, will return the current value of i.
At this point, i is 1, so the function will return 1

d)*return i*; - This is the body of the function assigned to printNumTwo. It returns the value of i. When this function is created during the second iteration of the loop, i is 1, so the function will always return 1.

e)```console.log(printNumTwo()); ```- This line calls the function stored in printNumTwo and prints the result to the console. Since printNumTwo returns the value of i at the time the function was created, and the function was created when i was 1, this will print 1.

#### Key Concept-

*Closure*: In JavaScript, a closure is a function that has access to its *`own scope`*, the outer function’s scope, and the global scope. Here, `printNumTwo` is a closure that captures the `i` from its scope where `i` is 1. Even after the loop ends and `i` becomes 3, `printNumTwo()` still returns 1 because it “Remembers” the value of `i` at the time it was created. If `printNumTwo` was defined outside of the `for` loop, after the loop has completed, it would just be a function that returns the current value of `i`, which would be 3 after the loop. But in that case, `printNumTwo` would not be a closure anymore.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2) const keywords-

Objects (including arrays and functions) assigned to a variable using const are still mutable. Using the *const declaration on objects only prevents reassignment of the variable identifier*.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3) Object.freeze

- const declaration alone doesn't really protect data from mutation.(in objects like array , objects etc not primitive) they simply just stop from reassigning the variable.
  To ensure your data doesn't change, JavaScript provides a function " *Object.freeze* " to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in *"strict mode"*.

In *"non-strict mode"*, any attempts to modify a frozen object will fail silently—no error will be thrown, but the object will remain unchanged.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4) Arrow Function--

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```javascript
const myFunc = () => {
const myVar = "value";
return myVar;
}
```

When you have single line of function , and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

```javascript
const myFunc = () => "value";
```

This code will still return the string value by default.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 5) Passing argument in arrow function-

we can pass argument into an arrow function. like this👇🏼

const multiplier = (item, multi) => item \* multi;

*Note - If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.*

example⭐---const doubler = item => item \* 2;

but if we have more then we have to use parantheses .


-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 6) Default Parameters -

(⚡⚡ if there is no argument(UNDEFINED) passed and there is a parameter in the function what this does it assign it to a default value .⚡⚡)

Example ---


```javascript
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Outputs: Hello John
console.log(greeting()); // Outputs: Hello Anonymous
```

The console will display the strings `Hello John` and `Hello Anonymous`. The function `greeting` takes one argument `name`. If no argument is provided when the function is called, it will use the default value `"Anonymous"`. So, `greeting("John")` returns `"Hello John"` and `greeting()` returns `"Hello Anonymous"`.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 7) Rest Parameter/Operator --

1. **Function Definitions**: Rest parameters are used in function definitions to collect an indefinite number of arguments into an array.

```javascript
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6
```

In the above example, `...args` is a rest parameter that collects all arguments passed to the `sum` function into an array.

2. **Destructuring Assignments**: Rest parameters can be used in destructuring assignments to collect the remaining elements into an array or object. They must always be at the end.

- *Array Destructuring*:

```javascript
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]
```

- *Object Destructuring (ES2018 and later)*:

```javascript
const {a, ...rest} = {a: 1, b: 2, c: 3};
console.log(a);     // Outputs: 1
console.log(rest);  // Outputs: {b: 2, c: 3}
```

In both examples, `...rest` is a rest parameter that collects the rest of the elements from the array or properties from the object into a new array or object.



**Remember, when using rest parameters in destructuring assignments, the right side of the assignment must be an iterable (like an array or a string) or an object(since es2018).**

### note -//**We don't need to write `const` or `let` in the parameter when we do object or array destructuring in function parameters. This is because the destructuring assignment itself creates new variables within the function scope, so we don't need to explicitly declare them.**


--------------------------------------------------------------------------------

## 8) Spread Operator
The spread operator (`...`) is used to unpack elements from an array or properties from an object. It's typically used on the right side of an assignment operator. It allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

1. **Function Calls**: Spread syntax can be used when invoking functions:

```javascript
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6
```

In this example, `...numbers` spreads an array into separate arguments when calling the `sum` function.

2. **Array Literals**: Spread syntax can be used for array construction and concatenation:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 is now [1, 2, 3, 4, 5]
```

In this example, `...arr1` spreads the elements of `arr1` into the `arr2` array.

3. **Object Literals** (ES2018 and later): Spread syntax can be used to copy properties from one object to another:

```javascript
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // obj2 is now {a: 1, b: 2, c: 3}
```

In this example, `...obj1` spreads the properties of `obj1` into the `obj2` object.

4. **Creating Shallow Copies**: The spread operator can be used to create a shallow copy of an object:

```javascript
const obj = {a: 1, b: 2, c: 3};
const copy = {...obj};
console.log(copy); // Outputs: {a: 1, b: 2, c: 3}
```

In this example, `...obj` spreads the properties of `obj` into a new object `copy`, creating a shallow copy of `obj`.

5. **In-place Usage**:  The spread operator only works in-place, like in an argument to a function or in an array literal:

```javascript
const spreaded = [...arr]; // This works
```

However, the following code will not work:

```javascript
const spreaded = ...arr; // This will throw an error
```



 6. **Creating Shallow Copies**: The spread operator can be used to create a shallow copy of an object:
```
const obj = {a: 1, b: 2, c: 3};
const copy = {...obj};
console.log(copy); // Outputs: {a: 1, b: 2, c: 3}
```
In this example, ...obj spreads the properties of obj into a new object copy, creating a shallow copy of obj.

## Difference from Array Destructuring:
 *One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. Destructuring an array lets us do exactly that.*

------------------------------------------------------------------------------------------------------------------------

## 9,10,11,14)  Object Destructuring in JavaScript

1.  **Basic Syntax** :

```javascript
const obj = {a: 1, b: 2, c: 3};
const {a, b, c} = obj;
console.log(a, b, c); // Outputs: 1 2 3
```
In this example, the properties a, b, and c of obj are extracted and assigned to the variables a, b, and c, respectively.

2. **Assigning to New Variable Names**:

You can assign the properties of an object to new variable names:

```javascript
const obj = {a: 1, b: 2, c: 3};
const {a: first, b: second, c: third} = obj;
console.log(first, second, third); // Outputs: 1 2 3
```

In this example, the properties a, b, and c of obj are extracted and assigned to the new variables first, second, and third, respectively.

3. **Default Values**: 

You can provide default values for properties that may not exist in the object:

```javascript
const obj = {a: 1, b: 2};
const {a = 10, b = 20, c = 30} = obj;
console.log(a, b, c); // Outputs: 1 2 30
```
In this example, the property c does not exist in obj, so the default value 30 is used.

4. **Nested Objects**: 

You can destructure nested objects:

```javascript
const obj = {a: 1, b: 2, nested: {c: 3, d: 4}};
const {a, b, nested: {c, d}} = obj;
console.log(a, b, c, d); // Outputs: 1 2 3 4
```
In this example, the properties c and d are extracted from the nested object and assigned to the variables c and d, respectively.

5. **Nested Objects with New Variable Names**:

You can destructure nested objects and assign the properties to new variable names:

```javascript
const LOCAL_FORECAST = {today: {low: 32, high: 40}};
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday); // Outputs: 32 40
```
In this example, the properties low and high from the nested today object are extracted and assigned to the new variables lowToday and highToday, respectively. This is done using the colon : syntax inside the nested destructuring {}.

6. **Swapping Variables**: 

Object destructuring can be used to swap variables:

```javascript
let obj = {a: 1, b: 2};
let {a: b, b: a} = obj;
console.log(a, b); // Outputs: 2 1
```
In this example, the values of a and b are swapped using object destructuring.

7. **Mutating Variables**:

Object destructuring can be used to mutate variables:

```javascript
let a = 2, b = 3;
const obj = {a: 4, b: 5};

({a, b} = obj);
console.log(a, b); // Outputs: 4 5
```
In this example, the original values of a and b are mutated (changed) to the values of the properties a and b from obj.
#### Note the use of parentheses () around the destructuring assignment - this is necessary when you’re mutating existing variables, because without the parentheses, {a, b} = obj; is considered a block statement instead of an assignment operation.

8. **Shallow Copy**: 

It creates a new object and copies over the values of the original object. However, it only copies the reference (i.e., the address of the object). This can be done using Object.assign() and the spread operator (...).

9. **Deep Copy**: 

It creates a new object and copies the values from the original object, including nested objects. This can be done using JSON.stringify() and JSON.parse().

### Note - 

**There is no concept of deep or shallow copy for primitive data types, as they are immutable. Shallow copies are used for “flat” objects, which contain only primitive values, while deep copies are used for “nested” objects, which contain non-primitive values.**

## VVI

### Note - 

**We don't need to write `const` or `let` in the parameter when we do object or array destructuring in function parameters. This is because the destructuring assignment itself creates new variables within the function scope, so we don't need to explicitly declare them.**

```javascript
function greet({ name }) {
  console.log(`Hello, ${name}!`);
}

const person = {
  name: "John Doe",
  age: 30
};

greet(person); // Output: Hello, John Doe!
```
----------------------------------------------------------------------------------------------------------------------------------------------------------------



## 12,13) Array Destructuring 

Array destructuring in JavaScript allows you to unpack values from arrays, or properties from objects, into distinct variables.

1. *Basic Syntax*: The basic syntax of array destructuring is as follows:

```javascript
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // Outputs: 1 2 3
```
In this example, the elements of arr are unpacked into the variables a, b, and c.

2. **Skipping Items**: You can skip items in an array:

```javascript
const arr = [1, 2, 3];
const [a, , c] = arr;
console.log(a, c); // Outputs: 1 3
```
In this example, the second element is skipped in the destructuring assignment.

3. **Default Values**: You can provide default values for elements that may not exist in the array:

```javascript
const arr = [1, 2];
const [a = 10, b = 20, c = 30] = arr;
console.log(a, b, c); // Outputs: 1 2 30
```
In this example, the third element does not exist in arr, so the default value 30 is used

4.**Rest Items**: You can collect the rest of the items in an array using the rest syntax (`...`):

```javascript
const arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;
console.log(a, b, rest); // Outputs: 1 2 [3, 4, 5]
```

In this example, the rest of the items in arr are collected into a new array rest.

5. **Swapping Variables**: Array destructuring can be used to swap variables:

```javascript
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a, b); // Outputs: 6 8
```
In this example, the values of a and b are swapped using array destructuring.

6. **Mutating Variables**: Array destructuring can be used to mutate variables:

```javascript
let a = 5, b = 6;
const arr = [3, 4];
[a, b] = arr;
console.log(a, b); // Outputs: 3 4
```

Imp. ##Difference from Spread Operator**:
 **One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables. Destructuring an array lets us do exactly that.**


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## 15)  Template Literals in JavaScript

Template literals are a new kind of string literals introduced in ES6. They provide a more powerful and flexible way to create strings.

1. **Syntax**: Template literals are enclosed by the backtick (` ` `) character instead of double or single quotes.

```javascript
let greeting = `Hello, World!`;
```

2. **Multiline Strings**: Template literals can span multiple lines without needing any special characters.

```javascript
let multilineString = `Hello,
World!`;
```

3. **Interpolation**: Template literals can contain placeholders for string substitution using the `${ }` syntax.

```javascript
let name = 'World';
let greeting = `Hello, ${name}!`; // Outputs: Hello, World!
```

4. **Expressions**: Template literals can contain any valid JavaScript expression inside the placeholders.

```javascript
let a = 1, b = 2;
let sum = `The sum is ${a + b}.`; // Outputs: The sum is 3.
```

## Difference from Old Way

In old JavaScript, strings were defined using single (' ') or double (" ") quotes. Multiline strings required the use of the newline character (`\n`), and string substitution required concatenation using the `+` operator.

```javascript
let name = 'World';
let greeting = 'Hello, ' + name + '!'; // Outputs: Hello, World!
```

With template literals, creating complex strings becomes much easier and the syntax is more readable. For example, a multiline string with spaces:

```javascript
let name = 'World';
let greeting = `Hello ${name},
    How are you today?
    I hope you are having a great day!`;
console.log(greeting);
```
