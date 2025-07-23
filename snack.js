function getInitials(name) {
  const [nome, cognome] = name.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

module.exports = {
  getInitials,
};
