// function rot13(str) {
//   var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//   var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
//   var index = x => input.indexOf(x);
//   var translate = x => (index(x) > -1 ? output[index(x)] : x);
//   return str
//     .split('')
//     .map(translate)
//     .join('');
// }
// console.log(rot13('Test'));

function rot13(str) {
  var input = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var output = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
  // var encode = en => {
  //   output[input.indexOf(en)];
  // };
  return str.replace(/[a-z]/gi, en => output[input.indexOf(en)]);
}

console.log(rot13('Test'));
