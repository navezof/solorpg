import { getTableWithName, tables } from './table';
import isIterable from './utils';
import { rollDie, rollOnTable } from './roll';

export function parseExpression(expression) {
  for (let i = 0; i < expression.length; i += 1) {
    if (expression[i] === '[') {
      return parseDie(expression);
    }
  }
  return [document.createTextNode(expression)];
}

function parseDie(expression) {
  const content = [];

  const openIndex = expression.indexOf('[');
  const closeIndex = expression.indexOf(']');

  const before = expression.substring(0, openIndex);
  const diceExpression = expression.substring(openIndex + 1, closeIndex);
  const after = expression.substring(closeIndex + 1);

  content.push(document.createTextNode(before));
  content.push(document.createTextNode(diceExpression));
  content.push(document.createTextNode(` ( ${rollDie(diceExpression)} ) `));
  if (isIterable(after)) {
    content.push(...parseExpression(after));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}

export function createJournalLine(content) {
  const journal = document.getElementById('journal');
  const newLine = document.createElement('div');
  for (let i = 0; i < content.length; i += 1) {
    newLine.appendChild(content[i]);
  }
  journal.appendChild(newLine);
}

export function createRollOnTableButton(table) {
  const button = document.createElement('button');
  button.innerHTML = '<button style="display: inline-block">ROLL</button>';
  button.onclick = function btnFunction() {
    createJournalLine(parseExpression(rollOnTable(table)));
  };
  return button;
}

export function createEntryComponent(title, content) {
  const journal = document.getElementById('journal');

  console.log("createEntryComponent", title, content);
  const entry = document.createElement('div');
  entry.className = "journal-item";
  journal.insertBefore(entry, journal.firstChild);

  const titleElement = document.createElement('p');
  titleElement.className = "journal-title";
  titleElement.innerText = title;
  entry.appendChild(titleElement);

  const journalContentElement = document.createElement('div');
  journalContentElement.className = "journal-content";
  for (let i = 0; i < content.length; i += 1) {
    const contentElement = document.createElement('p');
    contentElement.innerText = content[i].textContent;
    journalContentElement.appendChild(contentElement);
  }
  entry.appendChild(journalContentElement);
}

export function clearJournal() {
  const journal = document.getElementById('journal');
  journal.innerHTML = '';
}
