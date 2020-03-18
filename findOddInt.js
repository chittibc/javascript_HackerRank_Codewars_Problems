function findOdd(A) {
  //happy coding!
  var n = [];
  A.forEach(num => {
    if (num % 2 != 0) {
      n.push(num);
    }
  });
  return n;
}

console.log([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
