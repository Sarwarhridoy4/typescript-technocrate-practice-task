{
  //
  const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
    return obj[key];
  };

  // Example usage:
  const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
  };

  console.log(getProperty(user, "name")); // Output: "Alice"
  console.log(getProperty(user, "age")); // Output: 25
  console.log(getProperty(user, "email")); // Output: "alice@example.com"
  //
}
