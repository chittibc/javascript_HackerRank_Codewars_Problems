function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    grade = 'A';
  } else if (score > 20 && score <= 25) {
    grade = 'B';
  } else if (score > 15 && score <= 20) {
    grade = 'C';
  } else if (score > 10 && score <= 15) {
    grade = 'D';
  } else if (score > 5 && score <= 10) {
    grade = 'E';
  } else if (score > 0 && score <= 5) {
    grade = 'F';
  }

  return grade;
}

console.log(getGrade(22));
var arr = [1, 2, 3, 1, 2, 3, 4, 6, 76, 7, 8, 8, 9];
var max = arr.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);

console.log(Math.max.apply(null, arr));
