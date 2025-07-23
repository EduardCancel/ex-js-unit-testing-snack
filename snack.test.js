const {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById,
} = require("./snack.js");

// Snack 1
test("La funzione getInitials restituisce le iniiziali di un nome completo", () => {
  expect(getInitials("John Doe")).toBe("J.D");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase,", () => {
  expect(createSlug("Hello World")).toBe("hello-world");
});

// Snack 3
test('La funzione "average" calcola la media aritmetica di un array di numeri', () => {
  expect(average([10, 20])).toBe(15);
});

// Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
  expect(createSlug("Hello World")).toBe("hello-world");
});

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
  expect(isPalindrome("radar")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
});

// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
  expect(() => {
    createSlug("");
  }).toThrow("Il titolo non può essere vuoto");
  expect(() => {
    createSlug(null);
  }).toThrow("Il titolo non può essere vuoto");
});

// Snack 7
test(`La funzione findPostById restituisce il post corretto dato l'array di post e l'id`, () => {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
  ];
  expect(findPostById(posts, 1)).toEqual({ id: 1, title: "Post 1" });
});
