const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = (stats) => (stats.max + stats.min) / 2.0; 
//receiving entire obj
const half = ({max, min}) => (max + min) / 2.0; 
// doing destructuring of object.

// we don't need to write const let in the parameter as when we do object or array destructuring in function parameter.This is because the destructuring assignment itself creates new variables within the function scope, so we don't need to explicitly declare them.

half( stats);

console.log(half(stats))