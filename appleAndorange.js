function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = apples.filter(val => val + a >= s && val + a <= t).length;
  let orangeCount = oranges.filter(val => val + b >= s && val + b <= t).length; 

  console.log(appleCount);
  console.log(orangeCount);
}



console.log(countApplesAndOranges(7,11,5,15,[3,2,-2,1],[-2,2,1,5,+6]));
