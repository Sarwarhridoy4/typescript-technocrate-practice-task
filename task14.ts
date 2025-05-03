{
  //
  type UserData = {
    name: string;
    age: number;
  };

  const fetchUserData = async (): Promise<UserData> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: "John Doe", age: 30 });
      }, 1000); // Simulates a 1-second delay
    });
  };

  // Example usage:
  fetchUserData().then((data) => {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
  });

  //
}
