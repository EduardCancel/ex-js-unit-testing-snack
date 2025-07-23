// Snack 1
function getInitials(name) {
  const [nome, cognome] = name.split(" ").filter((str) => str !== "");
  return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}`;
}

// Snack 2
function createSlug(title) {
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

module.exports = {
  getInitials,
  createSlug,
  average,
};
