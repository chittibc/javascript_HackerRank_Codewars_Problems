// function getLetter(s) {
//   let letter;
//   // Write your code here
  
//   switch(s[0]){
//     case ('a'||'e'||'o'||'i'||'u'):
//       letter ="A";
//       break;
//     case ('b'||'c'||'d'||'f'||'g'):
//       letter = "B";
//       break;
//     case ('h'||'j'||'k'||'l'||'m'):
//       letter = "C";
//       break;
//     case ('n'||'p'||'q'||'r'||'s'||'t'||'v'||'w'||'x'||'y'||'z'):
//       letter ="D";
//       break;

//   }

//   return letter;
// }




function getLetter(s){

  let letter;
  switch(true){
    case /^[aeiou]{1}.*/i.test(s):
      letter ="A";
      break;
    case /^[bcdfg]{1}.*/i.test(s):
      letter ="B";
      break;
    case /^[hjklm]{1}.*/i.test(s):
      letter ="C";
      break;
    case /^[npqrstvwxyz]{1}.*/i.test(s):
      letter ="D";
      break;
    
  }
  return letter;

}


console.log(getLetter("rajesh"));