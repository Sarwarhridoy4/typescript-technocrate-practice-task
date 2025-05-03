{
    var handleError = function (message) {
        throw new Error(message);
    };
    // Example usage:
    try {
        handleError("Something went wrong!");
    }
    catch (error) {
        console.error(error.message); // Output: "Something went wrong!"
    }
}
