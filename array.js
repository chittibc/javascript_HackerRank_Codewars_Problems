function getSecondLargest(nums) {
  // Complete the function

  var maxNum = Math.max.apply(null, nums);
  nums.splice(nums.indexOf(maxNum), 2);
  return Math.max.apply(null, nums);
}

console.log(getSecondLargest([20, 120, 111, 215, 215, 54, 78]));
