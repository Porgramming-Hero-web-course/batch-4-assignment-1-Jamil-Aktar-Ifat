Type Guards in TypeScript are techniques that help narrow down a variable’s type within a specific block of code, allowing for type-specific operations. These type guards help typescript to understand which variable type when dealing with union types (e.g., string | number | boolean). This type-specific operation prevents the cause of runtime error safely by checking the variable type. 

Type guards are necessary for several reasons:
Type Safety in Union Types: Type guards allow TypeScript to identify the exact type of a variable, which is crucial when using union types like string | number | boolean. This makes it possible to safely perform operations that are specific to each type.
Runtime Error Prevention: Not all types in TypeScript are known at compile time, especially when dealing with dynamic data like API responses or user inputs. Type guards provide runtime checks to ensure values have the expected type, reducing unexpected behaviours or errors.
Predictable and Maintainable Code: By verifying types at runtime, type guards make code easier to read, more predictable, and easier to maintain.
Enhanced Type Inference: Type guards help TypeScript infer more precise types, minimising the need for manual type assertions and allowing the compiler to catch more potential errors before runtime.
Overall, type guards are a powerful feature in TypeScript that enhances both the reliability and readability of your code, making it easier to manage complex type scenarios and preventing a range of common type-related errors. 

Here is some of coding examples what will help to understand more of Type Guards in TypeScript--> 


1. typeof is used to check the type of a value at runtime. It works well for primitive types but is not helpful for objects or arrays. Example: 
{
  // typeof Type Guard
  const printLength = (value: string | number) => {
    if (typeof value === "string") {
      console.log("String length:", value.length); // Safe to access length
    } else {
      console.log("Number:", value); // No length property on number
    }
  };

  //
}

2. The instanceof operator checks if an object is an instance of a particular class, which is useful when you want to narrow down a union type of class instances. Example: 
{
  // instanceof Type Guard
  class Dog {
    bark() {
      console.log("Woof!");
    }
  }

  class Cat {
    meow() {
      console.log("Meow!");
    }
  }

  const makeNoise = (animal: Dog | Cat) => {
    if (animal instanceof Dog) {
      animal.bark(); // Safe to call bark
    } else {
      animal.meow(); // Safe to call meow
    }
  };

  //
}
3. Custom type guard functions use the is keyword in their return type to signal to TypeScript what type is being asserted. Example: 

{
  // instanceof Type Guard
  interface Fish {
    swim: () => void;
  }

  interface Bird {
    fly: () => void;
  }

  const isFish = (animal: Fish | Bird): animal is Fish => {
    return (animal as Fish).swim !== undefined;
  };

  const move = (animal: Fish | Bird) => {
    if (isFish(animal)) {
      animal.swim(); // Safe to call swim
    } else {
      animal.fly(); // Safe to call fly
    }
  };

  //
}
4. The in operator checks if a property exists on an object, making it helpful when distinguishing between union types that have unique properties. Example: 
{
  // in operator Type Guard
  type Circle = { radius: number };
  type Rectangle = { width: number; height: number };

  const calculateArea = (shape: Circle | Rectangle) => {
    if ("radius" in shape) {
      return Math.PI * shape.radius ** 2; // Safe to use radius
    } else {
      return shape.width * shape.height; // Safe to use width and height
    }
  };

  //
}

5. Discriminated unions leverage a common property, typically with literal values (e.g., "type": "circle" | "square"), which makes it easy to narrow down the type.
{
  //  Discriminated Union Type Guards
  interface Circle {
    type: "circle";
    radius: number;
  }

  interface Square {
    type: "square";
    side: number;
  }

  type Shape = Circle | Square;

  const calculateShapeArea = (shape: Shape) => {
    switch (shape.type) {
      case "circle":
        return Math.PI * shape.radius ** 2;
      case "square":
        return shape.side ** 2;
    }
  };

  //
}
