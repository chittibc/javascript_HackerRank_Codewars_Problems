function removeDuplicateWords(s) {
  // your perfect code...
  return s.replace(/(\b\S.+\b)(?=.*\1)/g, '').trim();
}

console.log(
  removeDuplicateWords(
    'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
  )
);
var string =
  'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta';
var duplicateWords = string
  .split(' ')
  .filter(function(word, ind, wordArray) {
    return ind == wordArray.indexOf(word);
  })
  .join(' ');

console.log(duplicateWords);

function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return c;
    }
  }
  return null;
}

console.log(firstNonRepeatedCharacter('stress'));

function firstNonRepeatingLetter(s) {
  // Add your code here

  for (var i = 0; i < s.length; i++) {
    var ind = s.charAt(i);
    if (s.indexOf(ind) == i && s.indexOf(c, i + 1) == -1) {
      return ind;
    }
  }
  return null;
}
