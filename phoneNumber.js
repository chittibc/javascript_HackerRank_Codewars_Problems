function createPhoneNumber(numbers) {
  var str = numbers.join('');
  return `(${str.substr(0, 3)}) ${str.substr(3, 3)}-${str.substr(6)}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
