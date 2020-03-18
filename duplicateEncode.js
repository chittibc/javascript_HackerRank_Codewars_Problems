function duplicateEncode(word) {
  // ...
  var str = '';
  var loweCaseWord = word.toLowerCase();

  for (var i = 0; i < loweCaseWord.length; i++) {
    if (
      loweCaseWord.indexOf(loweCaseWord[i]) ===
      loweCaseWord.lastIndexOf(loweCaseWord[i])
    ) {
      str += '(';
    } else {
      str += ')';
    }
  }
  return str;
}

console.log(duplicateEncode('recede'));

