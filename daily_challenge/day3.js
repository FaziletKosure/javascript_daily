function reverseIt(str) {
  let rev_str = "";
  for (i in str) {
    rev_str = str[i] + rev_str;
  }
  console.log(rev_str);
  return rev_str;
}
reverseIt("fazilet");

// for(i of str)
function reverseItMe(s) {
  let rev_s = "";
  for (i of s) {
    rev_s = i + rev_s;
  }
  console.log(rev_s);
  return rev_s;
}
reverseItMe("I love you");
