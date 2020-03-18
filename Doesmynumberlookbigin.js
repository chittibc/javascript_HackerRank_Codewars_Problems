function narcissistic(value) {
  // Code me to return true or false
  var len = value.toString().length;
  var arr = value
    .toString()
    .split('')
    .map(Number);

  var num = 0;

  var n = arr.filter(function(number) {
    num += Math.pow(number, len);
  });
  if (num == value) {
    return true;
  } else {
    return false;
  }

  return num;
}

console.log(narcissistic(153));
