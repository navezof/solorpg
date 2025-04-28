import { parseDie, parseExpression } from './parser';
import { createJournalLine, clearJournal } from './journal';

const button = document.getElementById('button');
const btnClearJournal = document.getElementById('clearJournal');

button.onclick = function () {
  // TEST_parseExpression();
  // TEST_parseExpressionWithTable()
  // TEST_createButton();

  // var content = parseExpression("Simple expression with no dice or tables");
  // var content = parseDie("roll [1d6] times");
  // const content = parseDie('roll on {Trap} and then do something else');
  const content = parseExpression('roll [1d6] times on table {Trap} and then do something else');
  createJournalLine(content);
};

btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  clearJournal();
};
