function maskify(cc) {
    // If length is greater than 4, then we have things to mask
    if (cc.length > 4) {
        // reverse string
        let reversed = reverse(cc);
        let newString = '';
        for (let i = 0; i < reversed.length; i++) {
          // if i < 4, we want to reveal these numbers in our output
          if (i < 4) {
            newString += reversed[i];
          } else {
            // otherwise, just hide it
            newString += '#';
          }
        }
        // return the reversal of the string to revert it back to original format
        return reverse(newString);
    } else {
        return cc;
    }
  }
   
  function reverse(str) {
    return str.split("").reverse().join("");
  }
  console.log(maskify("4556364607935616"));
