### Notes:

## 1) let vs Var-

```
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

b)`for (let i = 0; i < 3; i++) {...}` - This is a for loop that will iterate three times. The variable i is declared with let, which means it has block scope. A new i is created for each iteration of the loop , resulting in three different i variables with unique values (0, 1, and 2).

c) `if (i === 1) {...} ` - This if statement checks if i is equal to 1. This will only be true during the second iteration of the loop.

d)printNumTwo = function() {...}; - This line assigns a function to printNumTwo. This function, when called, will return the current value of i.
At this point, i is 1, so the function will return 1

d)return i; - This is the body of the function assigned to printNumTwo. It returns the value of i. When this function is created during the second iteration of the loop, i is 1, so the function will always return 1.

e)console.log(printNumTwo()); - This line calls the function stored in printNumTwo and prints the result to the console. Since printNumTwo returns the value of i at the time the function was created, and the function was created when i was 1, this will print 1.

## Key Concept -

Closure: In JavaScript, a closure is a function that has access to its own scope, the outer function’s scope, and the global scope. Here, printNumTwo is a closure that captures the i from its scope where i is 1. Even after the loop ends and i becomes 3, printNumTwo() still returns 1 because it “Remembers” the value of i at the time it was created. If printNumTwo was defined outside of the for loop, after the loop has completed, it would just be a function that returns the current value of i, which would be 3 after the loop. But in that case, printNumTwo would not be a closure anymore.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2) const keywords-

objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3) Object.freeze

- const declaration alone doesn't really protect data from mutation.(in objects like array , objects etc not primitive) they simply just stop from reassigning the variable.
  To ensure your data doesn't change, JavaScript provides a function " Object.freeze " to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in "strict mode".

In "non-strict mode", any attempts to modify a frozen object will fail silently—no error will be thrown, but the object will remain unchanged.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4) Arrow Function--

ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

```
const myFunc = () => {
const myVar = "value";
return myVar;
}
```

When you have single line of function , and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

```
const myFunc = () => "value";
```

This code will still return the string value by default.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 5) Passing argument in arrow function-

we can pass argument into an arrow function. like this👇🏼

const multiplier = (item, multi) => item \* multi;

note - If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

example⭐---const doubler = item => item \* 2;

but if we have more then we have to use parantheses .


-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 6) Default Parameters -

(⚡⚡ if there is no argument(UNDEFINED) passed and there is a parameter in the function what this does it assign it to a default value .⚡⚡)

Example ---

```
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
```

RESULT --
The console will display the strings Hello John and Hello Anonymous.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 7) \*\*Rest Parameters --

->Rest parameter is used to pack all the elements into an array.

Rest Parameters in JavaScript
# A) Function Definitions:
 Rest parameters are used in function definitions to collect an indefinite number of arguments into an array.

```
function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // Outputs: 6
```

In the above example, ...args is a rest parameter that collects all arguments passed to the sum function into an array.

# B) Destructuring Assignments: 
Rest parameters can be used in destructuring assignments to collect the remaining elements into an array or object. They must always be at the end.

#Array Destructuring:

```
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]

```

#Object Destructuring (ES2018 and later):

```
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]
```

In both examples, ...rest is a rest parameter that collects the rest of the elements from the array or properties from the object into a new array or object.

Remember, when using rest parameters in destructuring assignments, the right side of the assignment must be an iterable (like an array or a string) or an object(since es2018).



--------------------------------------------------------------------------------

## 8) Spread Operator

The spread operator (...) is used to unpack elements from an array or properties from an object. It’s typically used on the right side of an assignment operator. It allows an iterable (like an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

# A) Function Calls:
 Spread syntax can be used when invoking functions:



```
function sum(a, b, c) {
    return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Outputs: 6

```
In this example, ...numbers spreads an array into separate arguments when calling the sum function.

# B)  Array Literals

Spread syntax can be used for array construction and concatenation:

```
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // arr2 is now [1, 2, 3, 4, 5]

```

# C) Object Literals (ES2018 and later): 
Spread syntax can be used to copy properties from one object to another:


```
const obj1 = {a: 1, b: 2};
const obj2 = {...obj1, c: 3}; // obj2 is now {a: 1, b: 2, c: 3}
```

# D)In-place Usage: 
The spread operator only works in-place, like in an argument to a function or in an array literal:

```
const spreaded = [...arr]; // This works
```

# However, the following code will not work:

```
const spreaded = ...arr; // This will throw an error

```

------------------------------------------------------------------------------------------------------------------------

## 9) Object Destructuring in JavaScript


# A) Basic Syntax :

```
const obj = {a: 1, b: 2, c: 3};
const {a, b, c} = obj;
console.log(a, b, c); // Outputs: 1 2 3
```
In this example, the properties a, b, and c of obj are extracted and assigned to the variables a, b, and c, respectively.

# B) Assigning to New Variable Names:

You can assign the properties of an object to new variable names:

```
const obj = {a: 1, b: 2, c: 3};
const {a: first, b: second, c: third} = obj;
console.log(first, second, third); // Outputs: 1 2 3
```

In this example, the properties a, b, and c of obj are extracted and assigned to the new variables first, second, and third, respectively.

# C) Default Values: You can provide default values for properties that may not exist in the object:

```
const obj = {a: 1, b: 2};
const {a = 10, b = 20, c = 30} = obj;
console.log(a, b, c); // Outputs: 1 2 30
```
In this example, the property c does not exist in obj, so the default value 30 is used.

# D) Nested Objects: 
You can destructure nested objects:
```
const obj = {a: 1, b: 2, nested: {c: 3, d: 4}};
const {a, b, nested: {c, d}} = obj;
console.log(a, b, c, d); // Outputs: 1 2 3 4
```
In this example, the properties c and d are extracted from the nested object and assigned to the variables c and d, respectively.

# E) Nested Objects with New Variable Names:
 You can destructure nested objects and assign the properties to new variable names:
```
const LOCAL_FORECAST = {today: {low: 32, high: 40}};
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
console.log(lowToday, highToday); // Outputs: 32 40
```
In this example, the properties low and high from the nested today object are extracted and assigned to the new variables lowToday and highToday, respectively. This is done using the colon : syntax inside the nested destructuring {}.

# F) Swapping Variables: Object destructuring can be used to swap variables:
JavaScript
AI-generated code. Review and use carefully. More info on FAQ.

let obj = {a: 1, b: 2};
let {a: b, b: a} = obj;
console.log(a, b); // Outputs: 2 1
In this example, the values of a and b are swapped using object destructuring.

