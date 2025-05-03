function logUserInfo(name, age, role) {
    console.log("Name: ".concat(name));
    console.log("Age: ".concat(age));
    if (role) {
        console.log("Role: ".concat(role));
    }
    else {
        console.log("Role: not specified");
    }
}
// Example usage:
logUserInfo("Alice", 30, "admin");
logUserInfo("Bob", 25);
