{
  // Question-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  const sumArray = (array: number[]): number => {
    let sum: number = 0;
    for (let num of array) {
      sum += num;
    }
    // console.log(sum); // for test in the terminal
    return sum;
  };

  sumArray([1, 2, 3, 4, 5]);
  //
}
