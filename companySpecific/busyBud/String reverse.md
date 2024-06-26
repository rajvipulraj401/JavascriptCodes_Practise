
### Method 1 (Brute Force)
1) Iterate through the input string from the end.
2) Keep a new array variable and copy all characters from the input string in reverse order.
3) Join the array to form the reversed string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the new array `newStr`.
```javascript
function FirstReverse(str) { 
    const newStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        newStr.push(str[i]);
    }
    return newStr.join(""); 
}
```

### Method 2 (Using Array.reverse())
1) Convert the input string into an array.
2) Use the `reverse()` method of arrays to reverse the array.
3) Join the array back into a string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the array `newStr`.
```javascript
function FirstReverse(str) { 
    const newStr = str.split("");
    newStr.reverse();
    return newStr.join(""); 
}
```

### Method 3 (Optimal - In-Place Reversal)
1) Convert the input string into an array to enable swapping characters.
2) Use two pointers, one starting from the beginning and one from the end.
3) Swap characters at these pointers until they meet in the middle.
4) Join the array back into a string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the array `strArr`.
```javascript
function FirstReverse(str) {
    const strArr = str.split('');
    let left = 0;
    let right = strArr.length - 1;

    while (left < right) {
        [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
        left++;
        right--;
    }

    return strArr.join('');
}
```

### Method 4 (Optimal - In-Place Reversal without Destructuring)
1) Use two pointers, one starting from the beginning and one from the end.
2) Swap characters at these pointers until they meet in the middle.
3) Join the array back into a string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the array `strArr`.
```javascript
function reverseStringInPlace(str) {
    const strArr = str.split('');
    let left = 0;
    let right = strArr.length - 1;

    while (left < right) {
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }

    return strArr.join('');
}
```

### Method 5 (Using String Slicing)
1) Use string slicing to reverse the input string.
2) Return the reversed string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the string `reversedStr`.
```javascript
function reverseStringInPlace(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
```

### Method 6 (Using String Substring)
1) Use string `substring` to reverse the input string character by character.
2) Return the reversed string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the string `reversedStr`.
```javascript
function reverseStringWithSubstring(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.substring(i, i + 1);
    }
    return reversedStr;
}
```

### Method 7 (Using String Slice)
1) Use string `slice` to reverse the input string character by character.
2) Return the reversed string.

**Time Complexity**: O(n) - where n is the length of the input string.  
**Space Complexity**: O(n) - extra space is required for the string `reversedStr`.
```javascript
function reverseStringWithSlice(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str.slice(i, i + 1);
    }
    return reversedStr;
}
```
