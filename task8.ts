{
  //
  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: number;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser): string => {
    return `Admin Name: ${user.name}, Email: ${user.email}, Admin Level: ${user.adminLevel}`;
  };

  // Example usage:
  const admin: AdminUser = {
    name: "Alice",
    email: "alice@example.com",
    adminLevel: 5,
  };

  console.log(describeAdmin(admin)); // Output: Admin Name: Alice, Email: alice@example.com, Admin Level: 5
  //
}
