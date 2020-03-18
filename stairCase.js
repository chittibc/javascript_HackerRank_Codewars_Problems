// function staircase(n){
//   var a = "#";
//   var s ='';
// 	for(var i=1; i<=n; i++){
// 		s +=' '.repeat(n-i)+a.repeat(i)+'\n' ;
//   }
//   return s;
// }

function staircase(n) {
  if (n > 0 && n <= 100 && typeof n === "number" && n === parseInt(n, 0)) {
       for (let r = 1; r <= n; r++) {
            let blanks = [ ...[], ...Array(n - r) ].map(i => ' ');
            let hashes = [ ...[], ...Array(n - (n - r))].map(i => '#');
            console.log([
                 ...blanks,
                 ...hashes
            ].join(''));
       } 
  }
}
console.log(staircase(6));