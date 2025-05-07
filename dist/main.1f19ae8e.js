// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTableWithName = getTableWithName;
var distance = {
  name: 'Distance',
  dice: '1d6',
  content: ["1;Close", "2-3;Near at #1d3 meter", "4-6;Far"]
};
var roomType = {
  name: 'Room Type',
  dice: '1d10',
  content: ["1-2;Empty", "3;Trap", "4;Minor Hazard", "5;Solo Monster", "6;NPC", "7;Monster Mob", "8;Major Hazard", "9;Treasure", "10;Boss Monster"]
};
var trap = {
  name: 'Trap',
  dice: '1d6',
  content: ["1;Crude;Ensnaring", "2;Ranged;Toxic", "3-4;Sturdy;Mechanical", "5;Ancient;Magical", "6;Large;Deadly"]
};
var monsterMob = {
  name: 'Monster Mob',
  dice: '1d6',
  content: ["1;Stealthy Outcasts", "2-3;Reckless Minions", "4;Magical Tricksters", "5;Primitive Vermin", "6;Organized Warriors"]
};
var minorHazard = {
  name: 'Minor Hazard',
  dice: '1d6',
  content: ["1;Short fall", "2-3;Stuck or locked barrier", "4;Dense rubble", "5;Collapsing walls", "6;Enfeebling magic"]
};
var majorHazard = {
  name: 'Major Hazard',
  dice: '1d6',
  content: ["1-2;Long fall", "3;Toxic gas or vapors", "4;Entrapping terrain", "5;Antimagic zone", "6;Drowning hazard"]
};
var soloMonster = {
  name: 'Solo Monster',
  dice: '1d6',
  content: ["1;Sneaky Ambusher", "2-3;Mighty Brute", "4-5;Clever Spellcaster", "6;Mutated Pariah"]
};
var treasure = {
  name: 'Treasure',
  dice: '1d6',
  content: ["1-2;Hidden", "3-4;Guarded by monster", "5;Protected by a trap}", "6;Protected by a hazard}"]
};
var npc = {
  name: 'NPC',
  dice: '1d6',
  content: ["1;Hiding", "2-3;Captive", "4-5;Wounded", "6;Rival crawlers"]
};
var bossMonster = {
  name: 'Boss Monster',
  dice: '1d6',
  content: ["1;Physically strongest", "2;Religious leader", "3-5;Guarded by minions", "6;Supreme sorcerer"]
};
var luxuryItem = {
  name: 'Luxury Item',
  dice: '1d20',
  content: ["1;Golden;Life-sized humanoid figure", "2;Etched-copper;1d4: 1. tusk, 2. horn, 3. fang, 4. skull", "3;Dragonscaled;Altar, 1d4: 1. Memnon, 2. Ord, 3-4. Madeera", "4;Gilded;Statuette, 1d4: 1. fox, 2. cat, 3. dog, 4. owl", "5;Bone-carved;1d4: 1. chest, 2. table, 3. lockbox, 4. chair", "6;Amber-encased;Icon, 1d4: 1. Chaos, 2. Neutrality, 3-4. Law", "7;Painting of;Bust, 1d4: 1. god, 2. ruler, 3. hero, 4. bard", "8;Silver;Egg, 1d4: 1. dragon, 2. basilisk, 3-4. griffon", "9;Jade;1d4: 1. charm, 2. amulet, 3. locket, 4. signet", "10;Tapestry of;Mask, 1d4: 1. crow, 2. jester, 3. thief, 4. god", "11;White marble;1d4: 1. mirror, 2. vase, 3. pottery, 4. ewer", "12;Ivory;1d4: 1. chalice, 2. plate, 3. cutlery, 4. mug", "13;Crystal;1d4: 1. circlet, 2. ring, 3. chain, 4. torc", "14;Mithral;Bottle, 1d4: 1. wine, 2. grog, 3. mead, 4. ale", "15;Dragonbone;1d4: 1-2. scroll case, 3. ink pot, 4. quill", "16;Holy relic;1d4: 1. shield, 2. helm, 3. bracers 4. greaves", "17;Meteorite;1d4: 1. lute, 2. viol, 3. harp, 4. flute", "18;Masterwork;1d4: 1. urn, 2. coffin, 3. bier, 4. sarcophagus", "19;Silk-wrapped;1d4: 1. crown, 2. scepter, 3. orb, 4. throne", "20;Stained glass;1d4: 1-2. beetle, 3. butterfly, 4. spider"]
};

/// NPCs TABLES

var ancestry = {
  name: 'Ancestry',
  dice: '1d12',
  content: ["1-4;Human", "5-6;Elf", "7-8;Dwarf", "9-10;Halfling", "11;Half-Orc", "12;Goblin"]
};
var alignment = {
  name: 'Alignment',
  dice: '1d6',
  content: ["1-3;Lawful", "4;Neutral", "5-6;Chaotic"]
};
var age = {
  name: 'Age',
  dice: '1d8',
  content: ["1; Child", "2; Adolescent", "3-4; Adult", "5-6; Middle-Aged", "7; Elderly", "8; Ancient"]
};
var wealth = {
  name: 'Wealth',
  dice: '1d6',
  content: ["1;Poor", "2-4;Standard", "4-5;Wealthy", "6;Extravagant"]
};
var npcQualities = {
  name: 'NPC Qualities',
  dice: '1d20',
  content: ["1;Balding;Spits;Hiding a fugitive", "2;Stocky build;Always eating;Adores baby animals", "3;Very tall;Moves quickly;Obsessed with fire", "4;Beauty mark;Card tricks;In a religious cult", "5;One eye;Prays aloud;Is a half-demon", "6;Braided hair;Writes in diary;Was a wizard's apprentice", "7;Muscular;Apologetic;Needlessly picks pockets", "8;White hair;Slaps backs;Has a false identity", "9;Scar on face;Drops things;Afraid of storms", "10;Willowy build;Swears oaths;Has functional gills", "11;Sweaty;Makes puns;In deep gambling debt", "12;Cleft chin;Rare accent;Works as a smuggler", "13;Frail;Easily spooked;Is a werewolf", "14;Big eyebrows;Forgetful;Can actually smell lies", "15;Tattooed;Speaks quietly;Cast out of wealthy family", "16;Floppy hat;Twitches;In love with a bartender", "17;Gold tooth;Moves slowly;Left the Thieves' Guild", "18;Six fingers;Speaks loudly;Best friends with a prince", "19;Very short;Swaggers;Retired crawler", "20;Large nose;Smokes pipe;Has a pet basilisk"]
};
var npcOccupation = {
  name: 'NPC Occupation',
  dice: '1d4',
  content: ["1;Gravedigger;Carpenter;Scholar;Blacksmith", "2;Tax collector;Farmer;Bartender;Beggar", "3;Baker;Cook;Sailor;Butcher", "4;Locksmith;Cobbler;Friar/nun;Merchant"]
};
var npcNameByAncestry = {
  name: 'NPC Name by Ancestry',
  dice: '1d20',
  content: ["1;Hera;Sarenia;Kog;Myrtle;Troga;Hesta", "2;Torin;Ravos;Dibbs;Robby;Boraal;Matteo", "3;Ginny;Imeria;Fronk;Nora;Urgana;Rosalin", "4;Gant;Farond;Irv;Percy;Zoraal;Endric", "5;Olga;Isolden;Squag;Daisy;Scalga;Kiara", "6;Dendor;Kieren;Mort;Jolly;Krell;Yao", "7;Ygrid;Mirenel;Vig;Evelyn;Voraga;Corina", "8;Pike;Riarden;Sticks;Horace;Morak;Rowan", "9;Sarda;Allindra;Gorb;Willie;Draga;Hariko", "10;Brigg;Arlomas;Yogg;Gertie;Sorak;Ikam", "11;Zorli;Sylara;Plok;Peri;Varga;Mariel", "12;Yorin;Tyr;Zrak;Carlsby;Ulgar;Jin", "13;Jorgena;Rinariel;Dent;Nyx;Jala;Hana", "14;Trogin;Saramir;Krik;Kellan;Kresh;Lios", "15;Riga;Vedana;Mizzo;Fern;Zana;Indra", "16;Barton;Elindos;Bort;Harlow;Torvash;Remy", "17;Katrina;Ophelia;Nabo;Moira;Rokara;Nura", "18;Egrim;Cydaros;Hink;Sage;Gartak;Vakesh", "19;Elsa;Tiramel;Bree;Reenie;Iskana;Una", "20;Orgo;Varond;Kreeb;Wendry;Ziraak;Nabilo"]
};
var tavernName = {
  name: 'Tavern',
  dice: '1d20',
  content: ["1;The Crimson;Rat;High-stakes gambling", "2;The Dancing;Wench;Illicit poison sales", "3;The Dog;& Lantern;Wizard patrons", "4;The Rusty;Eel;Cult rituals in the basement", "5;The Demon's;Goblet;Rare food and drinks", "6;The Singing;Trident;Dancing contests", "7;The Boar;& Candle;Violent brawls", "8;The Silver;Dagger;Ancient tunnels in the cellar", "9;The Filthy;Wheel;Thugs for hire", "10;The Captain's;Pig;Thieves' Guild spies", "11;The Jolly;Snake;Hostility toward spellcasters", "12;The Wise;Camel;City Watch patrons", "13;Cloak;& Dragon;Underground pit fighting", "14;The Royal;Axe;Famous bard performances", "15;The Gilded;Bell;Treasonous meetings", "16;The Blade;& Tankard;Ban on all weapons", "17;The Drunken;Shield;Hostility toward non-regulars", "18;Cup;& Blade;Exotic taxidermy collection", "19;The Jeweled;Anvil;Pirate and smuggler patrons", "20;The Frog;& Bard;Drinking contests"]
};
var tavernFood = {
  name: 'Tavern Food',
  dice: '1d12',
  content: ["1;Boiled cabbage;Alligator steak;Fried basilisk eyes", "2;Dates and olives;Rosemary ham;Giant snake filet", "3;Goat stew;Raw flailfish;Griffon eggs", "4;Pickled eggs;Seared venison;Candied scarabs", "5;Cheese and bread;Buttered ostrich;Baked troll bones", "6;Hearty broth;Spicy veal curry;Cockatrice wings", "7;Meat pastry;Salted frog legs;Crispy silkworms", "8;Mushroom kebab;Herbed snails;Roasted stingbat", "9;Roasted pigeon;Grilled tiger eel;Dire lobster tail", "10;Garlic flatbread;Spit-roasted boar;Wyvern tongue", "11;Turkey leg;Saffron duck neck;Shrieking seaweed", "12;Rat-on-a-stick;Crimson pudding;Dragon shanks"]
};
var tavernDrinks = {
  name: 'Tavern Drinks',
  dice: '1d12',
  content: ["1;Barnacle grog. 1 cp, DC 9 Constitution check or blind 1 hour", "2;Watered-down swill. 3 cp, toxic, -1 Constitution 1 hour", "3;Vinegary wine. 5 cp, stains teeth purple, -1 Charisma 1 hour", "4;Stale ale. 5 cp, dulls the senses, -1 Wisdom 1 hour", "5;Clear spirits. 1 sp, burns, ends 1 bad effect of another drink", "6;House ale. 2 sp, crisp and clean, first mug is free", "7;Autumn mead. 3 sp, floral, doubles effect of next drink", "8;Halfling summer wine. 5 sp, sparkling, +1 Charisma 1 hour", "9;Elvish brandy. 5 sp, spiced, +1 Intelligence 1 hour", "10;Dwarvish gold ale. 5 sp, icy cold, regain 1d4 HP per mug", "11;Aged royal wine. 2 gp, smooth and rich, +1 Wisdom 1 hour", "12;Van Dinkle whiskey. 20 gp a sip, only 5 bottles made, +1 XP"]
};
var treasure0to3 = {
  name: 'Treasure 0-3',
  dice: '1d100',
  content: ["1;Fourchette en fer-blanc tordue (1 pc)", "02-03;Torche boueuse (2 pc)", "04-05;Sac de billes bien lisses (2 pc)", "06-07;10 pc dans un sachet graisseux", "08-09;Lanterne rouillée à la vitre cassée (1 po)", "10-11;Dent en argent (1 po)", "12-13;Dague émoussée (1 po)", "14-15;Deux fioles en verre vides (6 po)", "16-17;60 pa dans une botte pourrie", "18-19;Miroir de poche craquelé (8 po)", "20-21;Hache à deux mains ébréchée (9 po)", "22-23;10 po dans un coffret de bois moisi", "24-25;Éclat d’émeraude (10 po)", "26-27;Arc long et paquet de 40 flèches (10 po)", "28-29;Armure de cuir poussiéreuse teinte en noir (10 po)", "30-31;Bouclier lourd éraflé (10 po)", "32-33;Épée bâtarde simple mais de bonne facture (10 po)", "34-35;12 po dans la poche d’un manteau déchiré", "36-37;Épée à deux mains à lame ondulée (12 po)", "38-39;Paire d’épées courtes de fabrication elfique (14 po)", "40-41;Bol en or (15 po)", "42-43;Statuette en obsidienne de Shune l’Infâme (15 po)", "44-45;Perle miniature (20 po)", "46-47;Scarabée en broche de jade et d’or (20 po)", "48-49;Sac de 10 pointes en argent (2 po chacune)", "50-53;Médaillon contenant le portrait d’un halfelin (20 po)", "54-55;Deux boucliers nains élégamment forgés (20 po)", "56-57;Paire de dagues argentées (10 po chacune)", "58-59;Chope d’hydromel en cuivre et en or (20 po)", "60-61;Sac de cinq écailles de dragon rouge (5 po chacune)", "62-63;Cape légère et chaude en soie d’araignée (25 po)", "64-65;Bel ensemble de pièces d’échec en ivoire (25 po)", "66-67;Moitié de cotte de mailles (30 po)", "68-69;Trio de marteaux de guerre assortis (10 po chacun)", "70-71;Fragment de saphir (30 po)", "72-73;Deux pantoufles et une robe en soie (35 po)", "74-75;Bandeau en argent et en or (40 po)", "76-77;Perle polie et resplendissante (40 po)", "78-79;Bouclier en mithral gravé de dragons en plein essor (40 po)", "80-81;Idole de singe en or tenant un rubis entre ses dents (60 po)", "82-83;Belle cotte de mailles (60 po)", "84-85;Émeraude fissurée (60 po)", "86-87;Deux perles chatoyantes (40 po chacune)", "88-89;Parchemin de sort de rang 1 (80 po)", "90-91;Potion d’invisibilité (80 po)", "92-93;Baguette magique, sort de rang 2 (100 po)", "94-95;OEuf de la Cocatrice (100 po)", "96-97;Armure +1 (atout, malédiction) (150 po)", "98-99;Sac sans fond (vertu, défaut) (150 po)", "0;Arme magique +1 (atout) (200 po)"]
};
var ruinsEncounter = {
  name: 'Ruins Encounter',
  dice: '1d100',
  content: ["01;A mutated cave brute explodes through a crumbling wall", "02-03;A silent gelatinous cube sweeps up a corridor", "04-05;A roving owlbear scavenges for dead bodies to eat", "06-07;Rival crawlers confront the PCs; they were \"here first\"", "08-09;[1d6] rust monsters swarm a crack bubbling with mercury", "10-11;A legless suit of animated armor pulls itself along the floor", "12-13;A groaning wall collapses at the slightest touch", "14-15;A chalk note on the wall: \"Karov, we'll be at the Loyal Hog\"", "16-17;Mort the goblin is digging in cracks for grubs and beetles", "18-19;The floor collapses into a pit [1d6] x 10 feet deep", "20-21;A raiding team of [2d4] hobgoblins moves in tight formation", "22-23;[2d4] web-covered skeletons form from scattered bones", "24-25;[1d4] giant dung beetles roll huge balls of dried excrement", "26-27;An ochre jelly hides inside a pond or sinkhole", "28-29;A single, perfect rose grows up between the flagstones", "30-31;[2d4] bandits shutter lanterns and set up a hasty ambush", "32-33;Three goblins toughen each other's skulls with frying pans", "34-35;[2d6] beastmen pummel a giant centipede with rocks", "36-37;A gas leak causes all light sources to explode and go out", "38-39;A gelatinous cube full of handy items is stuck inside a pit", "40-41;A swarm of clattering, gold scarab beetles flies into sight", "42-43;A wounded NPC staggers up to the PCs and begs for help", "44-45;A rusty portcullis slams down, separating the PCs", "46-47;A strangler hides above a backpack stuffed with rocks", "48-49;A weeping ghost floats by, distracted by its own ranting", "50-53;[2d4] kobolds sneak up behind the PCs for a surprise attack", "54-55;Ancient clay pots vibrate with hypnotizing resonance", "56-57;[1d6] gricks shred dead giant rats and use the fur for nesting", "58-59;Rival crawlers escort a frail noble tourist on an \"adventure\"", "60-61;[3d4] goblin scavengers barter and trade for odd trinkets", "62-63;[2d4] dwarven miners (soldiers) shore up a collapsing wall", "64-65;[2d4] giant wasps build a huge, papery nest on the ceiling", "66-67;A dense cloud of sulfuric mist rises from a floor crack", "68-69;A swarm of spiders surges out of a gauzy egg sack", "70-71;An ogre named Lud scratches rude words into the wall", "72-73;[1d6] goblins brawl with [2d4] kobolds over a grick carcass", "74-75;[2d4] giant bats roost on the ceiling; light disturbs them", "76-77;An ettercap spins web cocoons around its still-living prey", "78-79;[1d6] cultists hunt for humanoid bones for a nefarious ritual", "80-81;A dryad searches for her tree that bugbears chopped up", "82-83;A deep gnome plays haunting music on humming fungi", "84-85;[2d6] kobolds work in a makeshift, volatile alchemy lab", "86-87;A stone golem endlessly stacks the same rocks into piles", "88-89;Two darkmantles circle each other in a duel of intimidation", "90-91;[2d6] goblins carry their bugbear king on a rickety litter", "92-93;[2d4] cave creepers swarm up the hallway", "94-95;A recent campfire still burns with glowing cinders", "96-97;A minotaur guides the Wandering Merchant on a path", "98-99;Roll two encounters and combine the results (reroll 98-99)", "00;The body of a dead crawler holds a random magic item"]
};
var tables = [distance, roomType, trap, luxuryItem, monsterMob, minorHazard, majorHazard, soloMonster, treasure, npc, bossMonster, ancestry, alignment, age, wealth, npcQualities, npcOccupation, npcNameByAncestry, tavernName, tavernFood, tavernDrinks, treasure0to3, ruinsEncounter];
function getTableWithName(name) {
  console.log("GetTableWithName: ", name);
  for (var i = 0; i < tables.length; i += 1) {
    var table = tables[i];
    if (table.name === name) {
      console.log("Found table: ", table);
      return table;
    }
  }
  console.error("Table not found: ", name);
  return null;
}
},{}],"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isIterable;
function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
},{}],"roll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rollDie = rollDie;
exports.rollOnCSVTable = rollOnCSVTable;
exports.rollOnTable = rollOnTable;
var _table = require("./table");
function rollDie(expression) {
  // expression = "1d6"
  // expression = "2d10"
  // expression = "1d6+1"
  // expression = "1d6 + 1"
  // expression = "1d6-1"
  // expression = "1d6 - 1"
  // expression = "1d6*2"
  // expression = "1d6 * 2"
  // expression = "1d6/2"
  // expression = "1d6 / 2"

  var parts = expression.split('d');
  var numberOfDice = parseInt(parts[0], 10);
  var sides = parseInt(parts[1], 10);
  if (Number.isNaN(sides) || sides <= 0) {
    throw new Error("Invalid dice sides value: \"".concat(parts[1], "\""));
  }
  var total = 0;
  for (var i = 0; i < numberOfDice; i += 1) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}

/**
 * Rolls on a table and returns the result.
 * @param {Object} table - The table to roll on.
 * @param {string} table.dice - The dice expression (e.g., "1d6").
 * @param {Array} table.content - The entries of the table.
 * @param {string} table.name - The name of the table.
 * Each entry in table.content should have:
 *   - {string} number: A single number or a range (e.g., "1" or "1-3").
 *   - {string} element: The result corresponding to the number or range.
 */
function rollOnTable(table) {
  var result = '';
  var randomNumber = rollDie(table.dice);
  for (var i = 0; i < table.content.length; i += 1) {
    var entry = table.content[i];
    if (entry.number.includes('-')) {
      var range = entry.number.split('-');
      var lowEnd = parseInt(range[0], 10);
      var highEnd = parseInt(range[1], 10);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        result = entry.element;
      }
    } else if (parseInt(entry.number, 10) === randomNumber) {
      result = entry.element;
    }
  }
  var fullResult = "Roll on ".concat(table.name, ": ").concat(result, " (").concat(randomNumber, ")");
  return fullResult;
}
function convertCSVArrayToArray(csvArray) {
  var newArray = [];
  for (var i = 0; i < csvArray.length; i += 1) {
    var row = csvArray[i];
    var columns = row.split(';');
    newArray.push(columns);
  }
  return newArray;
}
function rollOnTableWithIndex(table) {
  var columnIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var diceOverride = arguments.length > 2 ? arguments[2] : undefined;
  var result = '';
  var dice = table.dice;
  if (diceOverride) {
    dice = diceOverride;
  }
  var randomNumber = rollDie(dice);
  var content = convertCSVArrayToArray(table.content);
  for (var i = 0; i < table.content.length; i += 1) {
    var entry = content[i];
    if (entry[0].includes('-')) {
      var range = entry[0].split('-');
      var lowEnd = parseInt(range[0], 10);
      var highEnd = parseInt(range[1], 10);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        result = entry[columnIndex];
      }
    } else if (parseInt(entry[0], 10) === randomNumber) {
      result = entry[columnIndex];
    }
  }
  console.log("Result: ", result);
  return result;
}
function rollOnCSVTable(tableName, columnIndex) {
  var dice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var table = (0, _table.getTableWithName)(tableName);
  return rollOnTableWithIndex(table, columnIndex, dice);
}
},{"./table":"table.js"}],"journal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearJournal = clearJournal;
exports.createEntryComponent = createEntryComponent;
exports.createJournalLine = createJournalLine;
exports.createRollOnTableButton = createRollOnTableButton;
exports.parseExpression = parseExpression;
var _table = require("./table");
var _utils = _interopRequireDefault(require("./utils"));
var _roll = require("./roll");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function parseExpression(expression) {
  for (var i = 0; i < expression.length; i += 1) {
    if (expression[i] === '[') {
      return parseDie(expression);
    }
  }
  return [document.createTextNode(expression)];
}
function parseDie(expression) {
  var content = [];
  var openIndex = expression.indexOf('[');
  var closeIndex = expression.indexOf(']');
  var before = expression.substring(0, openIndex);
  var diceExpression = expression.substring(openIndex + 1, closeIndex);
  var after = expression.substring(closeIndex + 1);
  content.push(document.createTextNode(before));
  content.push(document.createTextNode(diceExpression));
  content.push(document.createTextNode(" ( ".concat((0, _roll.rollDie)(diceExpression), " ) ")));
  if ((0, _utils.default)(after)) {
    content.push.apply(content, _toConsumableArray(parseExpression(after)));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}
function createJournalLine(content) {
  var journal = document.getElementById('journal');
  var newLine = document.createElement('div');
  for (var i = 0; i < content.length; i += 1) {
    newLine.appendChild(content[i]);
  }
  journal.appendChild(newLine);
}
function createRollOnTableButton(table) {
  var button = document.createElement('button');
  button.innerHTML = '<button style="display: inline-block">ROLL</button>';
  button.onclick = function btnFunction() {
    createJournalLine(parseExpression((0, _roll.rollOnTable)(table)));
  };
  return button;
}
function createEntryComponent(title, content) {
  var journal = document.getElementById('journal');
  console.log("createEntryComponent", title, content);
  var entry = document.createElement('div');
  entry.className = "journal-item";
  journal.insertBefore(entry, journal.firstChild);
  var titleElement = document.createElement('p');
  titleElement.className = "journal-title";
  titleElement.innerText = title;
  entry.appendChild(titleElement);
  var journalContentElement = document.createElement('div');
  journalContentElement.className = "journal-content";
  for (var i = 0; i < content.length; i += 1) {
    var contentElement = document.createElement('p');
    contentElement.innerText = content[i].textContent;
    journalContentElement.appendChild(contentElement);
  }
  entry.appendChild(journalContentElement);
}
function clearJournal() {
  var journal = document.getElementById('journal');
  journal.innerHTML = '';
}
},{"./table":"table.js","./utils":"utils.js","./roll":"roll.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _journal = require("./journal");
var _roll = require("./roll");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
/// UTILITY
var btnClearJournal = document.getElementById('clearJournal');
btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  (0, _journal.clearJournal)();
};
var btnRollOnTreasure = document.getElementById('rollOnTreasure0to3');
btnRollOnTreasure.onclick = function () {
  console.log('btnRollOnTreasure');
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Treasure 0-3", 1)));
  (0, _journal.createEntryComponent)("Roll on Treasure 0-3", content);
};

/// DONJON TABLES

var btnRollOnRuinsEncounter = document.getElementById('rollOnRuinsEncounter');
btnRollOnRuinsEncounter.onclick = function () {
  console.log("rollOnRuinsEncounter clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Ruins Encounter")));
  (0, _journal.createEntryComponent)("Roll on Ruins Encounter", content);
};

/// ROOM TYPE
var roomTypeButton = document.getElementById('rollOnRoomType');
roomTypeButton.onclick = function () {
  console.log("rollOnRoomType clicked");
  var content = [];
  content.push.apply(content, _toConsumableArray((0, _journal.parseExpression)((0, _roll.rollOnCSVTable)("Room Type"))));
  (0, _journal.createEntryComponent)("Roll on Room Type", content);
};
var rollOnTrapButton = document.getElementById('rollOnTrap');
rollOnTrapButton.onclick = function () {
  console.log("rollOnTrap clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Trap", 1)));
  content.push(document.createTextNode(" and "));
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Trap", 2)));
  (0, _journal.createEntryComponent)("Roll on Trap", content);
};
var rollOnMinorHazardButton = document.getElementById('rollOnMinorHazard');
rollOnMinorHazardButton.onclick = function () {
  console.log("rollOnMinorHazard clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Minor Hazard")));
  (0, _journal.createEntryComponent)("Roll on Minor Hazard", content);
};
var rollOnSoloMonsterButton = document.getElementById('rollOnSoloMonster');
rollOnSoloMonsterButton.onclick = function () {
  console.log("rollOnSoloMonster clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Solo Monster")));
  (0, _journal.createEntryComponent)("Roll on Solo Monster", content);
};
var rollOnNPCButton = document.getElementById('rollOnNPC');
rollOnNPCButton.onclick = function () {
  console.log("rollOnNPC clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("NPC")));
  (0, _journal.createEntryComponent)("Roll on NPC", content);
};
var rollOnMonsterMobButton = document.getElementById('rollOnMonsterMob');
rollOnMonsterMobButton.onclick = function () {
  console.log("rollOnMonsterMob clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Monster Mob")));
  (0, _journal.createEntryComponent)("Roll on Monster Mob", content);
};
var rollOnMajorHazardButton = document.getElementById('rollOnMajorHazard');
rollOnMajorHazardButton.onclick = function () {
  console.log("rollOnMajorHazard clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Major Hazard")));
  (0, _journal.createEntryComponent)("Roll on Major Hazard", content);
};
var rollOnTreasureButton = document.getElementById('rollOnTreasure');
rollOnTreasureButton.onclick = function () {
  console.log("rollOnTreasure clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Treasure")));
  (0, _journal.createEntryComponent)("Roll on Treasure", content);
};
var rollOnBossMonsterButton = document.getElementById('rollOnBossMonster');
rollOnBossMonsterButton.onclick = function () {
  console.log("rollOnBossMonster clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Boss Monster")));
  (0, _journal.createEntryComponent)("Roll on Boss Monster", content);
};
function rollNPCNameByAncestry(ancestry) {
  switch (ancestry) {
    case "Dwarf":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 1);
    case "Elf":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 2);
    case "Gobelin":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 3);
    case "Halfling":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 4);
    case "Half-Orc":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 5);
    case "Human":
      return (0, _roll.rollOnCSVTable)("NPC Name by Ancestry", 6);
    default:
      return "Ancestry not found";
  }
}
var rollOnCreateNPC = document.getElementById('rollOnCreateNPC');
rollOnCreateNPC.onclick = function () {
  console.log("rollOnCreateNPC clicked");
  var content = [];
  var ancestry = (0, _roll.rollOnCSVTable)("Ancestry");
  var alignement = (0, _roll.rollOnCSVTable)("Alignment");
  var age = (0, _roll.rollOnCSVTable)("Age");
  var wealth = (0, _roll.rollOnCSVTable)("Wealth");
  var appearance = (0, _roll.rollOnCSVTable)("NPC Qualities", 1);
  var does = (0, _roll.rollOnCSVTable)("NPC Qualities", 2);
  var secret = (0, _roll.rollOnCSVTable)("NPC Qualities", 3);
  var occupationColumn = Math.floor(Math.random() * 4) + 1;
  var occupation = (0, _roll.rollOnCSVTable)("NPC Occupation", occupationColumn);
  var name = rollNPCNameByAncestry(ancestry);
  content.push(document.createTextNode("".concat(name, " the ").concat(occupation, " (").concat(alignement, ")")));
  content.push(document.createTextNode("".concat(wealth, " ").concat(ancestry, " ").concat(age)));
  content.push(document.createTextNode("".concat(appearance, ", ").concat(does, ", ").concat(secret)));
  (0, _journal.createEntryComponent)("Create a NPC", content);
};

/// TAVERN TABLES

var rollOnCreatePoorTavern = document.getElementById('rollOnCreatePoorTavern');
rollOnCreatePoorTavern.onclick = function () {
  console.log("rollOnCreatePoorTavern clicked");
  var content = [];
  var name = "".concat((0, _roll.rollOnCSVTable)("Tavern", 1), " ").concat((0, _roll.rollOnCSVTable)("Tavern", 2));
  var knownFor = (0, _roll.rollOnCSVTable)("Tavern", 3);
  var drink1 = (0, _roll.rollOnCSVTable)("Tavern Drinks", 1, "1d6");
  var drink2 = (0, _roll.rollOnCSVTable)("Tavern Drinks", 1, "1d6");
  var food1 = (0, _roll.rollOnCSVTable)("Tavern Food", 1);
  var food2 = (0, _roll.rollOnCSVTable)("Tavern Food", 1);
  var food3 = (0, _roll.rollOnCSVTable)("Tavern Food", 1);
  content.push(document.createTextNode("".concat(name, " known for ").concat(knownFor)));
  content.push(document.createTextNode("Drinks:"));
  content.push(document.createTextNode(drink1));
  if (drink1 !== drink2) {
    content.push(document.createTextNode(drink2));
  }
  content.push(document.createTextNode("***"));
  content.push(document.createTextNode("Food:"));
  content.push(document.createTextNode("".concat(food1, " (").concat(Math.floor(Math.random() * 4) + 1, "cp)")));
  if (food2 !== food1 && food2 !== food3) {
    content.push(document.createTextNode("".concat(food2, " (").concat(Math.floor(Math.random() * 4) + 1, "cp)")));
  }
  if (food3 !== food1) {
    content.push(document.createTextNode("".concat(food3, " (").concat(Math.floor(Math.random() * 4) + 1, "cp)")));
  }
  (0, _journal.createEntryComponent)("Create a Tavern", content);
};

/// LUXURY ITEM
var rollOnLuxuryItemButton = document.getElementById('rollOnLuxuryItem');
rollOnLuxuryItemButton.onclick = function () {
  console.log("rollOnLuxuryItem clicked");
  var content = [];
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Luxury Item", 1)));
  content.push(document.createTextNode(" "));
  content.push(document.createTextNode((0, _roll.rollOnCSVTable)("Luxury Item", 2)));
  (0, _journal.createEntryComponent)("Roll on Luxury", content);
};
},{"./journal":"journal.js","./roll":"roll.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50657" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map