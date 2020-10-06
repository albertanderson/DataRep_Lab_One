class Vehicle {

    constructor(make, model, year){  //constructor
        this.make = make;
        this.model = model;
        this.year = year;

    }

    //method
    Information(){
        console.log(`Make: ${this.make}.`) 
        console.log(`model: ${this.model}.`)
        console.log(`year: ${this.year}.`);
    }
}

class Cars extends Vehicle{ //inherets class vehicle

    constructor(make, model, year, doors){
        super(make, model, year);   //envoke parent
        this.doors = doors;    
    }

    Information(){  // envoke info class 
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }


}

let myCar = new Cars('VW', 'Passat', 2020, 5);
myCar.Information();
//let myVehicle = new Vehicle('VW','Golf', 2000 ) //instance
//myVehicle.information();
