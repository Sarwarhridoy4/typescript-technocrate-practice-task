{
  //
  const processData = (data: unknown): string | number | undefined => {
    if (typeof data === "string") {
      return data.toUpperCase(); // Return the uppercased version if data is a string
    } else if (typeof data === "number") {
      return data * data; // Return the square if data is a number
    }
    return undefined; // Return undefined for other types
  };

  // Example usage:
  console.log(processData("hello")); // Output: "HELLO"
  console.log(processData(4)); // Output: 16
  console.log(processData(true)); // Output: undefined
  console.log(processData(null)); // Output: undefined
  console.log(processData(undefined)); // Output: undefined
  console.log(processData({})); // Output: undefined

  //
}
