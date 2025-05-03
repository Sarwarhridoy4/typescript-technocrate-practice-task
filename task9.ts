{
  //
  type Employee = {
    name: string;
    address?: {
      city?: string;
    };
  };

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.address?.city;
  };

  // Example usage:
  const employee1: Employee = {
    name: "John Doe",
    address: {
      city: "New York",
    },
  };

  const employee2: Employee = {
    name: "Jane Smith",
  };

  console.log(getEmployeeCity(employee1)); // Output: "New York"
  console.log(getEmployeeCity(employee2)); // Output: undefined

  //
}
