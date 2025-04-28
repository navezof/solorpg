export function rollDie(expression) {
  const parts = expression.split('d');
  const numberOfDice = parseInt(parts[0], 10);
  const sides = parseInt(parts[1], 10);
  let total = 0;

  for (let i = 0; i < numberOfDice; i += 1) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

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
    } else if (entry.number === randomNumber) {
      result = entry.element;
    }
  }
  const fullResult = `Roll on ${table.name}: ${result} (${randomNumber}) `;
  return fullResult;
}
