// Snack 1
function getInitials(name) {
  const [nome, cognome] = name.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2
function createSlug(title) {
  return title.toLowerCase();
}

module.exports = {
  getInitials,
  createSlug,
};
