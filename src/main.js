'use strict';

var distance = {
  name: 'Distance',
  dice: "1d6",
  entries: [
    { number: '1', element: 'Close' },
    { number: '2-3', element: 'Near at #1d3 meter' },
    { number: '4-6', element: 'Far' },],
}

var roomType = {
  name: 'Room Type',
  dice: "1d10",
  entries: [
    { number: '1-2', element: 'Empty' },
    { number: '3', element: '{Trap}' },
    { number: '4', element: 'Minor hazard' },
    { number: '5', element: 'Solo monster' },
    { number: '6', element: 'NPC' },
    { number: '7', element: 'Monster mob' },
    { number: '8', element: 'Major hazard' },
    { number: '9', element: 'Treasure' },
    { number: '10', element: 'Boss monster' },
  ],
}

var trap = {
  name: 'Trap',
  dice: "1d6",
  entries: [
    { number: '1', element: 'Pit' },
    { number: '2', element: 'Poison dart' },
    { number: '3', element: 'Fireball' },
    { number: '4', element: 'Gas' },
    { number: '5', element: 'Blade' },
    { number: '6', element: 'Electricity' },
  ],
}

var tables = [
  distance,
  roomType,
  trap,
]

function rollDie(expression) {
  var parts = expression.split('d');
  var numberOfDice = parseInt(parts[0]);
  var sides = parseInt(parts[1]);
  var total = 0;

  for (var i = 0; i < numberOfDice; i++) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

function rollOnTable(table) {
  var result = "";
  var randomNumber = rollDie(table.dice);
  for (var i = 0; i < table.entries.length; i++) {
    var entry = table.entries[i];
    if (entry.number.includes("-")) {
      var range = entry.number.split("-");
      var lowEnd = parseInt(range[0]);
      var highEnd = parseInt(range[1]);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        result = entry.element;
      }
    } else if (entry.number == randomNumber) {
      result = entry.element;
    }
  };
  var fullResult = `Roll on ${table.name}: ${result} (${randomNumber}) `;
  return fullResult;
}

function parseDie(expression) {
  console.log("parseDie: " + expression);
  var content = [];

  const openIndex = expression.indexOf("[");
  const closeIndex = expression.indexOf("]");

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
  console.log(`content: ${content}`);
  return content;
}

function isIterable(obj) {
  console.log("check isIterable: " + obj);
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

function parseForTable(expression) {
  console.log("parseForTable: " + expression);
  var content = [];

  const openIndex = expression.indexOf("{");
  const closeIndex = expression.indexOf("}");

  const before = expression.substring(0, openIndex);
  const tableName = expression.substring(openIndex + 1, closeIndex);
  const after = expression.substring(closeIndex + 1);

  var table = tables.find(t => t.name === tableName);
  var button = null;
  if (!table) {
    console.error(`Table ${tableName} not found`);
  } else {
    var button = createRollOnTableButton(table);
  }

  content.push(document.createTextNode(before));

  if (button){
    content.push(button);
  }
  if (isIterable(after)) {
    content.push(...parseExpression(after));
  } else {
    content.push(parseExpression(after));
  }
  
  console.log(`content: ${content}`);
  return content;
}

function parseExpression(expression) {
  for (var i = 0; i < expression.length; i++) {
    if (expression[i] == "{") {
      return parseForTable(expression)
    } else if (expression[i] == "[") {
      return parseDie(expression);
    }
  }
  console.log("parseExpression: " + expression);
  return [document.createTextNode(expression)];
}

function createRollOnTableButton(table) {
  const button = document.createElement('button');
  button.innerHTML = `<button style="display: inline-block">ROLL</button>`
  button.onclick = function () {
    createJournalLine(parseExpression(rollOnTable(table)));
  };
  return button
}

function createJournalLine(content) {
  console.log("createJournalLine: " + content);
  const journal = document.getElementById('journal');
  const newLine = document.createElement('div');
  for (var i = 0; i < content.length; i++) {
    console.log(content[i]);
    newLine.appendChild(content[i]);
  }
  journal.appendChild(newLine);
}

function clearJournal() {
  var journal = document.getElementById('journal');
  journal.innerHTML = "";
}

var button = document.getElementById('button');
var btnClearJournal = document.getElementById('clearJournal');

button.onclick = function () {
  console.log("button clicked");
  // TEST_parseExpression();
  // TEST_parseExpressionWithTable()
  // TEST_createButton();
  
  // var content = parseExpression("Simple expression with no dice or tables");
  // var content = parseDie("roll [1d6] times");
  var content = parseDie("roll on {Trap} and then do something else");
  // var content = parseExpression("roll [1d6] times on table {Trap} and then do something else");
  createJournalLine(content);
}

btnClearJournal.onclick = function () {
  console.log("clear journal clicked");
  clearJournal();
}