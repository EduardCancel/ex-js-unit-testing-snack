// Snack 1
function getInitials(name) {
  const [nome, cognome] = name.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2 - 4
function createSlug(title) {
  if (!title) {
    throw new Error("Il titolo non può essere vuoto");
  }
  return title.toLowerCase().replace(" ", "-");
}

// Snack 3
function average(numbers) {
  let sum = 0;
  numbers.forEach((num) => {
    sum += num;
  });
  return sum / numbers.length;
}

// Snack 5
function isPalindrome(parola) {
  const parolaInversa = parola.split("").reverse().join("");
  return parola === parolaInversa;
}

// Snack 7
function findPostById(posts, id) {
  return posts.find((post) => post.id === id);
}

module.exports = {
  getInitials,
  createSlug,
  average,
  findPostById,
  isPalindrome,
};
