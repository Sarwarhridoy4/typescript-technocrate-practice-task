{
    var describeAdmin = function (user) {
        return "Admin Name: ".concat(user.name, ", Email: ").concat(user.email, ", Admin Level: ").concat(user.adminLevel);
    };
    // Example usage:
    var admin = {
        name: "Alice",
        email: "alice@example.com",
        adminLevel: 5,
    };
    console.log(describeAdmin(admin)); // Output: Admin Name: Alice, Email: alice@example.com, Admin Level: 5
    //
}
