function birthdayCakeCandles(ar) {
  ar.sort((a,b)=> a-b);

  const max = ar[ar.length -1];
  return ar.filter(height => height === max ).length;

}


console.log(birthdayCakeCandles([3,2,2,6,6,3,1]))