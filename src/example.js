// Piccolo modulo di esempio con violazioni INTENZIONALI della policy,
// usato solo per verificare che l'Agente Security le rilevi.

// Violazione regola 1: segreto hardcoded.
const API_KEY = "sk-live-51H8xJ2eZvKYlo2C0hardcoded_fake_key_example";

function runUserCode(userInput) {
  // Violazione regola 2: eval su input non fidato.
  return eval(userInput);
}

function findUser(db, username) {
  // Violazione regola 3: concatenazione di stringhe in una query.
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  return db.query(query);
}

module.exports = { runUserCode, findUser, API_KEY };