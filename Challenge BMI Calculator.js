function bmiCalculator(weight,height){
    var bmi=weight/(height*height);
    return Math.round(bmi);
   }
   var bmi=bmiCalculator(90,1.83);
   console.log(bmi);