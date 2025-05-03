{
  //
  function logUserInfo(
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    if (role) {
      console.log(`Role: ${role}`);
    } else {
      console.log(`Role: not specified`);
    }
  }

  // Example usage:
  logUserInfo("Alice", 30, "admin");
  logUserInfo("Bob", 25);
  //
}
