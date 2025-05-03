{
    //
    var processInput = function (input) {
        if (typeof input === "string") {
            return input.length; // Return the length if input is a string
        }
        else if (typeof input === "number") {
            return input * input; // Return the square if input is a number
        }
        throw new Error("Invalid input type");
    };
    // Example usage:
    console.log(processInput("hello")); // Output: 5 (length of the string)
    console.log(processInput(4)); // Output: 16 (square of the number)
    //
}
