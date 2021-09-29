// class "vehicle" with constructor that takes in arguments (make,model,year)
class vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // information method
    information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// cars class
class Cars extends vehicle{
    constructor(make,model,year,doors){
        super(make, model, year);
        this.doors = doors;
    }
    information(){
        super.information();
        console.log(`Doors: ${this.doors}`);
    }
}

// let myVehicle = new Vehicle ('VW', 'GOLF', 1000)
// myVehicle.information();

// myCar variable with args 'VW', 'GOLF', '2011', '5'
let myCar = new Cars('VW', 'GOLF', 2011, 5);
myCar.information();