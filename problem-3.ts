{
  // Problem-3:  Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (sentence: string, word: string): number => {
    let count: number = 0;
    const array: string[] = sentence.split(" ");
    array.forEach((element) => {
      if (element.toLowerCase() === word.toLowerCase()) {
        count += 1;
      }
    });

    // console.log(count);  // for test the code
    return count;
  };

  countWordOccurrences("my name is jamil", "JaMiL");
  //
}
