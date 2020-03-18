
function diagonalDifference(arr) {
  // Write your code here
    var n = arr.length;
    var diagn1 = 0;
    var diagn2 = 0;

  for(var i =0;i<n;i++){
    for(var j=0;j<n;j++){
      if(i ===j){
        diagn1 += arr[i][j];
      }
      if(i+j === n-1){
        diagn2 += arr[i][j];
      }
    }
  }
  return Math.abs(diagn1-diagn2);
}
console.log(diagonalDifference([1,2,3,4,5,6,9,8,9]));