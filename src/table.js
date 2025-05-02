const distance = {
  name: 'Distance',
  dice: '1d6',
  content: [
    "1;Close",
    "2-3;Near at #1d3 meter",
    "4-6;Far",
  ],
};

const roomType = {
  name: 'Room Type',
  dice: '1d10',
  content: [
    "1-2;Empty",
    "3;Trap",
    "4;Minor Hazard",
    "5;Solo Monster",
    "6;NPC",
    "7;Monster Mob",
    "8;Major Hazard",
    "9;Treasure",
    "10;Boss Monster",
  ],
};

const trap = {
  name: 'Trap',
  dice: '1d6',
  content: [
    "1;Crude;Ensnaring",
    "2;Ranged;Toxic",
    "3-4;Sturdy;Mechanical",
    "5;Ancient;Magical",
    "6;Large;Deadly",
  ],
};

const monsterMob = {
  name: 'Monster Mob',
  dice: '1d6',
  content: [
    "1;Stealthy Outcasts",
    "2-3;Reckless Minions",
    "4;Magical Tricksters",
    "5;Primitive Vermin",
    "6;Organized Warriors",
  ],
};

const minorHazard = {
  name: 'Minor Hazard',
  dice: '1d6',
  content: [
    "1;Short fall",
    "2-3;Stuck or locked barrier",
    "4;Dense rubble",
    "5;Collapsing walls",
    "6;Enfeebling magic",
  ],
};

const majorHazard = {
  name: 'Major Hazard',
  dice: '1d6',
  content: [
    "1-2;Long fall",
    "3;Toxic gas or vapors",
    "4;Entrapping terrain",
    "5;Antimagic zone",
    "6;Drowning hazard",
  ],
};

const soloMonster = {
  name: 'Solo Monster',
  dice: '1d6',
  content: [
    "1;Sneaky Ambusher",
    "2-3;Mighty Brute",
    "4-5;Clever Spellcaster",
    "6;Mutated Pariah",
  ],
};

const treasure = {
  name: 'Treasure',
  dice: '1d6',
  content: [
    "1-2;Hidden",
    "3-4;Guarded by monster",
    "5;Protected by a trap}",
    "6;Protected by a hazard}",
  ],
};

const npc = {
  name: 'NPC',
  dice: '1d6',
  content: [
    "1;Hiding",
    "2-3;Captive",
    "4-5;Wounded",
    "6;Rival crawlers",
  ],
};

const bossMonster = {
  name: 'Boss Monster',
  dice: '1d6',
  content: [
    "1;Physically strongest",
    "2;Religious leader",
    "3-5;Guarded by minions",
    "6;Supreme sorcerer",
  ],
};

const luxuryItem = {
  name: 'Luxury Item',
  dice: '1d20',
  content: [
    "1;Golden;Life-sized humanoid figure",
    "2;Etched-copper;1d4: 1. tusk, 2. horn, 3. fang, 4. skull",
    "3;Dragonscaled;Altar, 1d4: 1. Memnon, 2. Ord, 3-4. Madeera",
    "4;Gilded;Statuette, 1d4: 1. fox, 2. cat, 3. dog, 4. owl",
    "5;Bone-carved;1d4: 1. chest, 2. table, 3. lockbox, 4. chair",
    "6;Amber-encased;Icon, 1d4: 1. Chaos, 2. Neutrality, 3-4. Law",
    "7;Painting of;Bust, 1d4: 1. god, 2. ruler, 3. hero, 4. bard",
    "8;Silver;Egg, 1d4: 1. dragon, 2. basilisk, 3-4. griffon",
    "9;Jade;1d4: 1. charm, 2. amulet, 3. locket, 4. signet",
    "10;Tapestry of;Mask, 1d4: 1. crow, 2. jester, 3. thief, 4. god",
    "11;White marble;1d4: 1. mirror, 2. vase, 3. pottery, 4. ewer",
    "12;Ivory;1d4: 1. chalice, 2. plate, 3. cutlery, 4. mug",
    "13;Crystal;1d4: 1. circlet, 2. ring, 3. chain, 4. torc",
    "14;Mithral;Bottle, 1d4: 1. wine, 2. grog, 3. mead, 4. ale",
    "15;Dragonbone;1d4: 1-2. scroll case, 3. ink pot, 4. quill",
    "16;Holy relic;1d4: 1. shield, 2. helm, 3. bracers 4. greaves",
    "17;Meteorite;1d4: 1. lute, 2. viol, 3. harp, 4. flute",
    "18;Masterwork;1d4: 1. urn, 2. coffin, 3. bier, 4. sarcophagus",
    "19;Silk-wrapped;1d4: 1. crown, 2. scepter, 3. orb, 4. throne",
    "20;Stained glass;1d4: 1-2. beetle, 3. butterfly, 4. spider",
  ],
};

const tables = [
  distance,
  roomType,
  trap,
  luxuryItem,
  monsterMob,
  minorHazard,
  majorHazard,
  soloMonster,
  treasure,
  npc,
  bossMonster,
];

export function getTableWithName(name) {
  console.log("GetTableWithName: ", name);
  for (let i = 0; i < tables.length; i += 1) {
    const table = tables[i];
    if (table.name === name) {
      console.log("Found table: ", table);
      return table;
    }
  }
  console.error("Table not found: ", name);
  return null;
}