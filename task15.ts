{
  //
  const isString = (value: unknown): value is string => {
    return typeof value === "string";
  };

  const printUpperCase = (value: unknown): void => {
    if (isString(value)) {
      console.log(value.toUpperCase());
    } else {
      console.log("The value is not a string.");
    }
  };

  // Example usage:
  printUpperCase("hello"); // Output: "HELLO"
  printUpperCase(123); // Output: "The value is not a string."

  //
}
