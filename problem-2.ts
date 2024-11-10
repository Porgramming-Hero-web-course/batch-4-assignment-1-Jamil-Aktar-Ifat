{
  // Problem-2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  const removeDuplicates = (array: number[]): number[] => {
    let newArray: number[] = [];
    for (let num of array) {
      if (!newArray.includes(num)) {
        newArray.push(num);
      }
    }
    // console.log(newArray); // for test the code
    return newArray;
  };

  removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  //
}
