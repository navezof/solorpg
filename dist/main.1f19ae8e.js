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
exports.trap = exports.tables = exports.roomType = exports.distance = void 0;
var distance = exports.distance = {
  name: 'Distance',
  dice: '1d6',
  entries: [{
    number: '1',
    element: 'Close'
  }, {
    number: '2-3',
    element: 'Near at #1d3 meter'
  }, {
    number: '4-6',
    element: 'Far'
  }]
};
var roomType = exports.roomType = {
  name: 'Room Type',
  dice: '1d10',
  entries: [{
    number: '1-2',
    element: 'Empty'
  }, {
    number: '3',
    element: '{Trap}'
  }, {
    number: '4',
    element: 'Minor hazard'
  }, {
    number: '5',
    element: 'Solo monster'
  }, {
    number: '6',
    element: 'NPC'
  }, {
    number: '7',
    element: 'Monster mob'
  }, {
    number: '8',
    element: 'Major hazard'
  }, {
    number: '9',
    element: 'Treasure'
  }, {
    number: '10',
    element: 'Boss monster'
  }]
};
var trap = exports.trap = {
  name: 'Trap',
  dice: '1d6',
  entries: [{
    number: '1',
    element: 'Pit'
  }, {
    number: '2',
    element: 'Poison dart'
  }, {
    number: '3',
    element: 'Fireball'
  }, {
    number: '4',
    element: 'Gas'
  }, {
    number: '5',
    element: 'Blade'
  }, {
    number: '6',
    element: 'Electricity'
  }]
};
var tables = exports.tables = [distance, roomType, trap];
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
exports.rollOnTable = rollOnTable;
function rollDie(expression) {
  var parts = expression.split('d');
  var numberOfDice = parseInt(parts[0], 10);
  var sides = parseInt(parts[1], 10);
  var total = 0;
  for (var i = 0; i < numberOfDice; i += 1) {
    total += Math.floor(Math.random() * sides) + 1;
  }
  return total;
}
function rollOnTable(table) {
  var result = '';
  var randomNumber = rollDie(table.dice);
  for (var i = 0; i < table.entries.length; i += 1) {
    var entry = table.entries[i];
    if (entry.number.includes('-')) {
      var range = entry.number.split('-');
      var lowEnd = parseInt(range[0], 10);
      var highEnd = parseInt(range[1], 10);
      if (randomNumber >= lowEnd && randomNumber <= highEnd) {
        result = entry.element;
      }
    } else if (entry.number === randomNumber) {
      result = entry.element;
    }
  }
  var fullResult = "Roll on ".concat(table.name, ": ").concat(result, " (").concat(randomNumber, ") ");
  return fullResult;
}
},{}],"journal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearJournal = clearJournal;
exports.createJournalLine = createJournalLine;
exports.createRollOnTableButton = createRollOnTableButton;
var _parser = require("./parser");
var _roll = require("./roll");
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
    createJournalLine((0, _parser.parseExpression)((0, _roll.rollOnTable)(table)));
  };
  return button;
}
function clearJournal() {
  var journal = document.getElementById('journal');
  journal.innerHTML = '';
}
},{"./parser":"parser.js","./roll":"roll.js"}],"parser.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDie = parseDie;
exports.parseExpression = parseExpression;
exports.parseTable = parseTable;
var _table = require("./table");
var _utils = _interopRequireDefault(require("./utils"));
var _journal = require("./journal");
var _roll = require("./roll");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function parseTable(expression) {
  console.log("parseForTable: ".concat(expression));
  var content = [];
  var openIndex = expression.indexOf('{');
  var closeIndex = expression.indexOf('}');
  var before = expression.substring(0, openIndex);
  var tableName = expression.substring(openIndex + 1, closeIndex);
  var after = expression.substring(closeIndex + 1);
  var table = _table.tables.find(function (t) {
    return t.name === tableName;
  });
  var button = null;
  if (!table) {
    console.error("Table ".concat(tableName, " not found"));
  } else {
    button = (0, _journal.createRollOnTableButton)(table);
  }
  content.push(document.createTextNode(before));
  content.push(document.createTextNode(tableName));
  if (button) {
    content.push(button);
  }
  if ((0, _utils.default)(after)) {
    content.push.apply(content, _toConsumableArray(parseExpression(after)));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}
function parseExpression(expression) {
  for (var i = 0; i < expression.length; i += 1) {
    if (expression[i] === '{') {
      return parseTable(expression);
    }
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
  content.push(document.createTextNode((0, _roll.rollDie)(diceExpression)));
  if ((0, _utils.default)(after)) {
    content.push.apply(content, _toConsumableArray(parseExpression(after)));
  } else {
    content.push(parseExpression(after));
  }
  return content;
}
},{"./table":"table.js","./utils":"utils.js","./journal":"journal.js","./roll":"roll.js"}],"main.js":[function(require,module,exports) {
"use strict";

var _parser = require("./parser");
var _journal = require("./journal");
var button = document.getElementById('button');
var btnClearJournal = document.getElementById('clearJournal');
button.onclick = function () {
  // TEST_parseExpression();
  // TEST_parseExpressionWithTable()
  // TEST_createButton();

  // var content = parseExpression("Simple expression with no dice or tables");
  // var content = parseDie("roll [1d6] times");
  // const content = parseDie('roll on {Trap} and then do something else');
  var content = (0, _parser.parseExpression)('roll [1d6] times on table {Trap} and then do something else');
  (0, _journal.createJournalLine)(content);
};
btnClearJournal.onclick = function () {
  console.log('clear journal clicked');
  (0, _journal.clearJournal)();
};
},{"./parser":"parser.js","./journal":"journal.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50621" + '/');
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