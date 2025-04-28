import { parseExpression } from './parser';
import { rollOnTable } from './roll';

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

export function clearJournal() {
  const journal = document.getElementById('journal');
  journal.innerHTML = '';
}
