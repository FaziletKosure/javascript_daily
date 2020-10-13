// 2 Ways to Merge Arrays

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

// Method 1: Concat
const combined1 = [].concat(cars, trucks);
console.log(combined1);

// Method 2: Spread
const combined2 = [...cars, ...trucks];
console.log(combined2);

// Result
// [ '🚗', '🚙', '🚚', '🚛' ]