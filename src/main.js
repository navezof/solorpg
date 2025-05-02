import { createJournalLine, clearJournal, parseExpression, createEntryComponent } from './journal';
import { rollOnCSVTable } from './roll';

/// UTILITY
const btnClearJournal = document.getElementById('clearJournal');
btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  clearJournal();
}

/// ROOM TYPE
const roomTypeButton = document.getElementById('rollOnRoomType');
roomTypeButton.onclick = function () {
  console.log("rollOnRoomType clicked");
  let content = [];
  content.push(...parseExpression(rollOnCSVTable("Room Type")));
  createEntryComponent("Roll on Room Type", content);
}

const rollOnTrapButton = document.getElementById('rollOnTrap');
rollOnTrapButton.onclick = function () {
  console.log("rollOnTrap clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Trap", 1)));
  content.push(document.createTextNode(" and "));
  content.push(document.createTextNode(rollOnCSVTable("Trap", 2)));
  createEntryComponent("Roll on Trap", content);
}

const rollOnMinorHazardButton = document.getElementById('rollOnMinorHazard');
rollOnMinorHazardButton.onclick = function () {
  console.log("rollOnMinorHazard clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Minor Hazard")));
  createEntryComponent("Roll on Minor Hazard", content);
}

const rollOnSoloMonsterButton = document.getElementById('rollOnSoloMonster');
rollOnSoloMonsterButton.onclick = function () {
  console.log("rollOnSoloMonster clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Solo Monster")));
  createEntryComponent("Roll on Solo Monster", content);
}

const rollOnNPCButton = document.getElementById('rollOnNPC');
rollOnNPCButton.onclick = function () {
  console.log("rollOnNPC clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("NPC")));
  createEntryComponent("Roll on NPC", content);
}

const rollOnMonsterMobButton = document.getElementById('rollOnMonsterMob');
rollOnMonsterMobButton.onclick = function () {
  console.log("rollOnMonsterMob clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Monster Mob")));
  createEntryComponent("Roll on Monster Mob", content);
}

const rollOnMajorHazardButton = document.getElementById('rollOnMajorHazard');
rollOnMajorHazardButton.onclick = function () {
  console.log("rollOnMajorHazard clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Major Hazard")));
  createEntryComponent("Roll on Major Hazard", content);
}

const rollOnTreasureButton = document.getElementById('rollOnTreasure');
rollOnTreasureButton.onclick = function () {
  console.log("rollOnTreasure clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Treasure")));
  createEntryComponent("Roll on Treasure", content);
}

const rollOnBossMonsterButton = document.getElementById('rollOnBossMonster');
rollOnBossMonsterButton.onclick = function () {
  console.log("rollOnBossMonster clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Boss Monster")));
  createEntryComponent("Roll on Boss Monster", content);
}

/// LUXURY ITEM
const rollOnLuxuryItemButton = document.getElementById('rollOnLuxuryItem');
rollOnLuxuryItemButton.onclick = function () {
  console.log("rollOnLuxuryItem clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Luxury Item", 1)));
  content.push(document.createTextNode(" "));
  content.push(document.createTextNode(rollOnCSVTable("Luxury Item", 2)));
  createEntryComponent("Roll on Luxury", content);
}