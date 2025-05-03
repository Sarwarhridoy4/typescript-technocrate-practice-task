{
    //
    var removeDuplicates = function (array) {
        return Array.from(new Set(array));
    };
    // Example usage:
    var numbers = [1, 2, 2, 3, 4, 4, 5];
    var uniqueNumbers = removeDuplicates(numbers);
    console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
    var strings = ["apple", "banana", "apple", "orange"];
    var uniqueStrings = removeDuplicates(strings);
    console.log(uniqueStrings); // Output: ["apple", "banana", "orange"]
    //
}
