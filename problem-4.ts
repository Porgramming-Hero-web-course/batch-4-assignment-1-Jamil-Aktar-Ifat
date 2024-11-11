{
  // Problem-4:  Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

  type Circle = { shape: "circle"; radius: number };
  type Rectangle = { shape: "rectangle"; width: number; height: number };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      const area = Math.PI * shape.radius * shape.radius;
    //   console.log(parseFloat(area.toFixed(2)));
      return parseFloat(area.toFixed(2));
    } else if (shape.shape === "rectangle") {
      const area = shape.width * shape.height;
    //   console.log(parseFloat(area.toFixed(2)));
      return parseFloat(area.toFixed(2));
    } else {
      throw new Error("error");
    }
  };
  // Sample Input 1:
  calculateShapeArea({ shape: "circle", radius: 5 });

  // Sample Input 2:
  calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  //
}
