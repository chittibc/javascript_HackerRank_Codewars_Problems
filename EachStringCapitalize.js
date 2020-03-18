// let toJadenCase = name => {
//   //...
//   return name.split(' ').map(str => {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   });
// };

// toJadenCase('rajesh Kalakoti');
// // console.log(upper);

String.prototype.toJadenCase = function() {
  //...
  return this.split(' ')
    .map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(' ');
};

var str = "How Can Mirrors Be Real If Our Eyes Aren't Real', instead got";
console.log(str.toJadenCase());
