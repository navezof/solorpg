import { tables } from './table';
import isIterable from './utils';
import { createRollOnTableButton } from './journal';
import { rollDie } from './roll';

export function parseTable(expression) {
  console.log(`parseForTable: ${expression}`);
  const content = [];

  const openIndex = expression.indexOf('{');
  const closeIndex = expression.indexOf('}');

  const before = expression.substring(0, openIndex);
  const tableName = expression.substring(openIndex + 1, closeIndex);
  const after = expression.substring(closeIndex + 1);

  const table = tables.find((t) => t.name === tableName);
  let button = null;
  if (!table) {
    console.error(`Table ${tableName} not found`);
  } else {
    button = createRollOnTableButton(table);
  }

  content.push(document.createTextNode(before));
  content.push(document.createTextNode(tableName));
  if (button) {
    content.push(button);
  }
  if (isIterable(after)) {
    content.push(...parseExpression(after));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}

export function parseExpression(expression) {
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === '{') {
      return parseTable(expression);
    } if (expression[i] === '[') {
      return parseDie(expression);
    }
  }
  return [document.createTextNode(expression)];
}

export function parseDie(expression) {
  const content = [];

  const openIndex = expression.indexOf('[');
  const closeIndex = expression.indexOf(']');

  const before = expression.substring(0, openIndex);
  const diceExpression = expression.substring(openIndex + 1, closeIndex);
  const after = expression.substring(closeIndex + 1);

  content.push(document.createTextNode(before));
  content.push(document.createTextNode(rollDie(diceExpression)));
  if (isIterable(after)) {
    content.push(...parseExpression(after));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}
