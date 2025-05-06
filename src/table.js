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

/// NPCs TABLES

const ancestry = {
  name: 'Ancestry',
  dice: '1d12',
  content: [
    "1-4;Human",
    "5-6;Elf",
    "7-8;Dwarf",
    "9-10;Halfling",
    "11;Half-Orc",
    "12;Goblin",
  ],
};

const alignment = {
  name: 'Alignment',
  dice: '1d6',
  content: [
    "1-3;Lawful",
    "4;Neutral",
    "5-6;Chaotic",
  ],
};

const age = {
  name: 'Age',
  dice: '1d8',
  content: [
    "1; Child",
    "2; Adolescent",
    "3-4; Adult",
    "5-6; Middle-Aged",
    "7; Elderly",
    "8; Ancient",
  ],
};

const wealth = {
  name: 'Wealth',
  dice: '1d6',
  content: [
    "1;Poor",
    "2-4;Standard",
    "4-5;Wealthy",
    "6;Extravagant",
  ],
};

const npcQualities = {
  name: 'NPC Qualities',
  dice: '1d20',
  content: [
    "1;Balding;Spits;Hiding a fugitive",
    "2;Stocky build;Always eating;Adores baby animals",
    "3;Very tall;Moves quickly;Obsessed with fire",
    "4;Beauty mark;Card tricks;In a religious cult",
    "5;One eye;Prays aloud;Is a half-demon",
    "6;Braided hair;Writes in diary;Was a wizard's apprentice",
    "7;Muscular;Apologetic;Needlessly picks pockets",
    "8;White hair;Slaps backs;Has a false identity",
    "9;Scar on face;Drops things;Afraid of storms",
    "10;Willowy build;Swears oaths;Has functional gills",
    "11;Sweaty;Makes puns;In deep gambling debt",
    "12;Cleft chin;Rare accent;Works as a smuggler",
    "13;Frail;Easily spooked;Is a werewolf",
    "14;Big eyebrows;Forgetful;Can actually smell lies",
    "15;Tattooed;Speaks quietly;Cast out of wealthy family",
    "16;Floppy hat;Twitches;In love with a bartender",
    "17;Gold tooth;Moves slowly;Left the Thieves' Guild",
    "18;Six fingers;Speaks loudly;Best friends with a prince",
    "19;Very short;Swaggers;Retired crawler",
    "20;Large nose;Smokes pipe;Has a pet basilisk",
  ],
};

const npcOccupation = {
  name: 'NPC Occupation',
  dice: '1d4',
  content: [
    "1;Gravedigger;Carpenter;Scholar;Blacksmith",
    "2;Tax collector;Farmer;Bartender;Beggar",
    "3;Baker;Cook;Sailor;Butcher",
    "4;Locksmith;Cobbler;Friar/nun;Merchant",
  ],
};

const npcNameByAncestry = {
  name: 'NPC Name by Ancestry',
  dice: '1d20',
  content: [
    "1;Hera;Sarenia;Kog;Myrtle;Troga;Hesta",
    "2;Torin;Ravos;Dibbs;Robby;Boraal;Matteo",
    "3;Ginny;Imeria;Fronk;Nora;Urgana;Rosalin",
    "4;Gant;Farond;Irv;Percy;Zoraal;Endric",
    "5;Olga;Isolden;Squag;Daisy;Scalga;Kiara",
    "6;Dendor;Kieren;Mort;Jolly;Krell;Yao",
    "7;Ygrid;Mirenel;Vig;Evelyn;Voraga;Corina",
    "8;Pike;Riarden;Sticks;Horace;Morak;Rowan",
    "9;Sarda;Allindra;Gorb;Willie;Draga;Hariko",
    "10;Brigg;Arlomas;Yogg;Gertie;Sorak;Ikam",
    "11;Zorli;Sylara;Plok;Peri;Varga;Mariel",
    "12;Yorin;Tyr;Zrak;Carlsby;Ulgar;Jin",
    "13;Jorgena;Rinariel;Dent;Nyx;Jala;Hana",
    "14;Trogin;Saramir;Krik;Kellan;Kresh;Lios",
    "15;Riga;Vedana;Mizzo;Fern;Zana;Indra",
    "16;Barton;Elindos;Bort;Harlow;Torvash;Remy",
    "17;Katrina;Ophelia;Nabo;Moira;Rokara;Nura",
    "18;Egrim;Cydaros;Hink;Sage;Gartak;Vakesh",
    "19;Elsa;Tiramel;Bree;Reenie;Iskana;Una",
    "20;Orgo;Varond;Kreeb;Wendry;Ziraak;Nabilo",
  ],
};

const tavernName = {
  name: 'Tavern',
  dice: '1d20',
  content: [
    "1;The Crimson;Rat;High-stakes gambling",
    "2;The Dancing;Wench;Illicit poison sales",
    "3;The Dog;& Lantern;Wizard patrons",
    "4;The Rusty;Eel;Cult rituals in the basement",
    "5;The Demon's;Goblet;Rare food and drinks",
    "6;The Singing;Trident;Dancing contests",
    "7;The Boar;& Candle;Violent brawls",
    "8;The Silver;Dagger;Ancient tunnels in the cellar",
    "9;The Filthy;Wheel;Thugs for hire",
    "10;The Captain's;Pig;Thieves' Guild spies",
    "11;The Jolly;Snake;Hostility toward spellcasters",
    "12;The Wise;Camel;City Watch patrons",
    "13;Cloak;& Dragon;Underground pit fighting",
    "14;The Royal;Axe;Famous bard performances",
    "15;The Gilded;Bell;Treasonous meetings",
    "16;The Blade;& Tankard;Ban on all weapons",
    "17;The Drunken;Shield;Hostility toward non-regulars",
    "18;Cup;& Blade;Exotic taxidermy collection",
    "19;The Jeweled;Anvil;Pirate and smuggler patrons",
    "20;The Frog;& Bard;Drinking contests",
  ],
};

const tavernFood = {
  name: 'Tavern Food',
  dice: '1d12',
  content: [
    "1;Boiled cabbage;Alligator steak;Fried basilisk eyes",
    "2;Dates and olives;Rosemary ham;Giant snake filet",
    "3;Goat stew;Raw flailfish;Griffon eggs",
    "4;Pickled eggs;Seared venison;Candied scarabs",
    "5;Cheese and bread;Buttered ostrich;Baked troll bones",
    "6;Hearty broth;Spicy veal curry;Cockatrice wings",
    "7;Meat pastry;Salted frog legs;Crispy silkworms",
    "8;Mushroom kebab;Herbed snails;Roasted stingbat",
    "9;Roasted pigeon;Grilled tiger eel;Dire lobster tail",
    "10;Garlic flatbread;Spit-roasted boar;Wyvern tongue",
    "11;Turkey leg;Saffron duck neck;Shrieking seaweed",
    "12;Rat-on-a-stick;Crimson pudding;Dragon shanks",
  ],
};

const tavernDrinks = {
  name: 'Tavern Drinks',
  dice: '1d12',
  content: [
    "1;Barnacle grog. 1 cp, DC 9 Constitution check or blind 1 hour",
    "2;Watered-down swill. 3 cp, toxic, -1 Constitution 1 hour",
    "3;Vinegary wine. 5 cp, stains teeth purple, -1 Charisma 1 hour",
    "4;Stale ale. 5 cp, dulls the senses, -1 Wisdom 1 hour",
    "5;Clear spirits. 1 sp, burns, ends 1 bad effect of another drink",
    "6;House ale. 2 sp, crisp and clean, first mug is free",
    "7;Autumn mead. 3 sp, floral, doubles effect of next drink",
    "8;Halfling summer wine. 5 sp, sparkling, +1 Charisma 1 hour",
    "9;Elvish brandy. 5 sp, spiced, +1 Intelligence 1 hour",
    "10;Dwarvish gold ale. 5 sp, icy cold, regain 1d4 HP per mug",
    "11;Aged royal wine. 2 gp, smooth and rich, +1 Wisdom 1 hour",
    "12;Van Dinkle whiskey. 20 gp a sip, only 5 bottles made, +1 XP",
  ],
};

const treasure0to3 = {
  name: 'Treasure 0-3',
  dice: '1d100',
  content: [
    "1;Fourchette en fer-blanc tordue (1 pc)",
    "02-03;Torche boueuse (2 pc)",
    "04-05;Sac de billes bien lisses (2 pc)",
    "06-07;10 pc dans un sachet graisseux",
    "08-09;Lanterne rouillée à la vitre cassée (1 po)",
    "10-11;Dent en argent (1 po)",
    "12-13;Dague émoussée (1 po)",
    "14-15;Deux fioles en verre vides (6 po)",
    "16-17;60 pa dans une botte pourrie",
    "18-19;Miroir de poche craquelé (8 po)",
    "20-21;Hache à deux mains ébréchée (9 po)",
    "22-23;10 po dans un coffret de bois moisi",
    "24-25;Éclat d’émeraude (10 po)",
    "26-27;Arc long et paquet de 40 flèches (10 po)",
    "28-29;Armure de cuir poussiéreuse teinte en noir (10 po)",
    "30-31;Bouclier lourd éraflé (10 po)",
    "32-33;Épée bâtarde simple mais de bonne facture (10 po)",
    "34-35;12 po dans la poche d’un manteau déchiré",
    "36-37;Épée à deux mains à lame ondulée (12 po)",
    "38-39;Paire d’épées courtes de fabrication elfique (14 po)",
    "40-41;Bol en or (15 po)",
    "42-43;Statuette en obsidienne de Shune l’Infâme (15 po)",
    "44-45;Perle miniature (20 po)",
    "46-47;Scarabée en broche de jade et d’or (20 po)",
    "48-49;Sac de 10 pointes en argent (2 po chacune)",
    "50-53;Médaillon contenant le portrait d’un halfelin (20 po)",
    "54-55;Deux boucliers nains élégamment forgés (20 po)",
    "56-57;Paire de dagues argentées (10 po chacune)",
    "58-59;Chope d’hydromel en cuivre et en or (20 po)",
    "60-61;Sac de cinq écailles de dragon rouge (5 po chacune)",
    "62-63;Cape légère et chaude en soie d’araignée (25 po)",
    "64-65;Bel ensemble de pièces d’échec en ivoire (25 po)",
    "66-67;Moitié de cotte de mailles (30 po)",
    "68-69;Trio de marteaux de guerre assortis (10 po chacun)",
    "70-71;Fragment de saphir (30 po)",
    "72-73;Deux pantoufles et une robe en soie (35 po)",
    "74-75;Bandeau en argent et en or (40 po)",
    "76-77;Perle polie et resplendissante (40 po)",
    "78-79;Bouclier en mithral gravé de dragons en plein essor (40 po)",
    "80-81;Idole de singe en or tenant un rubis entre ses dents (60 po)",
    "82-83;Belle cotte de mailles (60 po)",
    "84-85;Émeraude fissurée (60 po)",
    "86-87;Deux perles chatoyantes (40 po chacune)",
    "88-89;Parchemin de sort de rang 1 (80 po)",
    "90-91;Potion d’invisibilité (80 po)",
    "92-93;Baguette magique, sort de rang 2 (100 po)",
    "94-95;OEuf de la Cocatrice (100 po)",
    "96-97;Armure +1 (atout, malédiction) (150 po)",
    "98-99;Sac sans fond (vertu, défaut) (150 po)",
    "0;Arme magique +1 (atout) (200 po)",
  ],
};

const ruinsEncounter = {
  name: 'Ruins Encounter',
  dice: '1d100',
  content: [
    "01;A mutated cave brute explodes through a crumbling wall",
    "02-03;A silent gelatinous cube sweeps up a corridor",
    "04-05;A roving owlbear scavenges for dead bodies to eat",
    "06-07;Rival crawlers confront the PCs; they were \"here first\"",
    "08-09;[1d6] rust monsters swarm a crack bubbling with mercury",
    "10-11;A legless suit of animated armor pulls itself along the floor",
    "12-13;A groaning wall collapses at the slightest touch",
    "14-15;A chalk note on the wall: \"Karov, we'll be at the Loyal Hog\"",
    "16-17;Mort the goblin is digging in cracks for grubs and beetles",
    "18-19;The floor collapses into a pit [1d6] x 10 feet deep",
    "20-21;A raiding team of [2d4] hobgoblins moves in tight formation",
    "22-23;[2d4] web-covered skeletons form from scattered bones",
    "24-25;[1d4] giant dung beetles roll huge balls of dried excrement",
    "26-27;An ochre jelly hides inside a pond or sinkhole",
    "28-29;A single, perfect rose grows up between the flagstones",
    "30-31;[2d4] bandits shutter lanterns and set up a hasty ambush",
    "32-33;Three goblins toughen each other's skulls with frying pans",
    "34-35;[2d6] beastmen pummel a giant centipede with rocks",
    "36-37;A gas leak causes all light sources to explode and go out",
    "38-39;A gelatinous cube full of handy items is stuck inside a pit",
    "40-41;A swarm of clattering, gold scarab beetles flies into sight",
    "42-43;A wounded NPC staggers up to the PCs and begs for help",
    "44-45;A rusty portcullis slams down, separating the PCs",
    "46-47;A strangler hides above a backpack stuffed with rocks",
    "48-49;A weeping ghost floats by, distracted by its own ranting",
    "50-53;[2d4] kobolds sneak up behind the PCs for a surprise attack",
    "54-55;Ancient clay pots vibrate with hypnotizing resonance",
    "56-57;[1d6] gricks shred dead giant rats and use the fur for nesting",
    "58-59;Rival crawlers escort a frail noble tourist on an \"adventure\"",
    "60-61;[3d4] goblin scavengers barter and trade for odd trinkets",
    "62-63;[2d4] dwarven miners (soldiers) shore up a collapsing wall",
    "64-65;[2d4] giant wasps build a huge, papery nest on the ceiling",
    "66-67;A dense cloud of sulfuric mist rises from a floor crack",
    "68-69;A swarm of spiders surges out of a gauzy egg sack",
    "70-71;An ogre named Lud scratches rude words into the wall",
    "72-73;[1d6] goblins brawl with [2d4] kobolds over a grick carcass",
    "74-75;[2d4] giant bats roost on the ceiling; light disturbs them",
    "76-77;An ettercap spins web cocoons around its still-living prey",
    "78-79;[1d6] cultists hunt for humanoid bones for a nefarious ritual",
    "80-81;A dryad searches for her tree that bugbears chopped up",
    "82-83;A deep gnome plays haunting music on humming fungi",
    "84-85;[2d6] kobolds work in a makeshift, volatile alchemy lab",
    "86-87;A stone golem endlessly stacks the same rocks into piles",
    "88-89;Two darkmantles circle each other in a duel of intimidation",
    "90-91;[2d6] goblins carry their bugbear king on a rickety litter",
    "92-93;[2d4] cave creepers swarm up the hallway",
    "94-95;A recent campfire still burns with glowing cinders",
    "96-97;A minotaur guides the Wandering Merchant on a path",
    "98-99;Roll two encounters and combine the results (reroll 98-99)",
    "00;The body of a dead crawler holds a random magic item",
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
  ancestry,
  alignment,
  age,
  wealth,
  npcQualities,
  npcOccupation,
  npcNameByAncestry,
  tavernName,
  tavernFood,
  tavernDrinks,
  treasure0to3,
  ruinsEncounter,
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