{
    //
    const getDisplayName = (name: string | null | undefined): string =>
        name ?? "Anonymous";
      
      // Example usage:
      console.log(getDisplayName("Alice")); // Output: "Alice"
      console.log(getDisplayName(null)); // Output: "Anonymous"
      console.log(getDisplayName(undefined)); // Output: "Anonymous"
      
    //
}