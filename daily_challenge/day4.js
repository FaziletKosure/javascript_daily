// Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

function three_numbers(x, y, z) {
    if (x == y && y == z) {
      return 30;
    }else if(x == y || y == z || z == x) {
      return 40;
    }
  
    return 20;
  }
  console.log(three_numbers(6, 6, 6));
  console.log(three_numbers(8, 8, 18));
  console.log(three_numbers(8, 7, 18));