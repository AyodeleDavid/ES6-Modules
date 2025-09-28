class Car {
  constructor(brand) {
    this.brand = brand;  // Instance variable
  }

  showBrand() {
    console.log(`This car is a ${this.brand}`);
  }
}

const myCar = new Car("Toyota");
myCar.showBrand(); // This car is a Toyota
