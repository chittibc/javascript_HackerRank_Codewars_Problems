class Polygon{
  constructor(arr){
    this.arr = arr;
  }
  perimeter (){
    return this.arr.reduce((prev,next) => prev+next);
  } 
}


const rectangle = new Polygon([10, 20, 10, 20]);


console.log(rectangle.perimeter());