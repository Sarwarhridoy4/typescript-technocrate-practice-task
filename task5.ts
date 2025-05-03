{
    //
    const reverseString = (input: string): string => {
        return input.split("").reverse().join("");
    };

    // Example usage:
    const input = "hello";
    const output = reverseString(input);
    console.log(`Input: "${input}"`);
    console.log(`Output: "${output}"`);
    //
}
