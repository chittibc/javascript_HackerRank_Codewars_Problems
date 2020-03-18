function plusMinus(arr) {
  const n = arr.length || 0;
var positive = 0;
var negative =0;
var zero =0
var x= arr.map(a => {
  if(a>0){
    positive++;
  }else if(a<0){
    negative++
  }else{
    zero++
  }
});
return [(positive/n).toFixed(6),(negative/n).toFixed(6),(zero/n).toFixed(6)];
}


console.log(plusMinus([-4,3,-9,0,4,1]));