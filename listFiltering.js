function filter_list(l) {
  // Return a new array with the strings filtered out
  return l.filter(str => {
    return typeof str === 'number';
  });
}

console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
