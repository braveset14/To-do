/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f5f5f5;
    color: #333;
}

#app {
    min-height: 100vh;
}

/* Loading State */
.loading {
    text-align: center;
    padding: 2rem;
    font-size: 1.2rem;
    color: #666;
}

/* Main App Layout */
.app-container {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: 300px;
    background: #2c3e50;
    color: white;
    padding: 2rem;
    height: 100vh;
    position: fixed;
    overflow-y: auto;
}

.sidebar h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    border-bottom: 2px solid #34495e;
    padding-bottom: 0.5rem;
}

#add-project-btn {
    width: 100%;
    padding: 0.75rem;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 1.5rem;
    font-size: 1rem;
}

#add-project-btn:hover {
    background: #2980b9;
}

#projects-list {
    list-style: none;
}

.project-item {
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #34495e;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project-item.active {
    background: #3498db;
}

.project-item:hover {
    background: #3d566e;
}

.delete-project-btn {
    background: #e74c3c;
    color: white;
    border: none;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-size: 0.8rem;
}

.delete-project-btn:hover {
    background: #c0392b;
}

/* Main Content */
.main-content {
    flex: 1;
    margin-left: 300px;
    padding: 2rem;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #ecf0f1;
}

#current-project-title {
    color: #2c3e50;
    font-size: 2rem;
}

#add-todo-btn {
    padding: 0.75rem 1.5rem;
    background: #27ae60;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

#add-todo-btn:hover {
    background: #219a52;
}

/* Todos Container */
#todos-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.empty-state {
    text-align: center;
    color: #7f8c8d;
    font-style: italic;
    padding: 3rem;
    background: white;
    border-radius: 10px;
    border: 2px dashed #bdc3c7;
}

/* Todo Items */
.todo-item {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;
    gap: 1rem;
    border-left: 4px solid #bdc3c7;
}

.todo-item.priority-low {
    border-left-color: #27ae60;
}

.todo-item.priority-medium {
    border-left-color: #f39c12;
}

.todo-item.priority-high {
    border-left-color: #e74c3c;
}

.todo-item.completed {
    opacity: 0.7;
    background: #ecf0f1;
}

.todo-item.completed .todo-title {
    text-decoration: line-through;
}

.todo-checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.todo-content {
    flex: 1;
}

.todo-title {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.todo-due {
    font-size: 0.9rem;
    color: #7f8c8d;
}

.todo-actions {
    display: flex;
    gap: 0.5rem;
}

.edit-todo-btn, .delete-todo-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
}

.edit-todo-btn {
    background: #3498db;
    color: white;
}

.edit-todo-btn:hover {
    background: #2980b9;
}

.delete-todo-btn {
    background: #e74c3c;
    color: white;
}

.delete-todo-btn:hover {
    background: #c0392b;
}

/* Modals */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal.hidden {
    display: none;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.modal-content h2 {
    margin-bottom: 1.5rem;
    color: #2c3e50;
    border-bottom: 2px solid #ecf0f1;
    padding-bottom: 0.5rem;
}

/* Forms */
.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #2c3e50;
}

.form-group input,
.form-group textarea,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #ecf0f1;
    border-radius: 5px;
    font-size: 1rem;
    transition: border-color 0.3s;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
    outline: none;
    border-color: #3498db;
}

.form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
}

.form-actions button {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.form-actions button[type="submit"] {
    background: #27ae60;
    color: white;
}

.form-actions button[type="submit"]:hover {
    background: #219a52;
}

.form-actions button[type="button"] {
    background: #95a5a6;
    color: white;
}

.form-actions button[type="button"]:hover {
    background: #7f8c8d;
}
.hidden {
    display: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
    .app-container {
        flex-direction: column;
    }
    
    .sidebar {
        position: static;
        width: 100%;
        height: auto;
    }
    
    .main-content {
        margin-left: 0;
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    background-color: #f5f5f5;\r\n    color: #333;\r\n}\r\n\r\n#app {\r\n    min-height: 100vh;\r\n}\r\n\r\n/* Loading State */\r\n.loading {\r\n    text-align: center;\r\n    padding: 2rem;\r\n    font-size: 1.2rem;\r\n    color: #666;\r\n}\r\n\r\n/* Main App Layout */\r\n.app-container {\r\n    display: flex;\r\n    min-height: 100vh;\r\n}\r\n\r\n/* Sidebar */\r\n.sidebar {\r\n    width: 300px;\r\n    background: #2c3e50;\r\n    color: white;\r\n    padding: 2rem;\r\n    height: 100vh;\r\n    position: fixed;\r\n    overflow-y: auto;\r\n}\r\n\r\n.sidebar h2 {\r\n    margin-bottom: 1.5rem;\r\n    font-size: 1.5rem;\r\n    border-bottom: 2px solid #34495e;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n#add-project-btn {\r\n    width: 100%;\r\n    padding: 0.75rem;\r\n    background: #3498db;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    margin-bottom: 1.5rem;\r\n    font-size: 1rem;\r\n}\r\n\r\n#add-project-btn:hover {\r\n    background: #2980b9;\r\n}\r\n\r\n#projects-list {\r\n    list-style: none;\r\n}\r\n\r\n.project-item {\r\n    padding: 1rem;\r\n    margin-bottom: 0.5rem;\r\n    background: #34495e;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.project-item.active {\r\n    background: #3498db;\r\n}\r\n\r\n.project-item:hover {\r\n    background: #3d566e;\r\n}\r\n\r\n.delete-project-btn {\r\n    background: #e74c3c;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 50%;\r\n    width: 24px;\r\n    height: 24px;\r\n    cursor: pointer;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.delete-project-btn:hover {\r\n    background: #c0392b;\r\n}\r\n\r\n/* Main Content */\r\n.main-content {\r\n    flex: 1;\r\n    margin-left: 300px;\r\n    padding: 2rem;\r\n}\r\n\r\n.content-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    padding-bottom: 1rem;\r\n    border-bottom: 2px solid #ecf0f1;\r\n}\r\n\r\n#current-project-title {\r\n    color: #2c3e50;\r\n    font-size: 2rem;\r\n}\r\n\r\n#add-todo-btn {\r\n    padding: 0.75rem 1.5rem;\r\n    background: #27ae60;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n}\r\n\r\n#add-todo-btn:hover {\r\n    background: #219a52;\r\n}\r\n\r\n/* Todos Container */\r\n#todos-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.empty-state {\r\n    text-align: center;\r\n    color: #7f8c8d;\r\n    font-style: italic;\r\n    padding: 3rem;\r\n    background: white;\r\n    border-radius: 10px;\r\n    border: 2px dashed #bdc3c7;\r\n}\r\n\r\n/* Todo Items */\r\n.todo-item {\r\n    background: white;\r\n    padding: 1.5rem;\r\n    border-radius: 10px;\r\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    border-left: 4px solid #bdc3c7;\r\n}\r\n\r\n.todo-item.priority-low {\r\n    border-left-color: #27ae60;\r\n}\r\n\r\n.todo-item.priority-medium {\r\n    border-left-color: #f39c12;\r\n}\r\n\r\n.todo-item.priority-high {\r\n    border-left-color: #e74c3c;\r\n}\r\n\r\n.todo-item.completed {\r\n    opacity: 0.7;\r\n    background: #ecf0f1;\r\n}\r\n\r\n.todo-item.completed .todo-title {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.todo-checkbox {\r\n    width: 20px;\r\n    height: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    flex: 1;\r\n}\r\n\r\n.todo-title {\r\n    font-size: 1.2rem;\r\n    margin-bottom: 0.5rem;\r\n    color: #2c3e50;\r\n}\r\n\r\n.todo-due {\r\n    font-size: 0.9rem;\r\n    color: #7f8c8d;\r\n}\r\n\r\n.todo-actions {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.edit-todo-btn, .delete-todo-btn {\r\n    padding: 0.5rem 1rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.edit-todo-btn {\r\n    background: #3498db;\r\n    color: white;\r\n}\r\n\r\n.edit-todo-btn:hover {\r\n    background: #2980b9;\r\n}\r\n\r\n.delete-todo-btn {\r\n    background: #e74c3c;\r\n    color: white;\r\n}\r\n\r\n.delete-todo-btn:hover {\r\n    background: #c0392b;\r\n}\r\n\r\n/* Modals */\r\n.modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0,0.5);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n.modal.hidden {\r\n    display: none;\r\n}\r\n\r\n.modal-content {\r\n    background: white;\r\n    padding: 2rem;\r\n    border-radius: 10px;\r\n    width: 90%;\r\n    max-width: 500px;\r\n    box-shadow: 0 10px 30px rgba(0,0,0,0.3);\r\n}\r\n\r\n.modal-content h2 {\r\n    margin-bottom: 1.5rem;\r\n    color: #2c3e50;\r\n    border-bottom: 2px solid #ecf0f1;\r\n    padding-bottom: 0.5rem;\r\n}\r\n\r\n/* Forms */\r\n.form-group {\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n.form-group label {\r\n    display: block;\r\n    margin-bottom: 0.5rem;\r\n    font-weight: 600;\r\n    color: #2c3e50;\r\n}\r\n\r\n.form-group input,\r\n.form-group textarea,\r\n.form-group select {\r\n    width: 100%;\r\n    padding: 0.75rem;\r\n    border: 2px solid #ecf0f1;\r\n    border-radius: 5px;\r\n    font-size: 1rem;\r\n    transition: border-color 0.3s;\r\n}\r\n\r\n.form-group input:focus,\r\n.form-group textarea:focus,\r\n.form-group select:focus {\r\n    outline: none;\r\n    border-color: #3498db;\r\n}\r\n\r\n.form-actions {\r\n    display: flex;\r\n    gap: 1rem;\r\n    justify-content: flex-end;\r\n    margin-top: 2rem;\r\n}\r\n\r\n.form-actions button {\r\n    padding: 0.75rem 1.5rem;\r\n    border: none;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n}\r\n\r\n.form-actions button[type=\"submit\"] {\r\n    background: #27ae60;\r\n    color: white;\r\n}\r\n\r\n.form-actions button[type=\"submit\"]:hover {\r\n    background: #219a52;\r\n}\r\n\r\n.form-actions button[type=\"button\"] {\r\n    background: #95a5a6;\r\n    color: white;\r\n}\r\n\r\n.form-actions button[type=\"button\"]:hover {\r\n    background: #7f8c8d;\r\n}\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/* Responsive Design */\r\n@media (max-width: 768px) {\r\n    .app-container {\r\n        flex-direction: column;\r\n    }\r\n    \r\n    .sidebar {\r\n        position: static;\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    \r\n    .main-content {\r\n        margin-left: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   createDefaultProject: () => (/* binding */ createDefaultProject)
/* harmony export */ });
function Project(name,id=null){
    this.name=name;
    this.id= id || Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.todos=[];
    this.createdAt=new Date();

    this.addTodo=function(todo1){
        const todo=new Todo(todo1.title,todo1.description,todo1.dueDate,todo1.priority,this.id);
        this.todos.push(todo);
        return todo;
    }
    this.deleteTodo=function(todoId){
         this.todos = this.todos.filter(todo => todo.id !== todoId);
    }
    this.getTodo=function(todoId){
         return this.todos.find(todo => todo.id === todoId);
    }
}
function createDefaultProject(){
     const defaultProject = new Project('Default', 'default');
     defaultProject.addTodo({
         title: 'Welcome to your todo app!',
         description: 'Click here to edit me',
         priority: 'medium'
     });
     return defaultProject;
}

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
function Todo(title,description='',duedate='',priority='medium',projectId='default'){
    this.id=Date.now().toString() + Math.random().toString(36).substr(2, 9);
    this.title=title;
    this.description=description;
    this.duedate=duedate;
    this.priority=priority;
    this.completed=false;
    this.projectId=projectId;
    this.createdAt=new Date();

    this.toggleComplete = function() {
        this.completed = !this.completed;
    };
    this.updateDetails = function(updates) {
        Object.assign(this, updates);
    };
}

/***/ }),

/***/ "./src/domManager.js":
/*!***************************!*\
  !*** ./src/domManager.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
const domManager={
    init(projects, currentProjectId) {
        this.renderProjectsSidebar(projects, currentProjectId);
        this.renderTodos(currentProjectId);
    },
     renderProjectsSidebar(projects, currentProjectId) {
        const projectsList = document.getElementById('projects-list');
        projectsList.innerHTML = projects.map(project => `
            <li class="project-item ${project.id === currentProjectId ? 'active' : ''}" 
                data-project-id="${project.id}">
                ${project.name}
                ${project.id !== 'default' ? '<button class="delete-project-btn">×</button>' : ''}
            </li>
        `).join('');
    },
    renderTodos(project) {
        const todosContainer = document.getElementById('todos-container');
        const projectTitle = document.getElementById('current-project-title');
        
        projectTitle.textContent = project.name;
        
        if (project.todos.length === 0) {
            todosContainer.innerHTML = '<p class="empty-state">No todos yet. Add one above!</p>';
            return;
        }

        todosContainer.innerHTML = project.todos.map(todo => `
            <div class="todo-item ${todo.completed ? 'completed' : ''} priority-${todo.priority}" 
                 data-todo-id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''} class="todo-checkbox">
                <div class="todo-content">
                    <h3 class="todo-title">${todo.title}</h3>
                    ${todo.dueDate ? `<span class="todo-due">Due: ${todo.dueDate}</span>` : ''}
                </div>
                <div class="todo-actions">
                    <button class="edit-todo-btn">Edit</button>
                    <button class="delete-todo-btn">Delete</button>
                </div>
            </div>
        `).join('');
    },
    showTodoModal() {
        document.getElementById('todo-modal').classList.remove('hidden');
    },
     hideTodoModal() {
        document.getElementById('todo-modal').classList.add('hidden');
    },

    showProjectModal() {
        document.getElementById('project-modal').classList.remove('hidden');
    },

    hideProjectModal() {
        document.getElementById('project-modal').classList.add('hidden');
    }
}

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectManager: () => (/* binding */ projectManager)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");




const  projectManager={
    projects:[],
    currentProjectId: 'default',

    init() {
        const savedData = _storage__WEBPACK_IMPORTED_MODULE_0__.storage.loadData();
        if (savedData && savedData.projects) {
            // Load existing data
            this.projects = savedData.projects;
            this.currentProjectId = savedData.currentProjectId || 'default';
        } else {
            // First time user - create default project
            this.setupDefaultProject();
        }
    },
    
    setupDefaultProject() {
        const defaultProject = (0,_Project__WEBPACK_IMPORTED_MODULE_1__.createDefaultProject)(); // This calls the factory from project.js
        this.projects.push(defaultProject);
        this.currentProjectId = defaultProject.id;
        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.saveData(this.getData());
    },

     addProject(name) { // Fixed parameter name
        const newProject = new _Project__WEBPACK_IMPORTED_MODULE_1__.Project(name); // Fixed variable name
        this.projects.push(newProject);
        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.saveData(this.getData());
        return newProject;
    },


    deleteProject(projectId) { // Fixed parameter name
        if (projectId === 'default') return false;
        
        this.projects = this.projects.filter(project => project.id !== projectId);
        
        if (this.currentProjectId === projectId) { // Fixed variable name
            this.currentProjectId = 'default';
        }
        
        _storage__WEBPACK_IMPORTED_MODULE_0__.storage.saveData(this.getData());
        return true;
    },
     setCurrentProject(projectId) {
        const project = this.getProject(projectId);
        if (project) {
            this.currentProjectId = projectId;
            _storage__WEBPACK_IMPORTED_MODULE_0__.storage.saveData(this.getData());
            return true;
        }
        return false;
    },
    
    getCurrentProject(){
        return this.getProject(this.currentProjectId);
    },
    getProject(projectId) {
        return this.projects.find(project => project.id === projectId);
    },
    getAllProjects() {
        return this.projects;
    },
    getData(){
        return{
            projects:this.projects,
            currentProjectId:this.currentProjectId
        };
    }
}

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storage: () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
  // ADD THIS
        

const storage = {
    // Key for localStorage
    STORAGE_KEY: 'todoAppData',
    
    // Save all app data to localStorage
    saveData(data) {
        try {
            const dataToStore = {
                projects: data.projects,
                currentProjectId: data.currentProjectId,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dataToStore));
            return true;
        } catch (error) {
            console.error('Failed to save data:', error);
            return false;
        }
    },
    
    // Load app data from localStorage
    loadData() {
        try {
            const storedData = localStorage.getItem(this.STORAGE_KEY);
            if (!storedData) return null;
            
            const parsedData = JSON.parse(storedData);
            if (parsedData.projects) {
                parsedData.projects = this.reviveProjects(parsedData.projects);
            }
            return parsedData;
        } catch (error) {
            console.error('Failed to load data:', error);
            return null;
        }
    },
    reviveProjects(projectsData) {
        return projectsData.map(projectData => {
            // Create new Project instance
            const project = new _Project_js__WEBPACK_IMPORTED_MODULE_0__.Project(projectData.name, projectData.id);
            project.createdAt = new Date(projectData.createdAt);
            
            // Convert todos to Todo instances
            project.todos = projectData.todos.map(todoData => {
                const todo = new _Todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo(
                    todoData.title,
                    todoData.description,
                    todoData.dueDate,
                    todoData.priority,
                    todoData.projectId
                );
                
                // Manually set properties that don't go through constructor
                todo.id = todoData.id;
                todo.completed = todoData.completed;
                todo.createdAt = new Date(todoData.createdAt);
                
                return todo;
            });
            
            return project;
        });
    },
    
    // Clear all saved data (for testing/reset)
    clearData() {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
            return true;
        } catch (error) {
            console.error('Failed to clear data:', error);
            return false;
        }
    },
    
    // Check if we have saved data
    hasData() {
        return localStorage.getItem(this.STORAGE_KEY) !== null;
    }
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/toDoManager.js":
/*!****************************!*\
  !*** ./src/toDoManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   todoManager: () => (/* binding */ todoManager)
/* harmony export */ });
/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ "./src/projectManager.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/storage.js");



const todoManager={
    addTodo(data){
        const currentP=_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        if(!currentP) return null;
        const todo=currentP.addTodo(data);
        _storage__WEBPACK_IMPORTED_MODULE_1__.storage.saveData(_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getData());
        return todo;
    },
    deleteTodo(todoId){
        const currentP=_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        if(!currentP) return;
        currentP.deleteTodo(todoId);
        _storage__WEBPACK_IMPORTED_MODULE_1__.storage.saveData();
    },
    toggleTodo(todoId){
        const currentP=_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        if(!currentP) return;
        const todo=currentP.getTodo(todoId);
        if(todo){ 
           todo.toggleComplete();
           _storage__WEBPACK_IMPORTED_MODULE_1__.storage.saveData();
        }
    },
    updateTodo(todoId,updates){
        const currentP=_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        if(!currentP) return;
        const todo = currentP.getTodo(todoId);
        if (todo) {
            todo.updateDetails(updates);
            _storage__WEBPACK_IMPORTED_MODULE_1__.storage.saveData(_projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getData());
        }
    },
    getCurrentTodos() {
        const currentProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        return currentProject ? currentProject.todos : [];
    },
     getTodo(todoId) {
        const currentProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__.projectManager.getCurrentProject();
        return currentProject ? currentProject.getTodo(todoId) : null;
    }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager.js */ "./src/projectManager.js");
/* harmony import */ var _toDoManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoManager.js */ "./src/toDoManager.js");
/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManager.js */ "./src/domManager.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");





  

console.log('index.js loaded successfully!');
class TodoApp {
    constructor() {
        this.init();
    }

    init() {
        // Initialize project manager (loads from storage)
        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.init();
        
        // Get initial data
        const projects = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getAllProjects();
        const currentProject = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject();
        
        // Initialize DOM
        _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.init(projects, _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.currentProjectId);
        
        // Set up event listeners
        this.setupEventListeners();
        
        console.log('Todo app initialized!');
    }

    setupEventListeners() {
        // Add project button
        document.getElementById('add-project-btn').addEventListener('click', () => {
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.showProjectModal();
        });

        // Add todo button
        document.getElementById('add-todo-btn').addEventListener('click', () => {
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.showTodoModal();
        });

        // Project form submission
        document.getElementById('project-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddProject();
        });

        // Todo form submission
        document.getElementById('todo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleAddTodo();
        });

        // Cancel buttons
        document.getElementById('cancel-project').addEventListener('click', () => {
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.hideProjectModal();
        });

        document.getElementById('cancel-todo').addEventListener('click', () => {
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.hideTodoModal();
        });

        // Project list clicks (event delegation)
        document.getElementById('projects-list').addEventListener('click', (e) => {
            this.handleProjectListClick(e);
        });

        // Todos container clicks (event delegation)
        document.getElementById('todos-container').addEventListener('click', (e) => {
            this.handleTodosContainerClick(e);
        });
    }

    handleAddProject() {
        const nameInput = document.getElementById('project-name');
        const name = nameInput.value.trim();
        
        if (name) {
            _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.addProject(name);
            this.refreshUI();
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.hideProjectModal();
            nameInput.value = '';
        }
    }

    handleAddTodo() {
        const title = document.getElementById('todo-title').value.trim();
        const description = document.getElementById('todo-description').value.trim();
        const dueDate = document.getElementById('todo-due-date').value;
        const priority = document.getElementById('todo-priority').value;
        
        if (title) {
            _toDoManager_js__WEBPACK_IMPORTED_MODULE_2__.todoManager.addTodo({
                title,
                description,
                dueDate,
                priority
            });
            this.refreshUI();
            _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.hideTodoModal();
            document.getElementById('todo-form').reset();
        }
    }

    handleProjectListClick(e) {
        const projectItem = e.target.closest('.project-item');
        if (!projectItem) return;

        const projectId = projectItem.dataset.projectId;
        
        if (e.target.classList.contains('delete-project-btn')) {
            // Delete project
            _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.deleteProject(projectId);
        } else {
            // Switch to project
            _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.setCurrentProject(projectId);
        }
        
        this.refreshUI();
    }

    handleTodosContainerClick(e) {
        const todoItem = e.target.closest('.todo-item');
        if (!todoItem) return;

        const todoId = todoItem.dataset.todoId;
        
        if (e.target.classList.contains('todo-checkbox')) {
            // Toggle completion
            _toDoManager_js__WEBPACK_IMPORTED_MODULE_2__.todoManager.toggleTodo(todoId);
            this.refreshUI();
        } else if (e.target.classList.contains('delete-todo-btn')) {
            // Delete todo
            _toDoManager_js__WEBPACK_IMPORTED_MODULE_2__.todoManager.deleteTodo(todoId);
            this.refreshUI();
        } else if (e.target.classList.contains('edit-todo-btn')) {
            // Edit todo (you can implement this later)
            console.log('Edit todo:', todoId);
        }
    }

    refreshUI() {
        const projects = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getAllProjects();
        const currentProject = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.getCurrentProject();
        
        _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.renderProjectsSidebar(projects, _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.projectManager.currentProjectId);
        _domManager_js__WEBPACK_IMPORTED_MODULE_3__.domManager.renderTodos(currentProject);
    }
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new TodoApp();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjNlYzYzMTk1MWE1ZGU1MzdmYWY5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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QUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFlBQVksc0RBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw4REFBYztBQUMxQixVQUFVO0FBQ1Y7QUFDQSxZQUFZLDhEQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBVztBQUN2QjtBQUNBLFVBQVU7QUFDVjtBQUNBLFlBQVksd0RBQVc7QUFDdkI7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFjO0FBQ3ZDLCtCQUErQiw4REFBYztBQUM3QztBQUNBLFFBQVEsc0RBQVUsaUNBQWlDLDhEQUFjO0FBQ2pFLFFBQVEsc0RBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9Ub2RvLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2RvbU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b0RvTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbiNhcHAge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgU3RhdGUgKi9cclxuLmxvYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuXHJcbi8qIE1haW4gQXBwIExheW91dCAqL1xyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIFNpZGViYXIgKi9cclxuLnNpZGViYXIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzJjM2U1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnNpZGViYXIgaDIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM0NDk1ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbiNhZGQtcHJvamVjdC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuI2FkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG59XHJcblxyXG4jcHJvamVjdHMtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ucHJvamVjdC1pdGVtIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW0uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNkNTY2ZTtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTc0YzNjO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xyXG59XHJcblxyXG4vKiBNYWluIENvbnRlbnQgKi9cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmNvbnRlbnQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2YwZjE7XHJcbn1cclxuXHJcbiNjdXJyZW50LXByb2plY3QtdGl0bGUge1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNhZGQtdG9kby1idG4ge1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4jYWRkLXRvZG8tYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTlhNTI7XHJcbn1cclxuXHJcbi8qIFRvZG9zIENvbnRhaW5lciAqL1xyXG4jdG9kb3MtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNiZGMzYzc7XHJcbn1cclxuXHJcbi8qIFRvZG8gSXRlbXMgKi9cclxuLnRvZG8taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNiZGMzYzc7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0ucHJpb3JpdHktbG93IHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwO1xyXG59XHJcblxyXG4udG9kby1pdGVtLnByaW9yaXR5LW1lZGl1bSB7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLnRvZG8taXRlbS5wcmlvcml0eS1oaWdoIHtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZTc0YzNjO1xyXG59XHJcblxyXG4udG9kby1pdGVtLmNvbXBsZXRlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xyXG59XHJcblxyXG4udG9kby1pdGVtLmNvbXBsZXRlZCAudG9kby10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLnRvZG8tY2hlY2tib3gge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2RvLWNvbnRlbnQge1xyXG4gICAgZmxleDogMTtcclxufVxyXG5cclxuLnRvZG8tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxufVxyXG5cclxuLnRvZG8tZHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgY29sb3I6ICM3ZjhjOGQ7XHJcbn1cclxuXHJcbi50b2RvLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0biwgLmRlbGV0ZS10b2RvLWJ0biB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZWRpdC10b2RvLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG59XHJcblxyXG4uZGVsZXRlLXRvZG8tYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNzRjM2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kZWxldGUtdG9kby1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2MwMzkyYjtcclxufVxyXG5cclxuLyogTW9kYWxzICovXHJcbi5tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxufVxyXG5cclxuLm1vZGFsLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2YwZjE7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4vKiBGb3JtcyAqL1xyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMmMzZTUwO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCBpbnB1dCxcclxuLmZvcm0tZ3JvdXAgdGV4dGFyZWEsXHJcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWNmMGYxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxyXG4uZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cyxcclxuLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuXHJcbi5mb3JtLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1hY3Rpb25zIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMTlhNTI7XHJcbn1cclxuXHJcbi5mb3JtLWFjdGlvbnMgYnV0dG9uW3R5cGU9XCJidXR0b25cIl0ge1xyXG4gICAgYmFja2dyb3VuZDogIzk1YTVhNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmZvcm0tYWN0aW9ucyBidXR0b25bdHlwZT1cImJ1dHRvblwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2Y4YzhkO1xyXG59XHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5hcHAtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FB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Qjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuI2FwcCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2FkaW5nIFN0YXRlICovXFxyXFxuLmxvYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBjb2xvcjogIzY2NjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBBcHAgTGF5b3V0ICovXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2lkZWJhciAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMmMzZTUwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM0NDk1ZTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC1wcm9qZWN0LWJ0biB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzI5ODBiOTtcXHJcXG59XFxyXFxuXFxyXFxuI3Byb2plY3RzLWxpc3Qge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzQ0OTVlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pdGVtLmFjdGl2ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjM2Q1NjZlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNjMDM5MmI7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gQ29udGVudCAqL1xcclxcbi5tYWluLWNvbnRlbnQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhlYWRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWNmMGYxO1xcclxcbn1cXHJcXG5cXHJcXG4jY3VycmVudC1wcm9qZWN0LXRpdGxlIHtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10b2RvLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjdhZTYwO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZC10b2RvLWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyMTlhNTI7XFxyXFxufVxcclxcblxcclxcbi8qIFRvZG9zIENvbnRhaW5lciAqL1xcclxcbiN0b2Rvcy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5lbXB0eS1zdGF0ZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6ICM3ZjhjOGQ7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IGRhc2hlZCAjYmRjM2M3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUb2RvIEl0ZW1zICovXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYmRjM2M3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtLnByaW9yaXR5LWxvdyB7XFxyXFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjdhZTYwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtLnByaW9yaXR5LW1lZGl1bSB7XFxyXFxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZjM5YzEyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtLnByaW9yaXR5LWhpZ2gge1xcclxcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2U3NGMzYztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS5jb21wbGV0ZWQge1xcclxcbiAgICBvcGFjaXR5OiAwLjc7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0uY29tcGxldGVkIC50b2RvLXRpdGxlIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNoZWNrYm94IHtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250ZW50IHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbiAgICBjb2xvcjogIzJjM2U1MDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZHVlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGNvbG9yOiAjN2Y4YzhkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1hY3Rpb25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5lZGl0LXRvZG8tYnRuLCAuZGVsZXRlLXRvZG8tYnRuIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZWRpdC10b2RvLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmVkaXQtdG9kby1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRvZG8tYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2U3NGMzYztcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2MwMzkyYjtcXHJcXG59XFxyXFxuXFxyXFxuLyogTW9kYWxzICovXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogIzJjM2U1MDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlY2YwZjE7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEZvcm1zICovXFxyXFxuLmZvcm0tZ3JvdXAge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGxhYmVsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgY29sb3I6ICMyYzNlNTA7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0LFxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhLFxcclxcbi5mb3JtLWdyb3VwIHNlbGVjdCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWNmMGYxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLFxcclxcbi5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzLFxcclxcbi5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogIzM0OThkYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYWN0aW9ucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYWN0aW9ucyBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1hY3Rpb25zIGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMyN2FlNjA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYWN0aW9ucyBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjE5YTUyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1hY3Rpb25zIGJ1dHRvblt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM5NWE1YTY7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYWN0aW9ucyBidXR0b25bdHlwZT1cXFwiYnV0dG9uXFxcIl06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjN2Y4YzhkO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAuYXBwLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuc2lkZWJhciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5tYWluLWNvbnRlbnQge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KG5hbWUsaWQ9bnVsbCl7XHJcbiAgICB0aGlzLm5hbWU9bmFtZTtcclxuICAgIHRoaXMuaWQ9IGlkIHx8IERhdGUubm93KCkudG9TdHJpbmcoKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuICAgIHRoaXMudG9kb3M9W107XHJcbiAgICB0aGlzLmNyZWF0ZWRBdD1uZXcgRGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuYWRkVG9kbz1mdW5jdGlvbih0b2RvMSl7XHJcbiAgICAgICAgY29uc3QgdG9kbz1uZXcgVG9kbyh0b2RvMS50aXRsZSx0b2RvMS5kZXNjcmlwdGlvbix0b2RvMS5kdWVEYXRlLHRvZG8xLnByaW9yaXR5LHRoaXMuaWQpO1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICByZXR1cm4gdG9kbztcclxuICAgIH1cclxuICAgIHRoaXMuZGVsZXRlVG9kbz1mdW5jdGlvbih0b2RvSWQpe1xyXG4gICAgICAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSB0b2RvSWQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRUb2RvPWZ1bmN0aW9uKHRvZG9JZCl7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0UHJvamVjdCgpe1xyXG4gICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnLCAnZGVmYXVsdCcpO1xyXG4gICAgIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8oe1xyXG4gICAgICAgICB0aXRsZTogJ1dlbGNvbWUgdG8geW91ciB0b2RvIGFwcCEnLFxyXG4gICAgICAgICBkZXNjcmlwdGlvbjogJ0NsaWNrIGhlcmUgdG8gZWRpdCBtZScsXHJcbiAgICAgICAgIHByaW9yaXR5OiAnbWVkaXVtJ1xyXG4gICAgIH0pO1xyXG4gICAgIHJldHVybiBkZWZhdWx0UHJvamVjdDtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBUb2RvKHRpdGxlLGRlc2NyaXB0aW9uPScnLGR1ZWRhdGU9JycscHJpb3JpdHk9J21lZGl1bScscHJvamVjdElkPSdkZWZhdWx0Jyl7XHJcbiAgICB0aGlzLmlkPURhdGUubm93KCkudG9TdHJpbmcoKSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KTtcclxuICAgIHRoaXMudGl0bGU9dGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uPWRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVkYXRlPWR1ZWRhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5PXByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQ9ZmFsc2U7XHJcbiAgICB0aGlzLnByb2plY3RJZD1wcm9qZWN0SWQ7XHJcbiAgICB0aGlzLmNyZWF0ZWRBdD1uZXcgRGF0ZSgpO1xyXG5cclxuICAgIHRoaXMudG9nZ2xlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcclxuICAgIH07XHJcbiAgICB0aGlzLnVwZGF0ZURldGFpbHMgPSBmdW5jdGlvbih1cGRhdGVzKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCB1cGRhdGVzKTtcclxuICAgIH07XHJcbn0iLCJleHBvcnQgY29uc3QgZG9tTWFuYWdlcj17XHJcbiAgICBpbml0KHByb2plY3RzLCBjdXJyZW50UHJvamVjdElkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0c1NpZGViYXIocHJvamVjdHMsIGN1cnJlbnRQcm9qZWN0SWQpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyVG9kb3MoY3VycmVudFByb2plY3RJZCk7XHJcbiAgICB9LFxyXG4gICAgIHJlbmRlclByb2plY3RzU2lkZWJhcihwcm9qZWN0cywgY3VycmVudFByb2plY3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IHByb2plY3RzLm1hcChwcm9qZWN0ID0+IGBcclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwicHJvamVjdC1pdGVtICR7cHJvamVjdC5pZCA9PT0gY3VycmVudFByb2plY3RJZCA/ICdhY3RpdmUnIDogJyd9XCIgXHJcbiAgICAgICAgICAgICAgICBkYXRhLXByb2plY3QtaWQ9XCIke3Byb2plY3QuaWR9XCI+XHJcbiAgICAgICAgICAgICAgICAke3Byb2plY3QubmFtZX1cclxuICAgICAgICAgICAgICAgICR7cHJvamVjdC5pZCAhPT0gJ2RlZmF1bHQnID8gJzxidXR0b24gY2xhc3M9XCJkZWxldGUtcHJvamVjdC1idG5cIj7DlzwvYnV0dG9uPicgOiAnJ31cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICBgKS5qb2luKCcnKTtcclxuICAgIH0sXHJcbiAgICByZW5kZXJUb2Rvcyhwcm9qZWN0KSB7XHJcbiAgICAgICAgY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb3MtY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnQtcHJvamVjdC10aXRsZScpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAocHJvamVjdC50b2Rvcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdG9kb3NDb250YWluZXIuaW5uZXJIVE1MID0gJzxwIGNsYXNzPVwiZW1wdHktc3RhdGVcIj5ObyB0b2RvcyB5ZXQuIEFkZCBvbmUgYWJvdmUhPC9wPic7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvZG9zQ29udGFpbmVyLmlubmVySFRNTCA9IHByb2plY3QudG9kb3MubWFwKHRvZG8gPT4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1pdGVtICR7dG9kby5jb21wbGV0ZWQgPyAnY29tcGxldGVkJyA6ICcnfSBwcmlvcml0eS0ke3RvZG8ucHJpb3JpdHl9XCIgXHJcbiAgICAgICAgICAgICAgICAgZGF0YS10b2RvLWlkPVwiJHt0b2RvLmlkfVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICR7dG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJ30gY2xhc3M9XCJ0b2RvLWNoZWNrYm94XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidG9kby10aXRsZVwiPiR7dG9kby50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICR7dG9kby5kdWVEYXRlID8gYDxzcGFuIGNsYXNzPVwidG9kby1kdWVcIj5EdWU6ICR7dG9kby5kdWVEYXRlfTwvc3Bhbj5gIDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC10b2RvLWJ0blwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXRvZG8tYnRuXCI+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCkuam9pbignJyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1RvZG9Nb2RhbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgfSxcclxuICAgICBoaWRlVG9kb01vZGFsKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLW1vZGFsJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dQcm9qZWN0TW9kYWwoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIH0sXHJcblxyXG4gICAgaGlkZVByb2plY3RNb2RhbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1tb2RhbCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZURlZmF1bHRQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5leHBvcnQgY29uc3QgIHByb2plY3RNYW5hZ2VyPXtcclxuICAgIHByb2plY3RzOltdLFxyXG4gICAgY3VycmVudFByb2plY3RJZDogJ2RlZmF1bHQnLFxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qgc2F2ZWREYXRhID0gc3RvcmFnZS5sb2FkRGF0YSgpO1xyXG4gICAgICAgIGlmIChzYXZlZERhdGEgJiYgc2F2ZWREYXRhLnByb2plY3RzKSB7XHJcbiAgICAgICAgICAgIC8vIExvYWQgZXhpc3RpbmcgZGF0YVxyXG4gICAgICAgICAgICB0aGlzLnByb2plY3RzID0gc2F2ZWREYXRhLnByb2plY3RzO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SWQgPSBzYXZlZERhdGEuY3VycmVudFByb2plY3RJZCB8fCAnZGVmYXVsdCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlyc3QgdGltZSB1c2VyIC0gY3JlYXRlIGRlZmF1bHQgcHJvamVjdFxyXG4gICAgICAgICAgICB0aGlzLnNldHVwRGVmYXVsdFByb2plY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzZXR1cERlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gY3JlYXRlRGVmYXVsdFByb2plY3QoKTsgLy8gVGhpcyBjYWxscyB0aGUgZmFjdG9yeSBmcm9tIHByb2plY3QuanNcclxuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFByb2plY3RJZCA9IGRlZmF1bHRQcm9qZWN0LmlkO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAgYWRkUHJvamVjdChuYW1lKSB7IC8vIEZpeGVkIHBhcmFtZXRlciBuYW1lXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpOyAvLyBGaXhlZCB2YXJpYWJsZSBuYW1lXHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0O1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHsgLy8gRml4ZWQgcGFyYW1ldGVyIG5hbWVcclxuICAgICAgICBpZiAocHJvamVjdElkID09PSAnZGVmYXVsdCcpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmlkICE9PSBwcm9qZWN0SWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQcm9qZWN0SWQgPT09IHByb2plY3RJZCkgeyAvLyBGaXhlZCB2YXJpYWJsZSBuYW1lXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFByb2plY3RJZCA9ICdkZWZhdWx0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgc3RvcmFnZS5zYXZlRGF0YSh0aGlzLmdldERhdGEoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgIHNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RJZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdElkKTtcclxuICAgICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQcm9qZWN0SWQgPSBwcm9qZWN0SWQ7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgZ2V0Q3VycmVudFByb2plY3QoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0KHRoaXMuY3VycmVudFByb2plY3RJZCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0SWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICAgIH0sXHJcbiAgICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICAgIH0sXHJcbiAgICBnZXREYXRhKCl7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICBwcm9qZWN0czp0aGlzLnByb2plY3RzLFxyXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdElkOnRoaXMuY3VycmVudFByb2plY3RJZFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0LmpzJzsgIC8vIEFERCBUSElTXHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL1RvZG8uanMnOyAgICAgICAgXHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IHtcclxuICAgIC8vIEtleSBmb3IgbG9jYWxTdG9yYWdlXHJcbiAgICBTVE9SQUdFX0tFWTogJ3RvZG9BcHBEYXRhJyxcclxuICAgIFxyXG4gICAgLy8gU2F2ZSBhbGwgYXBwIGRhdGEgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICBzYXZlRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YVRvU3RvcmUgPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0czogZGF0YS5wcm9qZWN0cyxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0SWQ6IGRhdGEuY3VycmVudFByb2plY3RJZCxcclxuICAgICAgICAgICAgICAgIHNhdmVkQXQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLlNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShkYXRhVG9TdG9yZSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2F2ZSBkYXRhOicsIGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIExvYWQgYXBwIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLlNUT1JBR0VfS0VZKTtcclxuICAgICAgICAgICAgaWYgKCFzdG9yZWREYXRhKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZERhdGEgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xyXG4gICAgICAgICAgICBpZiAocGFyc2VkRGF0YS5wcm9qZWN0cykge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0YS5wcm9qZWN0cyA9IHRoaXMucmV2aXZlUHJvamVjdHMocGFyc2VkRGF0YS5wcm9qZWN0cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZERhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXZpdmVQcm9qZWN0cyhwcm9qZWN0c0RhdGEpIHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHNEYXRhLm1hcChwcm9qZWN0RGF0YSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgUHJvamVjdCBpbnN0YW5jZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdERhdGEubmFtZSwgcHJvamVjdERhdGEuaWQpO1xyXG4gICAgICAgICAgICBwcm9qZWN0LmNyZWF0ZWRBdCA9IG5ldyBEYXRlKHByb2plY3REYXRhLmNyZWF0ZWRBdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBDb252ZXJ0IHRvZG9zIHRvIFRvZG8gaW5zdGFuY2VzXHJcbiAgICAgICAgICAgIHByb2plY3QudG9kb3MgPSBwcm9qZWN0RGF0YS50b2Rvcy5tYXAodG9kb0RhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EYXRhLmR1ZURhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGEucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb0RhdGEucHJvamVjdElkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBNYW51YWxseSBzZXQgcHJvcGVydGllcyB0aGF0IGRvbid0IGdvIHRocm91Z2ggY29uc3RydWN0b3JcclxuICAgICAgICAgICAgICAgIHRvZG8uaWQgPSB0b2RvRGF0YS5pZDtcclxuICAgICAgICAgICAgICAgIHRvZG8uY29tcGxldGVkID0gdG9kb0RhdGEuY29tcGxldGVkO1xyXG4gICAgICAgICAgICAgICAgdG9kby5jcmVhdGVkQXQgPSBuZXcgRGF0ZSh0b2RvRGF0YS5jcmVhdGVkQXQpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9kbztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIC8vIENsZWFyIGFsbCBzYXZlZCBkYXRhIChmb3IgdGVzdGluZy9yZXNldClcclxuICAgIGNsZWFyRGF0YSgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLlNUT1JBR0VfS0VZKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNsZWFyIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBzYXZlZCBkYXRhXHJcbiAgICBoYXNEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLlNUT1JBR0VfS0VZKSAhPT0gbnVsbDtcclxuICAgIH1cclxufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXHJcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSBcIi4vcHJvamVjdE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuZXhwb3J0IGNvbnN0IHRvZG9NYW5hZ2VyPXtcclxuICAgIGFkZFRvZG8oZGF0YSl7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFA9cHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBpZighY3VycmVudFApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHRvZG89Y3VycmVudFAuYWRkVG9kbyhkYXRhKTtcclxuICAgICAgICBzdG9yYWdlLnNhdmVEYXRhKHByb2plY3RNYW5hZ2VyLmdldERhdGEoKSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICB9LFxyXG4gICAgZGVsZXRlVG9kbyh0b2RvSWQpe1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQPXByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgaWYoIWN1cnJlbnRQKSByZXR1cm47XHJcbiAgICAgICAgY3VycmVudFAuZGVsZXRlVG9kbyh0b2RvSWQpO1xyXG4gICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEoKTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVUb2RvKHRvZG9JZCl7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFA9cHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBpZighY3VycmVudFApIHJldHVybjtcclxuICAgICAgICBjb25zdCB0b2RvPWN1cnJlbnRQLmdldFRvZG8odG9kb0lkKTtcclxuICAgICAgICBpZih0b2RvKXsgXHJcbiAgICAgICAgICAgdG9kby50b2dnbGVDb21wbGV0ZSgpO1xyXG4gICAgICAgICAgIHN0b3JhZ2Uuc2F2ZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVG9kbyh0b2RvSWQsdXBkYXRlcyl7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFA9cHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBpZighY3VycmVudFApIHJldHVybjtcclxuICAgICAgICBjb25zdCB0b2RvID0gY3VycmVudFAuZ2V0VG9kbyh0b2RvSWQpO1xyXG4gICAgICAgIGlmICh0b2RvKSB7XHJcbiAgICAgICAgICAgIHRvZG8udXBkYXRlRGV0YWlscyh1cGRhdGVzKTtcclxuICAgICAgICAgICAgc3RvcmFnZS5zYXZlRGF0YShwcm9qZWN0TWFuYWdlci5nZXREYXRhKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRDdXJyZW50VG9kb3MoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdCA/IGN1cnJlbnRQcm9qZWN0LnRvZG9zIDogW107XHJcbiAgICB9LFxyXG4gICAgIGdldFRvZG8odG9kb0lkKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5nZXRDdXJyZW50UHJvamVjdCgpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50UHJvamVjdCA/IGN1cnJlbnRQcm9qZWN0LmdldFRvZG8odG9kb0lkKSA6IG51bGw7XHJcbiAgICB9XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHByb2plY3RNYW5hZ2VyIH0gZnJvbSAnLi9wcm9qZWN0TWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IHRvZG9NYW5hZ2VyIH0gZnJvbSAnLi90b0RvTWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IGRvbU1hbmFnZXIgfSBmcm9tICcuL2RvbU1hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9zdG9yYWdlLmpzJztcclxuICBcclxuXHJcbmNvbnNvbGUubG9nKCdpbmRleC5qcyBsb2FkZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG5jbGFzcyBUb2RvQXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwcm9qZWN0IG1hbmFnZXIgKGxvYWRzIGZyb20gc3RvcmFnZSlcclxuICAgICAgICBwcm9qZWN0TWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2V0IGluaXRpYWwgZGF0YVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdE1hbmFnZXIuZ2V0QWxsUHJvamVjdHMoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmdldEN1cnJlbnRQcm9qZWN0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBET01cclxuICAgICAgICBkb21NYW5hZ2VyLmluaXQocHJvamVjdHMsIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0SWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnNcclxuICAgICAgICB0aGlzLnNldHVwRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnVG9kbyBhcHAgaW5pdGlhbGl6ZWQhJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICAvLyBBZGQgcHJvamVjdCBidXR0b25cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1Byb2plY3RNb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBBZGQgdG9kbyBidXR0b25cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRvZG8tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuc2hvd1RvZG9Nb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IGZvcm0gc3VibWlzc2lvblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkUHJvamVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBUb2RvIGZvcm0gc3VibWlzc2lvblxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWRkVG9kbygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBDYW5jZWwgYnV0dG9uc1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWwtcHJvamVjdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb21NYW5hZ2VyLmhpZGVQcm9qZWN0TW9kYWwoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC10b2RvJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZVRvZG9Nb2RhbCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQcm9qZWN0IGxpc3QgY2xpY2tzIChldmVudCBkZWxlZ2F0aW9uKVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb2plY3RMaXN0Q2xpY2soZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFRvZG9zIGNvbnRhaW5lciBjbGlja3MgKGV2ZW50IGRlbGVnYXRpb24pXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG9zLWNvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVUb2Rvc0NvbnRhaW5lckNsaWNrKGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFkZFByb2plY3QoKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QobmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFVJKCk7XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZVByb2plY3RNb2RhbCgpO1xyXG4gICAgICAgICAgICBuYW1lSW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkVG9kbygpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLXRpdGxlJykudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tZGVzY3JpcHRpb24nKS52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWR1ZS1kYXRlJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1wcmlvcml0eScpLnZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICB0b2RvTWFuYWdlci5hZGRUb2RvKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFVJKCk7XHJcbiAgICAgICAgICAgIGRvbU1hbmFnZXIuaGlkZVRvZG9Nb2RhbCgpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1mb3JtJykucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvamVjdExpc3RDbGljayhlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJyk7XHJcbiAgICAgICAgaWYgKCFwcm9qZWN0SXRlbSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0SXRlbS5kYXRhc2V0LnByb2plY3RJZDtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtcHJvamVjdC1idG4nKSkge1xyXG4gICAgICAgICAgICAvLyBEZWxldGUgcHJvamVjdFxyXG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gU3dpdGNoIHRvIHByb2plY3RcclxuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2V0Q3VycmVudFByb2plY3QocHJvamVjdElkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVUb2Rvc0NvbnRhaW5lckNsaWNrKGUpIHtcclxuICAgICAgICBjb25zdCB0b2RvSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy50b2RvLWl0ZW0nKTtcclxuICAgICAgICBpZiAoIXRvZG9JdGVtKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9JZCA9IHRvZG9JdGVtLmRhdGFzZXQudG9kb0lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tY2hlY2tib3gnKSkge1xyXG4gICAgICAgICAgICAvLyBUb2dnbGUgY29tcGxldGlvblxyXG4gICAgICAgICAgICB0b2RvTWFuYWdlci50b2dnbGVUb2RvKHRvZG9JZCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFVJKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10b2RvLWJ0bicpKSB7XHJcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0b2RvXHJcbiAgICAgICAgICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8odG9kb0lkKTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVUkoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC10b2RvLWJ0bicpKSB7XHJcbiAgICAgICAgICAgIC8vIEVkaXQgdG9kbyAoeW91IGNhbiBpbXBsZW1lbnQgdGhpcyBsYXRlcilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgdG9kbzonLCB0b2RvSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVUkoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TWFuYWdlci5nZXRBbGxQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE1hbmFnZXIuZ2V0Q3VycmVudFByb2plY3QoKTtcclxuICAgICAgICBcclxuICAgICAgICBkb21NYW5hZ2VyLnJlbmRlclByb2plY3RzU2lkZWJhcihwcm9qZWN0cywgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3RJZCk7XHJcbiAgICAgICAgZG9tTWFuYWdlci5yZW5kZXJUb2RvcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFN0YXJ0IHRoZSBhcHAgd2hlbiBET00gaXMgcmVhZHlcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIG5ldyBUb2RvQXBwKCk7XHJcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==