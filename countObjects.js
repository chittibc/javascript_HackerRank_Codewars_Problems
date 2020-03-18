function getCount(objects) {

  let count =0;
  for (let [key, value] of Object.entries(objects)){
      if(value.x === value.y){
        count++;
      }
    }
    console.log(count);
    return count; 
}


var hh = new getCount([{x : 1, y : 1}, {x : 2, y : 2}, {x : 3, y : 3}])