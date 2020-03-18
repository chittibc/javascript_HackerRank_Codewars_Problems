function sockMerchant(n,arr){
  //socks.sort((a,b)=> a-b);
  var counter =0;
  for(var i=0;i<n;i++){
    if(arr[i]=== arr[i+1]){
      counter++;
      i++;
    }
  }
  return counter;
}

console.log(socksForSale(9,[1,1,1,3,4,4,1,2,2]));
