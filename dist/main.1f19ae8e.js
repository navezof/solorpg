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
var tables = [distance, roomType, trap, luxuryItem, monsterMob, minorHazard, majorHazard, soloMonster, treasure, npc, bossMonster];
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
  var result = '';
  var randomNumber = rollDie(table.dice);
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
  var table = (0, _table.getTableWithName)(tableName);
  return rollOnTableWithIndex(table, columnIndex);
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
  journal.appendChild(entry);
  var titleElement = document.createElement('p');
  titleElement.className = "journal-title";
  titleElement.innerText = title;
  entry.appendChild(titleElement);
  var journalContentElement = document.createElement('div');
  journalContentElement.className = "journal-content";
  journalContentElement.innerText = content[0].textContent;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64884" + '/');
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