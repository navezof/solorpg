import { createJournalLine, clearJournal, parseExpression, createEntryComponent } from './journal';
import { rollOnCSVTable } from './roll';

/// UTILITY
const btnClearJournal = document.getElementById('clearJournal');
btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  clearJournal();
}

const btnRollOnTreasure = document.getElementById('rollOnTreasure0to3');
btnRollOnTreasure.onclick = function () {
  console.log('btnRollOnTreasure');
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Treasure 0-3", 1)));
  createEntryComponent("Roll on Treasure 0-3", content);
}

/// DONJON TABLES

const btnRollOnRuinsEncounter = document.getElementById('rollOnRuinsEncounter');
btnRollOnRuinsEncounter.onclick = function () {
  console.log("rollOnRuinsEncounter clicked");
  let content = [];
  content.push(document.createTextNode(rollOnCSVTable("Ruins Encounter")));
  createEntryComponent("Roll on Ruins Encounter", content);
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

function rollNPCNameByAncestry(ancestry) {
  switch (ancestry) {
    case "Dwarf":
      return rollOnCSVTable("NPC Name by Ancestry", 1);
    case "Elf":
      return rollOnCSVTable("NPC Name by Ancestry", 2);
    case "Gobelin":
      return rollOnCSVTable("NPC Name by Ancestry", 3);
    case "Halfling":
      return rollOnCSVTable("NPC Name by Ancestry", 4);
    case "Half-Orc":
      return rollOnCSVTable("NPC Name by Ancestry", 5);
    case "Human":
      return rollOnCSVTable("NPC Name by Ancestry", 6);
    default:
      return "Ancestry not found";
  }
}

const rollOnCreateNPC = document.getElementById('rollOnCreateNPC');
rollOnCreateNPC.onclick = function () {
  console.log("rollOnCreateNPC clicked");
  let content = [];

  const ancestry = rollOnCSVTable("Ancestry");
  const alignement = rollOnCSVTable("Alignment");
  const age = rollOnCSVTable("Age");
  const wealth = rollOnCSVTable("Wealth");
  const appearance = rollOnCSVTable("NPC Qualities", 1);
  const does = rollOnCSVTable("NPC Qualities", 2);
  const secret = rollOnCSVTable("NPC Qualities", 3);

  const occupationColumn = Math.floor(Math.random() * 4) + 1;
  const occupation = rollOnCSVTable("NPC Occupation", occupationColumn);

  const name = rollNPCNameByAncestry(ancestry);

  content.push(document.createTextNode(`${name} the ${occupation} (${alignement})`))
  content.push(document.createTextNode(`${wealth} ${ancestry} ${age}`));
  content.push(document.createTextNode(`${appearance}, ${does}, ${secret}`));

  createEntryComponent("Create a NPC", content);
}

/// TAVERN TABLES

const rollOnCreatePoorTavern = document.getElementById('rollOnCreatePoorTavern');
rollOnCreatePoorTavern.onclick = function () {
  console.log("rollOnCreatePoorTavern clicked");
  let content = [];

  const name = `${rollOnCSVTable("Tavern", 1)} ${rollOnCSVTable("Tavern", 2)}`;
  const knownFor = rollOnCSVTable("Tavern", 3);

  const drink1 = rollOnCSVTable("Tavern Drinks", 1, "1d6");
  const drink2 = rollOnCSVTable("Tavern Drinks", 1, "1d6");

  const food1 = rollOnCSVTable("Tavern Food", 1);
  const food2 = rollOnCSVTable("Tavern Food", 1);
  const food3 = rollOnCSVTable("Tavern Food", 1);

  content.push(document.createTextNode(`${name} known for ${knownFor}`));
  content.push(document.createTextNode(`Drinks:`));
  content.push(document.createTextNode(drink1));
  if (drink1 !== drink2) {
    content.push(document.createTextNode(drink2));
  }
  content.push(document.createTextNode("***"));
  content.push(document.createTextNode(`Food:`));
  content.push(document.createTextNode(`${food1} (${Math.floor(Math.random() * 4) + 1}cp)`));
  if (food2 !== food1 && food2 !== food3) {
    content.push(document.createTextNode(`${food2} (${Math.floor(Math.random() * 4) + 1}cp)`));
  }
  if (food3 !== food1) {
    content.push(document.createTextNode(`${food3} (${Math.floor(Math.random() * 4) + 1}cp)`));
  }

  createEntryComponent("Create a Tavern", content);
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