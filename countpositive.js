var input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

var x = input.filter(num => num > 0);
var y = input.filter(num => num < 0);
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var x1 = x.length
  .toString()
  .split(' ')
  .map(Number);
var x2 = y
  .reduce(reducer)
  .toString()
  .split(' ')
  .map(Number);

console.log(x1);
console.log(x2);

console.log(typeof x2);

console.log([...x1, ...x2]);

var str = 'raaajeeeesssssh';

var newStr = str.split('').filter(function(x, n, s) {
  return s.indexOf(x) == n;
});

console.log(newStr);
