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
    { number: '3', element: 'Trap' },
    { number: '4', element: 'Minor hazard' },
    { number: '5', element: 'Solo monster' },
    { number: '6', element: 'NPC' },
    { number: '7', element: 'Monster mob' },
    { number: '8', element: 'Major hazard' },
    { number: '9', element: 'Treasure' },
    { number: '10', element: 'Boss monster' },
  ],
}

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

function roll(expression) {
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
  var randomNumber = roll(table.dice);
  console.log("randomNumber: " + randomNumber);
  for (var i = 0; i < table.entries.length; i++) {
    var entry = table.entries[i];
    if (entry.number.includes("-")) {
      var range = entry.number.split("-");
      var lowEnd = parseInt(range[0]);
      console.log("lowEnd: " + lowEnd);
      var highEnd = parseInt(range[1]);
      console.log("highEnd: " + highEnd);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        console.log("entry.element: " + entry.element);
        result = entry.element;
      }
    } else if (entry.number == randomNumber) {
      console.log("entry.element: " + entry.element);
      result = entry.element;
    }
  };
  var fullResult = `(${randomNumber}) ${result}`;
  return fullResult;
}

function write(content) {
  const content = "blah blah #1d3 blah blah"
  var placeHolder = document.getElementById('placeholder');
  if (content.includes("#")) {
    var before = content.split("#")[0];
    var after = content.split("#")[1];
    var expression = after.split(" ")[0];
    var rest = after.split(" ")[1];
    var rollResult = roll(expression);
    console.log(`${before} ${rollResult} ${rest}`);
  }
  placeHolder.innerHTML = content
}

var button = document.getElementById('button');

button.onclick = function () {
  var result = rollOnTable(roomType);
  console.log("roll result:" + result);
  write(result);
}