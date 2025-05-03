{
    //
    var getProperty = function (obj, key) {
        return obj[key];
    };
    // Example usage:
    var user = {
        name: "Alice",
        age: 25,
        email: "alice@example.com",
    };
    console.log(getProperty(user, "name")); // Output: "Alice"
    console.log(getProperty(user, "age")); // Output: 25
    console.log(getProperty(user, "email")); // Output: "alice@example.com"
    //
}
