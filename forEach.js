function modifyArray(nums) {
 return nums.map(num => (num%2 === 0)? num*2:num*3);
}

console.log(modifyArray([1,2,4,5,6]));