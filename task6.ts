{
  //
  const sumAll = (...numbers: number[]): number =>
    numbers.reduce((total, num) => total + num, 0);

  // Example usage:
  const result = sumAll(1, 2, 3, 4, 5);
  console.log(`The sum is: ${result}`);

  //
}
