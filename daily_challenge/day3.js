function reverseIt(str) {
  let rev_str = "";
  for (i in str) {
    rev_str = str[i] + rev_str;
  }
  console.log(rev_str);
  return rev_str;
}
reverseIt("fazilet");
