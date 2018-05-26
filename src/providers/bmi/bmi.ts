import { Injectable } from '@angular/core';
import { BMI } from "../../models/bmi.models";

@Injectable()
export class BmiProvider {

  calculateBMI(height : number, weight : number){
    const BMI =  weight / height / height;

    return <BMI>{
      BMI : BMI.toFixed(2),
      clasification: this.classifyBmi(BMI)
    }
  }
  private classifyBmi(BMI : number){
    if (BMI < 18.5){
      return 'Under Weight';
    } else  if (BMI > 18.5 && BMI < 24.9){
      return 'Normal Weight';
    }else  if (BMI > 25 && BMI < 29.9){
      return 'Over Weight';
    }else  if (BMI > 30 && BMI < 34.9){
      return 'Class 1 obesity';
    }else  if (BMI > 35 && BMI < 39.9){
      return 'Class 2 obesity';
    }else  if (BMI > 40 ){
      return 'Class 3 obesity';
    }
  }

}
