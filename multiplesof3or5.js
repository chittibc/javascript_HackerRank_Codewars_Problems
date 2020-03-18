function solution(number) {
  let sum = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
function fizzBuzz(n) {
  // Write your code here
  
  for(var i =0;i<=n;i++){
    if((i%3 ===0) &&(i%5 ===0) )
      console.log("fizzbuzz");
    else if(i%3 ==0){
      console.log("buzz")
    }
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
  }
}

console.log(fizzBuzz(15));
