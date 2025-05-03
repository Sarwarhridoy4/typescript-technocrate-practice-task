# Practice Task Project

This project contains various TypeScript tasks designed to help you practice and improve your TypeScript skills. Each task focuses on a specific concept, such as functions, object types, union and intersection types, and more.

---

## Project Structure

The project is organized into multiple TypeScript files, each corresponding to a specific task:

1. **task1.ts**: A simple script to log motivational messages.
2. **task2.ts**: Demonstrates functions with optional and literal types.
3. **task3.ts**: Defines a structured `Person` object using type aliases and literal types.
4. **task4.ts**: Explores union and intersection types using interfaces.
5. **task5.ts**: Implements a function to reverse a string.
6. **task6.ts**: Uses the rest operator to sum variable-length arguments.
7. **task7.ts**: Demonstrates type narrowing with `string | number`.
8. **task8.ts**: Combines types using intersection types.
9. **task9.ts**: Uses optional chaining to safely access nested properties.
10. **task10.ts**: Handles null and undefined values using nullish coalescing.
11. **task11.ts**: Handles different types with the `unknown` type.
12. **task12.ts**: Demonstrates the `never` type for functions that don’t return.
13. **task13.ts**: Uses generics to remove duplicates from an array.
14. **task14.ts**: Simulates an asynchronous operation with TypeScript.
15. **task15.ts**: Implements custom type guards for accurate type checking.
16. **task16.ts**: Dynamically accesses object properties using `keyof`.

---

## File Descriptions

### 1. `task1.ts`

This file contains a basic script that logs motivational messages to the console.

**Code Example**:

```typescript
console.log(
  "Hello World, I will complete this course successfully and become a Next level Web Developer!"
);
console.log("I am learning TypeScript and I love it!");
```

### 2. `task2.ts`

This file demonstrates functions with optional and literal types.

**Code Example**:

```typescript
function logUserInfo(
  name: string,
  age: number,
  role?: "admin" | "user" | "guest"
): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Role: ${role ?? "not specified"}`);
}

logUserInfo("Alice", 30, "admin");
logUserInfo("Bob", 25);
```

### 3. `task3.ts`

This file defines a structured `Person` object using type aliases and literal types.

**Code Example**:

```typescript
type Person = {
  name: string;
  address: string;
  hairColor: "black" | "brown" | "blonde" | "red" | "gray" | "other";
  eyeColor: "brown" | "blue" | "green" | "hazel" | "gray" | "other";
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: { name: string; relation: string }[];
  job: { title: string; company: string; yearsOfExperience: number };
  skills: string[];
  maritalStatus: "single" | "married" | "divorced" | "widowed";
  friends: { name: string; contact: string }[];
};

const examplePerson: Person = {
  name: "John Doe",
  address: "123 Main Street",
  hairColor: "black",
  eyeColor: "brown",
  income: 50000,
  expense: 20000,
  hobbies: ["reading", "traveling", "gaming"],
  familyMembers: [
    { name: "Jane Doe", relation: "spouse" },
    { name: "Jimmy Doe", relation: "child" },
  ],
  job: {
    title: "Software Engineer",
    company: "TechCorp",
    yearsOfExperience: 5,
  },
  skills: ["JavaScript", "TypeScript", "React"],
  maritalStatus: "married",
  friends: [
    { name: "Alice", contact: "alice@example.com" },
    { name: "Bob", contact: "bob@example.com" },
  ],
};

console.log(examplePerson);
```

This is a partial [README.md](http://_vscodecontentref_/1) file with detailed documentation for the first few tasks. Let me know if you'd like the rest of the tasks to be included in the same format!
