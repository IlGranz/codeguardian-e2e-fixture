// Piccolo modulo di esempio con violazioni INTENZIONALI della policy,
// usato solo per verificare che l'Agente Security le rilevi.

// Violazione regola 1: segreto hardcoded.
const API_KEY = "sk-live-51H8xJ2eZvKYlo2C0hardcoded_fake_key_example";

function runUserCode(userInput) {
  // Violazione regola 2: eval su input non fidato.
/**
 * Executes user-provided input as JavaScript code using eval.
 * 
 * @param {string} userInput - The JavaScript code to evaluate.
 * @returns {*} The result of the evaluated code.
 * 
 * @note This function is intentionally unsafe and violates security policies.
 */
  return eval(userInput);
}

function findUser(db, username) {
  // Violazione regola 3: concatenazione di stringhe in una query.
/**
 * Fetches a user from the database based on the provided username.
 * 
 * @param {Object} db - The database connection or ORM instance.
 * @param {string} username - The username to search for in the database.
 * @returns {*} The result of the database query.
 * 
 * @note This function is intentionally unsafe due to string concatenation
 * in the SQL query and violates security policies.
 */
  const query = "SELECT * FROM users WHERE username = '" + username + "'";
  return db.query(query);
}

module.exports = { runUserCode, findUser, API_KEY };