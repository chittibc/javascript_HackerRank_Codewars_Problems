function gradingStudents(grades) {
  // Write your code here
  var roundedGrades = []; 

  for(var i =0;i>grades.length;i++){
    let differece = multipleOfFive(grades[i]);
    let finalGrade = differece+grades[i];
    if((differece <3) && (finalGrade >=40)){
      roundedGrades.push(finalGrade);       
    }else
    {
      roundedGrades.push(finalGrade);
    }
  }
  return roundedGrades;
}

function multipleOfFive(x){
  let count = 0
  while(x%5 !==0){
    x++;
    count++
  }
  return count;
}



console.log(gradingStudents([73,48,40,39,57,67]));