const { getInitials, createSlug } = require("./snack.js");

// Snack 1
test("La funzione getInitials restituisce le iniiziali di un nome completo", () => {
  expect(getInitials("John Doe")).toBe("J.D");
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase,", () => {
  expect(createSlug("Hello World")).toBe("hello world");
});
