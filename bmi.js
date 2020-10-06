class BMI {
    constructor(height, weight){ // first method called
        this.height = height;
        this.weight = weight;

    }

    calculateBMI(){
        let bmi = this.weight/(this.height**2); //calculate bmi return bmi
        return bmi;
    }
}

let myBMI = new BMI(2, 90);  //object
console.log(myBMI.calculateBMI());