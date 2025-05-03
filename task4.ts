{
  //
  interface Book {
    title: string;
    author: string;
    pages: number;
    genre: string;
  }

  interface Magazine {
    title: string;
    issueNumber: number;
    publisher: string;
  }

  // Union type: A value can be either a Book or a Magazine
  type BookOrMagazine = Book | Magazine;

  // Intersection type: A value must have properties of both Book and Magazine
  type BookAndMagazine = Book & Magazine;

  // Example usage of the union type
  const exampleUnion: BookOrMagazine = {
    title: "Tech Monthly",
    issueNumber: 42,
    publisher: "Tech Publishers",
  };

  // Example usage of the intersection type
  const exampleIntersection: BookAndMagazine = {
    title: "Science Digest",
    author: "Jane Doe",
    pages: 120,
    genre: "Science",
    issueNumber: 15,
    publisher: "Science Publishers",
  };

  console.log(exampleUnion);
  console.log(exampleIntersection);
  //
}
