// challenge 1
function digital_root(n) {
  // ...
  return 1 + ((n - 1) % 9);
}

str = digital_root(942);
console.log(str);
