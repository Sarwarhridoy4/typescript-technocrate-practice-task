{
    //
    var isString_1 = function (value) {
        return typeof value === "string";
    };
    var printUpperCase = function (value) {
        if (isString_1(value)) {
            console.log(value.toUpperCase());
        }
        else {
            console.log("The value is not a string.");
        }
    };
    // Example usage:
    printUpperCase("hello"); // Output: "HELLO"
    printUpperCase(123); // Output: "The value is not a string."
    //
}
