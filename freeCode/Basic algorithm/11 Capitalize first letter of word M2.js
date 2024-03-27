// METHOD 2

function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(curr =>curr[0].toUpperCase() + curr.slice(1))
    .join(" ");
}

// Example usage
console.log(titleCase("I'm a little tea pot"));

// logic
/* 
 1) i have to return the first letter as capital for ex -- "short"
should return Short .(in this every first letter of the word is capital)

Steps
(method 2)

1)make every word in lower case .
2) we will then use split method to get individual word (we will get on different index).
3) we will then use map method to capitalize every 1st letter on every word on each index.
4) then we will use join method to join them back.
*/
