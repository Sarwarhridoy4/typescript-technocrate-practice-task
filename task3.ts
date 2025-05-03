{
  //
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

  // Example usage:
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
  //
}
