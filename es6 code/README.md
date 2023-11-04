

 ### Notes:

## 1) let vs Var-
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 1) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

a)let printNumTwo; - This line declares a variable named printNumTwo without assigning it a value.

b)for (let i = 0; i < 3; i++) {...} - This is a for loop that will iterate three times. The variable i is declared with let, which means it has block scope. A new i is created for each iteration of the loop , resulting in three different i variables with unique values (0, 1, and 2).

c)if (i === 1) {...} - This if statement checks if i is equal to 1. This will only be true during the second iteration of the loop.

d)printNumTwo = function() {...}; - This line assigns a function to printNumTwo. This function, when called, will return the current value of i.
At this point, i is 1, so the function will return 1


d)return i; - This is the body of the function assigned to printNumTwo. It returns the value of i. When this function is created during the second iteration of the loop, i is 1, so the function will always return 1.

e)console.log(printNumTwo()); - This line calls the function stored in printNumTwo and prints the result to the console. Since printNumTwo returns the value of i at the time the function was created, and the function was created when i was 1, this will print 1.

## Key Concept - 
 Closure: In JavaScript, a closure is a function that has access to its own scope, the outer function’s scope, and the global scope. Here, printNumTwo is a closure that captures the i from its scope where i is 1. Even after the loop ends and i becomes 3, printNumTwo() still returns 1 because it “Remembers” the value of i at the time it was created. If printNumTwo was defined outside of the for loop, after the loop has completed, it would just be a function that returns the current value of i, which would be 3 after the loop. But in that case, printNumTwo would not be a closure anymore.




-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 2) const keywords-  
 objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 3) Object.freeze
- const declaration alone doesn't really protect  data from mutation.(in objects like array , objects etc not primitive) they simply just stop from reassigning the variable.
  	 To ensure your data doesn't change, JavaScript provides a function " Object.freeze " to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in "strict mode".

In "non-strict mode", any attempts to modify a frozen object will fail silently—no error will be thrown, but the object will remain unchanged.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## 4) Arrow Function--
 ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}

When you have single line of function , and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.

----------------------------------------------------------------------------------

## 5) Passing argument in arrow function-
 we can  pass  argument into an arrow function. like this👇🏼

const multiplier = (item, multi) => item * multi;


note -  If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

example⭐---const doubler = item => item * 2;

but if we have more then we have to use parantheses .

--------------------------------------------------------------------------------

## 6) Default Parameters - 
(⚡⚡ if there is no argument(UNDEFINED) passed and there is a parameter in the function what this does it assign it to a default value .⚡⚡)

Example ---
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());

RESULT --
	The console will display the strings Hello John and Hello Anonymous.


------------------------------------------------------------------------------------

## 7) **Rest Parameters  --

