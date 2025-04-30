export function rollDie(expression) {
  // expression = "1d6"
  // expression = "2d10"
  // expression = "1d6+1"
  // expression = "1d6 + 1"
  // expression = "1d6-1"
  // expression = "1d6 - 1"
  // expression = "1d6*2"
  // expression = "1d6 * 2"
  // expression = "1d6/2"
  // expression = "1d6 / 2"

  const parts = expression.split('d');
  const numberOfDice = parseInt(parts[0], 10);
  const sides = parseInt(parts[1], 10);

  if (Number.isNaN(sides) || sides <= 0) {
    throw new Error(`Invalid dice sides value: "${parts[1]}"`);
  }

  let total = 0;
  for (let i = 0; i < numberOfDice; i += 1) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

/**
 * Rolls on a table and returns the result.
 * @param {Object} table - The table to roll on.
 * @param {string} table.dice - The dice expression (e.g., "1d6").
 * @param {Array} table.entries - The entries of the table.
 * @param {string} table.name - The name of the table.
 * Each entry in table.entries should have:
 *   - {string} number: A single number or a range (e.g., "1" or "1-3").
 *   - {string} element: The result corresponding to the number or range.
 */
export function rollOnTable(table) {
  let result = '';
  const randomNumber = rollDie(table.dice);
  for (let i = 0; i < table.entries.length; i += 1) {
    const entry = table.entries[i];
    if (entry.number.includes('-')) {
      const range = entry.number.split('-');
      const lowEnd = parseInt(range[0], 10);
      const highEnd = parseInt(range[1], 10);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        result = entry.element;
      }
    } else if (parseInt(entry.number, 10) === randomNumber) {
      result = entry.element;
    }
  }
  const fullResult = `Roll on ${table.name}: ${result} (${randomNumber})`;
  return fullResult;
}