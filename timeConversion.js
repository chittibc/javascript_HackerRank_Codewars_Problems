function timeConversion(s) {
  /*
   * Write your code here.
   */
  const arr = s.split(0,8).join(':');

  console.log("arr",arr);

  arr[0] = (s.indexOf('PM')>-1)? (arr[0]==12 ? '12':Number(arr[0])+12) : (arr[0]== 12 ? '00':arr[0]);

  
return arr.join(':');


}

function timeConversion(s) {
  const arr = s.slice(0,8).split(':');
  console.log("ARR", arr)
  arr[0] = (s.indexOf('PM')>-1)? (arr[0]==12 ? '12':Number(arr[0])+12) : (arr[0]== 12 ? '00':arr[0]);
  return arr.join(':');
}

console.log(timeConversion('07:05:45PM'));