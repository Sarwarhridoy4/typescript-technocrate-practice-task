{
  const handleError = (message: string): never => {
    throw new Error(message);
  };

  // Example usage:
  try {
    handleError("Something went wrong!");
  } catch (error) {
    console.error(error.message); // Output: "Something went wrong!"
  }
}
