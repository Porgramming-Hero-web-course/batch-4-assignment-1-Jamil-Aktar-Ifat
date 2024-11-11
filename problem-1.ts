{
  // Question-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (array: number[]): number => {
    let sum: number = 0;
    array.forEach((num) => (sum += num));
    return sum;
  };

  sumArray([1, 2, 3, 4, 5]);

  
  //
}
