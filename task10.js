{
    //
    var getDisplayName = function (name) {
        return name !== null && name !== void 0 ? name : "Anonymous";
    };
    // Example usage:
    console.log(getDisplayName("Alice")); // Output: "Alice"
    console.log(getDisplayName(null)); // Output: "Anonymous"
    console.log(getDisplayName(undefined)); // Output: "Anonymous"
    //
}
