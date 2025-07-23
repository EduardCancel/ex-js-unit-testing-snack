const { getInitials } = require("./snack.js");

// Snack 1
test("La funzione getInitials restituisce le iniiziali di un nome completo", () => {
  expect(getInitials("John Doe")).toBe("J.D");
});
