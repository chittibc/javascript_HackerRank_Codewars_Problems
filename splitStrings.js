function solution(str) {
  return (str.length % 2 ? str.concat('_') : str).match(/../g);
}

console.log(solution('abb'));
