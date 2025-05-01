import { createJournalLine, clearJournal, parseExpression } from './journal';
import { rollOnTable } from './roll';
import { getTableWithName } from './table';

const rollOnTrap = document.getElementById('rollOnTrap');
const btnClearJournal = document.getElementById('clearJournal');

rollOnTrap.onclick = function () {
  const trapTable = getTableWithName("Trap");
  console.log("TrapTable: " + trapTable);
  createJournalLine(parseExpression(rollOnTable(trapTable)));
};

rollOnRoomType.onclick = function () {
  const roomTypeTable = getTableWithName("Room Type");
  console.log("RoomTypeTable: " + roomTypeTable);
  createJournalLine(parseExpression(rollOnTable(roomTypeTable)));
}

btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  clearJournal();
};