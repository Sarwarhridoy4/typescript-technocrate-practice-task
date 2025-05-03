{
    var getEmployeeCity = function (employee) {
        var _a;
        return (_a = employee.address) === null || _a === void 0 ? void 0 : _a.city;
    };
    // Example usage:
    var employee1 = {
        name: "John Doe",
        address: {
            city: "New York",
        },
    };
    var employee2 = {
        name: "Jane Smith",
    };
    console.log(getEmployeeCity(employee1)); // Output: "New York"
    console.log(getEmployeeCity(employee2)); // Output: undefined
    //
}
