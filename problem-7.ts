{
  // Problem-7: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

  class Car {
    public make: string;
    public model: string;
    public year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge() {
      return 2024 - this.year;
    }
  }

  // simple input
  const car = new Car("Honda", "Civic", 2021);
  car.getCarAge();

  //
}
