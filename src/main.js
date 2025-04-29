import { createJournalLine, clearJournal, parseExpression } from './journal';

const button = document.getElementById('button');
const btnClearJournal = document.getElementById('clearJournal');

button.onclick = function () {
  const content = parseExpression('roll [1d6] times on table {Trap} and then do something else');
  createJournalLine(content);
};

btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  clearJournal();
};
