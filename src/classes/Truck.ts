// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  // The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number,
    wheels: Wheel[],
  ) {
    // Call the constructor of the parent class, Vehicle
    super();
    // Initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    // Check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck): void {
    // Get the make an model of the vehicle if it exists
    if (vehicle.make && vehicle.model) {
      // Check if the vehicle's weight is less than or equal to the truck's towing capacity
      if (vehicle.weight <= this.towingCapacity) {
        // If it is, log that the vehicle is being towed
        console.log(`Towing ${vehicle.make} ${vehicle.model}`);
      } else {
        // If it is not, log that the vehicle is too heavy to be towed
        console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed`);
      }
    } else {
      console.log('Vehicle make and model not found');
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // The method should call the printDetails method of the parent class
    super.printDetails();
    // The method should log the details of the Truck
    // The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    console.log(`Vin: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    
    // Print details of the wheels
    for (let i = 0; i < this.wheels.length; i++) {
      console.log(`Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`);
    }
  }
}

// Export the Truck class as the default export
export default Truck;
