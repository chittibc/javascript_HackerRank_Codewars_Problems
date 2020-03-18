function miniMaxSum(arr) {

  var sortArray = arr.sort((a,b) => a-b);
  var maxArr = sortArray.slice(1); 

  var minArr = sortArray.slice(0,-1);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(minArr.reduce(reducer),maxArr.reduce(reducer))
}


console.log(miniMaxSum([1,2,3,4,5]))