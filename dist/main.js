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
___CSS_LOADER_EXPORT___.push([module.id, `
header {
    background-color: #8449BA;
    border-bottom: 1px solid #fff;
}

.nav-logo-container {
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: space-between;
}

nav {
    flex-grow: 1;
}

.hamburger-container {
    display: none;
}

#current-section {
    background-color: red;
}

.logo-container {
    flex-basis: 130px;
    flex-shrink: 0;
    color: white;
    font-weight: bolder;
    font-size: 1.2rem;
}


.menu-list {
    list-style-type: none;
    display: flex;
    gap: 10px;
    justify-content: end;
}

.menu-list li {
    color: #fff;
    font-weight: 600;
    padding: 10px;
    flex-basis: 100px;
    text-align: center;    
}

.mobile-menu-container {
    background: #8449BA;
    display: block;
}

.mobile-menu-container li {
    border: 1px solid white;
}

.mobile-menu-container li:last-of-type {
    border-bottom: 2px solid white
}

.menu-list li:hover {
    background-color: #351E5F;
}

main {
    flex-grow: 1;
    background:#fffff9
}

main > .search-section {
    display: flex;
    padding: 20px 30px;
    justify-content: center;
    gap: 20px;
    align-items: center;
}


.search {
    font-size: 0.8rem;
    padding: 5px;
    font-weight: 600;
    height: 35px;
    width: clamp(150px, 25vw, 250px);
}

.search:focus {
    border: none;
}

.add-container {
    display: flex;
    gap: 7px;
    background-color: rgb(53, 30, 95);
    font-size: 0.9rem;
    color: #fff;
    padding: 5px 8px;
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    width: clamp(200px, 25vw, 250px);
    justify-content: center;
}

.add-container > span {
    font-weight: bold;
    font-size: 1.3rem;
    color: blueviolet;
}

.form-section, .edit-form-section, .task-form-section, .task-modal-section, .edit-task-form-section {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgb(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

.form-container,.edit-form-container, .task-form-container, .task-modal-container, .edit-task-form-container {
    width: max(30%, 300px);
    background-color: #8449BA;
    padding: 30px;
}

form input, select {
    font-size: 1rem;
    border-radius: 3px;
    width: 100%;
    padding: 5px;
    margin-bottom: 8px;
}

form > div {
    text-align: center;
    font-size: 1.3rem;
}

form {
    color: #fff;
    font-weight: 600;
}

footer {
    text-align: center;
    padding: 20px;
    background-color: #E6E6E6;
}

label{
    display: block;
    margin-top: 5px;
    margin-bottom: 2px;
}

.button-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-top: 5px;
}

.button-container  > * {
    width: 70px;
    height: 30px;
    padding: 5px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #000;
}

.close-modal, .close-task-form-modal, .close-edit-project-modal, .close-task-modal, .close-edit-task-form-modal {
    cursor: pointer;
}

.form-title {
    margin-bottom: 15px;
}

.close-form-modal-container {
    display: flex;
    justify-content: end;
}

.project-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
    padding: 20px 30px;
}

.project-container {
    display: flex;
    box-shadow: 1px 1px 5px black;
    background-color: #fff;
    border-radius: 6px;
    padding: 35px 10px;
    gap: 20px;
    align-items: center;
}

.project-functions {
    flex-basis: 30px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-right: 2px solid rgb(0,0,0,0.5);
}

.project-details {
    display: flex;
    flex-direction: column;
    gap: 25px;
    flex-grow: 1;
    text-align: center;
}

.project-details > .title {
    font-size: 1.8rem;
    font-weight: bold;
}

.project-details > .id {
    font-size: 1.5rem;
    color: red;
}

.project-details > div:last-of-type {
    font-size: 1.5rem;
    font-weight: bold;
}


.task-title {
    text-align: center;
    font-weight: bolder;
    font-size: 1.5rem;
    margin: 20px 0;
}

.task-modal-container {
    background-color: wheat;
}

.tasks {
    text-align: center;
    height: 350px;
    overflow: auto;
}

.tasks img {
    height: 19px;
    width: 19px;
}

.task-container {
    display: grid;
    grid-template-columns: 1fr 1fr 30px 30px;
    column-gap: 10px;
    margin-top: 10px;
    text-align: start;
    align-items: center;
}

@media only screen and (max-width: 500px) {
    nav {
        display: none;
    }

    .hamburger-container {
        display: block;
    }

    .nav-logo-container {
        justify-content: space-between;
    }

}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["\nheader {\n    background-color: #8449BA;\n    border-bottom: 1px solid #fff;\n}\n\n.nav-logo-container {\n    padding: 20px 30px;\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    justify-content: space-between;\n}\n\nnav {\n    flex-grow: 1;\n}\n\n.hamburger-container {\n    display: none;\n}\n\n#current-section {\n    background-color: red;\n}\n\n.logo-container {\n    flex-basis: 130px;\n    flex-shrink: 0;\n    color: white;\n    font-weight: bolder;\n    font-size: 1.2rem;\n}\n\n\n.menu-list {\n    list-style-type: none;\n    display: flex;\n    gap: 10px;\n    justify-content: end;\n}\n\n.menu-list li {\n    color: #fff;\n    font-weight: 600;\n    padding: 10px;\n    flex-basis: 100px;\n    text-align: center;    \n}\n\n.mobile-menu-container {\n    background: #8449BA;\n    display: block;\n}\n\n.mobile-menu-container li {\n    border: 1px solid white;\n}\n\n.mobile-menu-container li:last-of-type {\n    border-bottom: 2px solid white\n}\n\n.menu-list li:hover {\n    background-color: #351E5F;\n}\n\nmain {\n    flex-grow: 1;\n    background:#fffff9\n}\n\nmain > .search-section {\n    display: flex;\n    padding: 20px 30px;\n    justify-content: center;\n    gap: 20px;\n    align-items: center;\n}\n\n\n.search {\n    font-size: 0.8rem;\n    padding: 5px;\n    font-weight: 600;\n    height: 35px;\n    width: clamp(150px, 25vw, 250px);\n}\n\n.search:focus {\n    border: none;\n}\n\n.add-container {\n    display: flex;\n    gap: 7px;\n    background-color: rgb(53, 30, 95);\n    font-size: 0.9rem;\n    color: #fff;\n    padding: 5px 8px;\n    font-weight: 600;\n    align-items: center;\n    cursor: pointer;\n    width: clamp(200px, 25vw, 250px);\n    justify-content: center;\n}\n\n.add-container > span {\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: blueviolet;\n}\n\n.form-section, .edit-form-section, .task-form-section, .task-modal-section, .edit-task-form-section {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0,0,0,0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: none;\n}\n\n.form-container,.edit-form-container, .task-form-container, .task-modal-container, .edit-task-form-container {\n    width: max(30%, 300px);\n    background-color: #8449BA;\n    padding: 30px;\n}\n\nform input, select {\n    font-size: 1rem;\n    border-radius: 3px;\n    width: 100%;\n    padding: 5px;\n    margin-bottom: 8px;\n}\n\nform > div {\n    text-align: center;\n    font-size: 1.3rem;\n}\n\nform {\n    color: #fff;\n    font-weight: 600;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    background-color: #E6E6E6;\n}\n\nlabel{\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 2px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-top: 5px;\n}\n\n.button-container  > * {\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    border-radius: 4px;\n    box-shadow: 0px 0px 10px #000;\n}\n\n.close-modal, .close-task-form-modal, .close-edit-project-modal, .close-task-modal, .close-edit-task-form-modal {\n    cursor: pointer;\n}\n\n.form-title {\n    margin-bottom: 15px;\n}\n\n.close-form-modal-container {\n    display: flex;\n    justify-content: end;\n}\n\n.project-section {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 30px;\n    padding: 20px 30px;\n}\n\n.project-container {\n    display: flex;\n    box-shadow: 1px 1px 5px black;\n    background-color: #fff;\n    border-radius: 6px;\n    padding: 35px 10px;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-functions {\n    flex-basis: 30px;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-right: 2px solid rgb(0,0,0,0.5);\n}\n\n.project-details {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    flex-grow: 1;\n    text-align: center;\n}\n\n.project-details > .title {\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\n.project-details > .id {\n    font-size: 1.5rem;\n    color: red;\n}\n\n.project-details > div:last-of-type {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n\n.task-title {\n    text-align: center;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    margin: 20px 0;\n}\n\n.task-modal-container {\n    background-color: wheat;\n}\n\n.tasks {\n    text-align: center;\n    height: 350px;\n    overflow: auto;\n}\n\n.tasks img {\n    height: 19px;\n    width: 19px;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 30px 30px;\n    column-gap: 10px;\n    margin-top: 10px;\n    text-align: start;\n    align-items: center;\n}\n\n@media only screen and (max-width: 500px) {\n    nav {\n        display: none;\n    }\n\n    .hamburger-container {\n        display: block;\n    }\n\n    .nav-logo-container {\n        justify-content: space-between;\n    }\n\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/createTaskForm.js":
/*!******************************************!*\
  !*** ./src/components/createTaskForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function createTaskForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("task-form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("task-form-container");

    const form = document.createElement("form");
    form.classList.add("create-task-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-task-form-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create Task";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Add Task Name*";
    taskNameLabel.setAttribute("for", "taskName");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "ID");
    taskNameInput.setAttribute("type", "text");

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Select Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput);


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.setAttribute("type", "button");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";

    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(resetButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskForm);

/***/ }),

/***/ "./src/components/editProjectForm.js":
/*!*******************************************!*\
  !*** ./src/components/editProjectForm.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function editProjectForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("edit-form-section");
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-form-container");

    const form = document.createElement("form");
    form.classList.add("edit-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-edit-project-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Edit To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "editID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "edit-ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "editTitle");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "edit-Title");
    titleInput.setAttribute("type", "text");

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "editDescription");
    descriptionInput.setAttribute("id", "edit-Description");
    descriptionInput.setAttribute("type", "text");

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    
    /*
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput); */


    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Category";
    selectLabel.setAttribute("for", "editCategory");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "edit-Category");
    
    const workOption = document.createElement("option");
    workOption.value = "Work";
    workOption.textContent = "Work";

    const gymOption = document.createElement("option");
    gymOption.value = "Gym";
    gymOption.textContent = "Gym";

    const schoolOption = document.createElement("option");
    schoolOption.value = "School";
    schoolOption.textContent = "School";

    const choreOption = document.createElement("option");
    choreOption.value = "Chores";
    choreOption.textContent = "Chores";

    selectInput.appendChild(workOption);
    selectInput.appendChild(gymOption);
    selectInput.appendChild(schoolOption);
    selectInput.appendChild(choreOption);


    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("type", "button");


    buttonContainer.appendChild(editButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editProjectForm);

/***/ }),

/***/ "./src/components/editTaskForm.js":
/*!****************************************!*\
  !*** ./src/components/editTaskForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function EditTaskForm() {

    const formSection = document.createElement("section");
    formSection.classList.add("edit-task-form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("edit-task-form-container");

    const form = document.createElement("form");
    form.classList.add("edit-task-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-edit-task-form-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Edit Task";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const taskNameLabel = document.createElement("label");
    taskNameLabel.textContent = "Add Task Name*";
    taskNameLabel.setAttribute("for", "taskName");
    const taskNameInput = document.createElement("input");
    taskNameInput.setAttribute("id", "ID");
    taskNameInput.setAttribute("type", "text");

    form.appendChild(taskNameLabel);
    form.appendChild(taskNameInput);


    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Select Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput);


    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("type", "button");


    buttonContainer.appendChild(editButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditTaskForm);

/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Footer () {
    const footer = document.createElement("footer");
    footer.textContent = "TO-DO-LIST BY VWEDE ESIN"
    return footer;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Form() {

    const formSection = document.createElement("section");
    formSection.classList.add("form-section")
    
    const formContainer = document.createElement("div");
    formContainer.classList.add("form-container");

    const form = document.createElement("form");
    form.classList.add("create-project-form");

    const closeFormModalContainer = document.createElement("div");
    const closeFormModal = document.createElement("div");
    closeFormModal.innerHTML = "&times;"
    closeFormModal.classList.add("close-modal");
    closeFormModalContainer.appendChild(closeFormModal);
    closeFormModalContainer.classList.add("close-form-modal-container");

    form.appendChild(closeFormModalContainer);

    
    const formTitle = document.createElement("div");
    formTitle.textContent = "Create To-Do";
    formTitle.classList.add("form-title");

    form.appendChild(formTitle);

    const idLabel = document.createElement("label");
    idLabel.textContent = "Add Project ID*";
    idLabel.setAttribute("for", "ID");
    const idInput = document.createElement("input");
    idInput.setAttribute("id", "ID");
    idInput.setAttribute("type", "number");
    idInput.setAttribute("min", 0);
    idInput.setAttribute("placeholder", "25");

    form.appendChild(idLabel);
    form.appendChild(idInput);

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Add Project Title*";
    titleLabel.setAttribute("for", "Title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id", "Title");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("placeholder", "Create a to-do list")

    form.appendChild(titleLabel);
    form.appendChild(titleInput)


    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("input");
    descriptionLabel.textContent = "Add Project Description";
    descriptionLabel.setAttribute("for", "Description");
    descriptionInput.setAttribute("id", "Description");
    descriptionInput.setAttribute("type", "text");

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    
    /*
    const dateLabel = document.createElement("label");
    dateLabel.textContent = "Pick Due Date*";
    dateLabel.setAttribute("for", "Date");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "Date");
    dateInput.setAttribute("type", "date");

    form.appendChild(dateLabel);
    form.appendChild(dateInput); */


    const selectLabel = document.createElement("label");
    selectLabel.textContent = "Select Category";
    selectLabel.setAttribute("for", "Category");
    const selectInput = document.createElement("select");
    selectInput.setAttribute("id", "Category");
    
    const workOption = document.createElement("option");
    workOption.value = "Work";
    workOption.textContent = "Work";

    const gymOption = document.createElement("option");
    gymOption.value = "Gym";
    gymOption.textContent = "Gym";

    const schoolOption = document.createElement("option");
    schoolOption.value = "School";
    schoolOption.textContent = "School";

    const choreOption = document.createElement("option");
    choreOption.value = "Chores";
    choreOption.textContent = "Chores";

    selectInput.appendChild(workOption);
    selectInput.appendChild(gymOption);
    selectInput.appendChild(schoolOption);
    selectInput.appendChild(choreOption);

    form.appendChild(selectLabel);
    form.appendChild(selectInput);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const createButton = document.createElement("button");
    createButton.textContent = "Create";
    createButton.setAttribute("type", "button");

    const resetButton = document.createElement("button");
    resetButton.setAttribute("type", "reset");
    resetButton.textContent = "Reset";

    buttonContainer.appendChild(createButton);
    buttonContainer.appendChild(resetButton);

    form.appendChild(buttonContainer);
    formContainer.appendChild(form);
    formSection.appendChild(formContainer);


    return formSection;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/menu.svg */ "./src/images/menu.svg");



function Header() {
    //header container
    const header = document.createElement("header");

    const navLogoContainer = document.createElement("div");
    navLogoContainer.classList.add("nav-logo-container");

    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    logoContainer.textContent = "To-Do List";
    /*const logoImage = new Image();
    logoImage.src = "../images/";
    logoImage.classList.add("logo-image");
    logoContainer.appendChild(logoImage); */

    navLogoContainer.appendChild(logoContainer);

    const nav = document.createElement("nav");
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES"

    menuList.appendChild(all);
    menuList.appendChild(work);
    menuList.appendChild(gym);
    menuList.appendChild(school);
    menuList.appendChild(chores);

    nav.appendChild(menuList);

    const mobiLeMenuHamburgerContainer = document.createElement("div");
    mobiLeMenuHamburgerContainer.classList.add("hamburger-container");
    const mobileMenuHamburger = new Image();
    mobileMenuHamburger.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
    mobileMenuHamburger.classList.add("mobile-menu-hamburger")

    mobiLeMenuHamburgerContainer.appendChild(mobileMenuHamburger);

    navLogoContainer.appendChild(nav);

    navLogoContainer.appendChild(mobiLeMenuHamburgerContainer);
    header.appendChild(navLogoContainer);


    return header;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/components/main.js":
/*!********************************!*\
  !*** ./src/components/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function Main() {
    const main = document.createElement("main");

    const searchSection = document.createElement("div");
    searchSection.classList.add("search-section");

    //const searchContainer = document.createElement("div");
    const addNewProjectContainer = document.createElement("div");

   // const search = document.createElement("input");
    //search.setAttribute("type", "search");
    //search.setAttribute("placeholder", "Search by title");
   // search.classList.add("search");
   // searchContainer.appendChild(search);

    const addContainer = document.createElement("div");
    addContainer.innerHTML = "<span>&plus;</span>Add New Project";
    addNewProjectContainer.appendChild(addContainer);
    addNewProjectContainer.classList.add("new-project-container")
    addContainer.classList.add("add-container");

   // searchSection.appendChild(searchContainer);
    searchSection.appendChild(addNewProjectContainer);

    main.appendChild(searchSection);

    const projectSection = document.createElement("section");
    projectSection.classList.add("project-section");

    main.appendChild(projectSection);
   
    return main;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/components/mobileMenuContainer.js":
/*!***********************************************!*\
  !*** ./src/components/mobileMenuContainer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function MobileMenu() {

    const mobileMenuSection = document.createElement("section");
    mobileMenuSection.classList.add("mobile-menu-section");


    const mobileMenuContainer = document.createElement("ul");
    mobileMenuContainer.classList.add("menu-list");
    mobileMenuContainer.classList.add("mobile-menu-container");

    const all = document.createElement("li");
    all.textContent = "ALL";

    const work = document.createElement("li");
    work.textContent = "WORK";

    const gym = document.createElement("li");
    gym.textContent = "GYM";

    const school = document.createElement("li");
    school.textContent = "SCHOOL";

    const chores = document.createElement("li");
    chores.textContent = "CHORES";

    mobileMenuContainer.appendChild(all);
    mobileMenuContainer.appendChild(work);
    mobileMenuContainer.appendChild(gym);
    mobileMenuContainer.appendChild(school);
    mobileMenuContainer.appendChild(chores);

    mobileMenuSection.appendChild(mobileMenuContainer);

    return mobileMenuSection
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

/***/ }),

/***/ "./src/components/taskModal.js":
/*!*************************************!*\
  !*** ./src/components/taskModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.css */ "./src/style.css");


function createTaskModal() {

    const taskModalSection = document.createElement("section");
    taskModalSection.classList.add("task-modal-section")
    
    const taskModalContainer = document.createElement("div");
    taskModalContainer.classList.add("task-modal-container");

    const taskModalContent = document.createElement("div");
    taskModalContent.classList.add("task-modal-content");

    const closeTaskModalContainer = document.createElement("div");
    const closeTaskModal = document.createElement("div");
    closeTaskModal.innerHTML = "&times;"
    closeTaskModal.classList.add("close-task-modal");
    closeTaskModalContainer.appendChild(closeTaskModal);
    closeTaskModalContainer.classList.add("close-form-modal-container");

    taskModalContent.appendChild(closeTaskModalContainer);

    
    const taskTitle = document.createElement("div");
    taskTitle.textContent = "Tasks";
    taskTitle.classList.add("task-title");

    taskModalContent.appendChild(taskTitle);


    const tasks = document.createElement("div");
    tasks.classList.add("tasks");

    taskModalContent.appendChild(tasks);
    
    taskModalContainer.appendChild(taskModalContent);
    taskModalSection.appendChild(taskModalContainer);

    return taskModalSection
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTaskModal);

/***/ }),

/***/ "./src/domUpdate.js":
/*!**************************!*\
  !*** ./src/domUpdate.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _images_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_view_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/view.svg */ "./src/images/view.svg");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/edit.svg */ "./src/images/edit.svg");






const dom = (() => {

    const createProjectUI = (projectObject) => {
        
        const projectSection = document.querySelector(".project-section");

        const projectContainer = document.createElement("div");
        projectContainer.classList.add("project-container");

        const projectFunctions = document.createElement("div");
        projectFunctions.classList.add("project-functions");

        const projectEdit = document.createElement("div");
        const editImage = new Image()
        editImage.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
        editImage.setAttribute("id", "edit")
        projectEdit.appendChild(editImage);

        const projectView = document.createElement("div");
        const viewImage = new Image()
        viewImage.src = _images_view_svg__WEBPACK_IMPORTED_MODULE_3__;
        projectView.appendChild(viewImage);
        viewImage.setAttribute("id", "view")

        const projectAdd = document.createElement("div");
        const addImage = new Image();
        addImage.src = _images_add_svg__WEBPACK_IMPORTED_MODULE_1__;
        projectAdd.appendChild(addImage);
        addImage.setAttribute("id","add");

        const projectDelete = document.createElement("div");
        const deleteImage = new Image();
        deleteImage.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        projectDelete.appendChild(deleteImage);
        deleteImage.setAttribute("id", "delete")
        
        projectFunctions.appendChild(projectEdit);
        projectFunctions.appendChild(projectView);
        projectFunctions.appendChild(projectAdd);
        projectFunctions.appendChild(projectDelete);

        const projectDetails = document.createElement("div");
        projectDetails.classList.add("project-details");

        const projectId = document.createElement("div");
        const projectTitle = document.createElement("div");
        const projectDescription = document.createElement("div");
        const projectCategory = document.createElement("div");

        projectId.textContent = projectObject.id;
        projectTitle.textContent = projectObject.title;
        projectDescription.textContent = projectObject.description;
        projectCategory.textContent = projectObject.category;

        projectTitle.classList.add("title");
        projectId.classList.add("id");

        projectDetails.appendChild(projectId);
        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);
        projectDetails.appendChild(projectCategory);

        projectContainer.appendChild(projectFunctions);
        projectContainer.appendChild(projectDetails);
        projectContainer.setAttribute("data-value", projectId.textContent);

        projectSection.appendChild(projectContainer);
    }

    const deleteProjectUI = (projectId) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectSection = document.querySelector(".project-section");
        projectSection.removeChild(project);
    }

    const editProjectUI = (projectId, title, description, category) => {
        const project = document.querySelector(`div[data-value="${projectId}"]`);
        const projectDetailUI = project.lastElementChild;
        const projectDetailUIChildren = projectDetailUI.children;
        projectDetailUIChildren[1].textContent = title;
        projectDetailUIChildren[2].textContent = description;
        projectDetailUIChildren[3].textContent = category;        
    }

    const renderTask = (taskObject) => {
        const tasks = document.querySelector(".tasks");

        const taskContainer = document.createElement("div");
        taskContainer.classList.add("task-container");
        
        const taskTitle = document.createElement("div");
        taskTitle.textContent = taskObject.taskName;

        const taskDueDate = document.createElement("div");
        taskDueDate.textContent = taskObject.taskDueDate;

        const taskEdit = new Image();
        taskEdit.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;
        taskEdit.classList.add("edit-task");

        const taskDelete = new Image();
        taskDelete.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_2__;
        taskDelete.classList.add("delete-task");

        taskContainer.appendChild(taskTitle);
        taskContainer.appendChild(taskDueDate);
        taskContainer.appendChild(taskEdit);
        taskContainer.appendChild(taskDelete);
        taskContainer.setAttribute("data-value", `${taskObject.getUniqueId()}`)
        taskContainer.setAttribute("data-parent", `${taskObject.taskParent}`)

        tasks.appendChild(taskContainer);
    }

    const renderEmptyTasks = () => {
        const tasks = document.querySelector(".tasks");
        tasks.textContent = "Nothing to see here...";
    }

    const deleteTask = (taskUniqueId) => {
        const tasks = document.querySelector(".tasks");
        const taskToDelete = tasks.querySelector(`div[data-value = "${taskUniqueId}"]`);
        tasks.removeChild(taskToDelete);
    }

    const editTask = (oldUniqueId, newUniqueId, taskName, dueDate) => {
        const tasks = document.querySelector(".tasks");
        const taskToEdit = tasks.querySelector(`div[data-value = "${oldUniqueId}"]`);

        console.log(oldUniqueId);
        console.log(newUniqueId);

        taskToEdit.querySelector("div:first-of-type").textContent = taskName;
        taskToEdit.querySelector("div:last-of-type").textContent = dueDate;
        taskToEdit.setAttribute("data-value", `${newUniqueId}`);
    }

    return {createProjectUI, deleteProjectUI, editProjectUI, renderTask, renderEmptyTasks, deleteTask, editTask}
}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);

/***/ }),

/***/ "./src/manager.js":
/*!************************!*\
  !*** ./src/manager.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectStore */ "./src/projectStore.js");
/* harmony import */ var _projectObjectCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectObjectCreator */ "./src/projectObjectCreator.js");
/* harmony import */ var _domUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdate */ "./src/domUpdate.js");




const manager = (() => {

    let currentSection = "ALL";

    const handleNewProjectCreation = (id, title, description, category) => {
        const obj = (0,_projectObjectCreator__WEBPACK_IMPORTED_MODULE_1__["default"])(id, title, description, category);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].addNewProject(obj);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI(obj);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();

        // udpate DOM ADDITION
    }

    const handleProjectRemoval = (project, projectId) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].removeProject(project);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProjectUI(projectId);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // update DOM REMOVAL
    }

    const handleProjectEdit = (project, projectId, title, description, category) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].editProject(project, title, description, category);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].editProjectUI(projectId, title, description, category);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // udpdate DOM EDITING
    }

    /*const handleGetAllProjects = () => {
       const projects = projectStorage.getProjects();
       return projects;
       // dom stuff for display projects 
    } */

    const handleGetProjectsByCategories = (category) => {
        if (category == "all") {
            console.log(category)
            const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects()
            console.log(projects)
            if (projects.length > 0) {
                projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
            }
        }

        else {
            const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectByCategory(category);
            console.log(projects);
            if (projects.length > 0) {
                projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
        }
        // dom stuff for projets display by category
    }
}

    const handleAddTask = (projectToEdit, taskName, taskDueDate) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(projectToEdit, taskName, taskDueDate);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
        // dom stuff for project task
    }

    const getCurrentSection = () => currentSection;

    const setCurrentSection = (newCurrentSection) => {
        currentSection = newCurrentSection
    }

    const handleFindProject = (id) => _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].findProjectById(id);

    const handleFindTask = (project, taskId) => _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].findTaskById(project, taskId);

    const handleRemoveTask = (project, task) => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].removeTask(project, task);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(task.getUniqueId());
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage()
    }

    const handleGetTasks = (project) => {
        const tasks = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks(project);
        if (tasks && tasks.length > 0) {
            tasks.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].renderTask);
        }
        else {
            _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].renderEmptyTasks();
        }
        console.log(tasks);
    }

    const handleEditTask = (project, task, taskName, dueDate) => {
        const oldUniqueId = task.getUniqueId();
        const newUniqueId = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].editTask(project, task, taskName, dueDate);
        _domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].editTask(oldUniqueId, newUniqueId, taskName, dueDate);
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();
    }

    const handleWriteToLocalStorage = () => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].writeToLocalStorage();

    }

    const handleReadFromLocalStorage =() => {
        _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].readFromLocalStorage();
        const projects = _projectStore__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
        if (projects.length > 0) {
            projects.map(_domUpdate__WEBPACK_IMPORTED_MODULE_2__["default"].createProjectUI)
        }
    }

    return {
        handleNewProjectCreation,
        handleProjectRemoval,
        handleProjectEdit,
        handleGetProjectsByCategories,
        getCurrentSection,
        setCurrentSection,
        handleAddTask,
        handleFindProject,
        handleGetTasks,
        handleFindTask,
        handleRemoveTask,
        handleEditTask,
        handleReadFromLocalStorage,
        handleWriteToLocalStorage
    }

}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);

/***/ }),

/***/ "./src/projectObjectCreator.js":
/*!*************************************!*\
  !*** ./src/projectObjectCreator.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createNewProjectObject = (id, title, description, /*dueDate,*/ category) => {

    /*getters 
    const getId = () => id;

    const getTitle = () => title;

    const getDescription = () => description;


    const getCategory = () => category;

    const setNewId = (newId) => {
        id = newId;
    };

    //setters    
    const setNewTitle = (newTitle) => {
        title = newTitle;
    };
    const setNewDescription = (newDescription) => {
        description = newDescription;
    };
    const setNewCategory = (newCategory) => {
        category = newCategory;
    };
    
    return {
        getId, getTitle, getDescription, getCategory, setNewId, setNewTitle, setNewDescription, setNewCategory
    }
    } */

    return {id, title, description, category}
 }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewProjectObject);


/***/ }),

/***/ "./src/projectStore.js":
/*!*****************************!*\
  !*** ./src/projectStore.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectStorage = (() => {
    let projects = []

    const addNewProject = (newProject) => projects.push(newProject);

    const removeProject = (unwantedProject) => {
        const index = projects.indexOf(unwantedProject);
        projects.splice(index, 1);
    }
    
    const editProject = (projectToEdit, title, description, category) => {
        const index = projects.indexOf(projectToEdit);

        projects[index].title = title;
        projects[index].description = description;
        projects[index].category = category;
    }

    const addTask = (projectToEdit, taskName, taskDueDate) => {
        const index = projects.indexOf(projectToEdit);
        if ("task" in projects[index]) {
            const newIndex = projects[index]["task"].length;
            projects[index]["task"][newIndex] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate};
            console.log(projects[index]["task"]);
            console.log(projects[index].id)
        }

        else {
            projects[index]["task"] = [];
            projects[index]["task"][0] = {taskParent: projects[index].id, taskName: taskName, taskDueDate: taskDueDate, getUniqueId() { return this.taskName+this.taskDueDate}}
            console.log(projects[index]["task"]);
        }
    }

    const getProjects = () => {
        return projects
    }

    const getProjectByCategory = (category) => {
       return projects.filter((project) => project.category.toLowerCase() === category)
    }

    const findProjectById = (id) => projects.find((project) => project.id === id)

    function getUniqueId() {return this.taskName+this.taskDueDate};

    const getTasks = (project) => {
        const index = projects.indexOf(project);
        const taskList = projects[index]["task"];
        console.log(taskList);

        if (!taskList || taskList.length === 0) {return taskList}

        if (!(taskList[0].hasOwnProperty("getUniqueId"))) {
            taskList.map((task) => task["getUniqueId"] = getUniqueId);
        } 
        taskList.map((task) => task["getUniqueId"] = getUniqueId);
        return taskList;
    }

    const findTaskById = (project, taskId) => {
        const index = projects.indexOf(project);
        console.log(projects[index]["task"]);
        if (!(projects[index]["task"][0].hasOwnProperty("getUniqueId"))) {
            project[index]["task"].map((task)=> task["getUniqueId"] = getUniqueId);
        }
        const task = projects[index]["task"].find((taskObject) => taskObject.getUniqueId() === taskId);
        return task;
    }

    const removeTask = (project, task) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"].splice(taskIndex, 1)
    }

    const editTask = (project, task, taskName, dueDate) => {
        const projectIndex = projects.indexOf(project);
        const taskIndex = projects[projectIndex]["task"].indexOf(task);
        projects[projectIndex]["task"][taskIndex]["taskName"] = taskName;
        projects[projectIndex]["task"][taskIndex]["taskDueDate"] = dueDate;
        return projects[projectIndex]["task"][taskIndex].getUniqueId();        
    }

    const readFromLocalStorage = () => {
        const projectStorage = JSON.parse(localStorage.getItem("projectStorage"));
        if (projectStorage && projectStorage.length > 0) {
            projects = projects.concat(projectStorage);
        }
    }

    const writeToLocalStorage = () => {
        localStorage.setItem("projectStorage", JSON.stringify(projects));
        console.log(projects);
    }

    return {addNewProject, removeProject, editProject, getProjects, getProjectByCategory, 
        addTask, findProjectById, getTasks, findTaskById, removeTask, editTask, 
        readFromLocalStorage, writeToLocalStorage}

}) ()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectStorage);


/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3be0ea4ac64cead2bf95.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "642da2f9203fed7e99a0.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c8f3ce5c9c3fc997861.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bbb4eb157f3c142fd98.svg";

/***/ }),

/***/ "./src/images/view.svg":
/*!*****************************!*\
  !*** ./src/images/view.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83b4018a1f8c5cf87f50.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main */ "./src/components/main.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer */ "./src/components/footer.js");
/* harmony import */ var _components_mobileMenuContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/mobileMenuContainer */ "./src/components/mobileMenuContainer.js");
/* harmony import */ var _manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager */ "./src/manager.js");
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form */ "./src/components/form.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_editProjectForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/editProjectForm */ "./src/components/editProjectForm.js");
/* harmony import */ var _components_createTaskForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/createTaskForm */ "./src/components/createTaskForm.js");
/* harmony import */ var _components_taskModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/taskModal */ "./src/components/taskModal.js");
/* harmony import */ var _components_editTaskForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/editTaskForm */ "./src/components/editTaskForm.js");

 











//load components into the DOM
document.body.appendChild((0,_components_header__WEBPACK_IMPORTED_MODULE_0__["default"])());
document.body.appendChild((0,_components_mobileMenuContainer__WEBPACK_IMPORTED_MODULE_3__["default"])());
document.body.appendChild((0,_components_main__WEBPACK_IMPORTED_MODULE_1__["default"])());
document.body.appendChild((0,_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"])());
document.body.appendChild((0,_components_form__WEBPACK_IMPORTED_MODULE_5__["default"])());
document.body.appendChild((0,_components_editProjectForm__WEBPACK_IMPORTED_MODULE_7__["default"])());
document.body.appendChild((0,_components_createTaskForm__WEBPACK_IMPORTED_MODULE_8__["default"])());
document.body.appendChild((0,_components_taskModal__WEBPACK_IMPORTED_MODULE_9__["default"])());
document.body.appendChild((0,_components_editTaskForm__WEBPACK_IMPORTED_MODULE_10__["default"])());

_manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleReadFromLocalStorage();

const mobileMenuSection = document.querySelector(".mobile-menu-section");
mobileMenuSection.style.display = "none";

window.addEventListener("resize", () => {
    if (window.innerWidth <= 500) {
        mobileMenuSection.style.display = "none";
    }
})

const projectSection = document.querySelector("section.project-section");


const mobileMenuHamburger = document.querySelector(".mobile-menu-hamburger");
mobileMenuHamburger.addEventListener("click", ()=> {
    if (mobileMenuSection.style.display === "none") {
        mobileMenuSection.style.display = "block";
    }

    else {
        mobileMenuSection.style.display = "none";
    }

})


//event listeners
const navigationsNodeList = document.querySelectorAll(".menu-list:not(.mobile-menu-container) > li");
const mobileNavigationsNodeList = document.querySelectorAll(".mobile-menu-container > li");
const navigationsArray = [...navigationsNodeList];
const mobileNavigationsArray = [...mobileNavigationsNodeList];


//event listener for navigations

navigationsArray.forEach((navigation) => { 
    navigation.addEventListener("click", (event) => {
        handleCorrectNav(event.target.textContent);
        projectSection.innerHTML = "";
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetProjectsByCategories(event.target.textContent.toLowerCase());
    }
     )
    });


    
mobileNavigationsArray.forEach((navigation) => { 
    navigation.addEventListener("click", (event) => {
           /* event.target.parentElement.parentElement.style.display = "none"; */
           handleCorrectNav(event.target.textContent, "mobile");
           projectSection.innerHTML = "";
           _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetProjectsByCategories(event.target.textContent.toLowerCase());
    }
     )
    });

//event listener for add new project button   

const addProjectButton = document.querySelector(".new-project-container");
const formModal = document.querySelector(".form-section");
const editFormModal = document.querySelector(".edit-form-section");
const taskFormSection = document.querySelector(".task-form-section");
const taskModalSection = document.querySelector(".task-modal-section");
const editTaskFormSection = document.querySelector(".edit-task-form-section");

const createProjectForm = document.querySelector(".create-project-form");
const editForm = document.querySelector(".edit-project-form");
const taskForm = document.querySelector(".create-task-form");
const editTaskForm = document.querySelector(".edit-task-form");

const tasksContainer = taskModalSection.querySelector(".tasks");
tasksContainer.addEventListener("click", (event) => {

    if (event.target.getAttribute("class") === "delete-task") {
        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        const task = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindTask(project, taskId);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleRemoveTask(project, task);
        return;
    }

    if (event.target.getAttribute("class") === "edit-task") {

        editTaskFormSection.style.display = "flex";

        const projectId = event.target.parentElement.getAttribute("data-parent");
        const taskId = event.target.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        const task = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindTask(project, taskId);

        editTaskFormSection.querySelector('div > form input[type="text"]').value = task.taskName;
        editTaskFormSection.querySelector('div > form input[type="date"]').value = task.taskDueDate;

        const initialiseEditTaskButton = ()=> {
            handleEditTaskButtonClick(project, task);
            editButton.removeEventListener("click", initialiseEditTaskButton)
        }

        const editButton = editTaskFormSection.querySelector("div > form button");
        editButton.addEventListener("click", initialiseEditTaskButton);
    }

})

function handleEditTaskButtonClick(project, task) {
    const taskInputName = document.querySelector('.edit-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.edit-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleEditTask(project, task, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    editTaskFormSection.style.display = "none";
    editTaskForm.reset();
}

addProjectButton.addEventListener("click", ()=> {
    formModal.style.display = "flex";
    }
)

// event listener for close form modal


const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", ()=> {
    formModal.style.display = "none";
    createProjectForm.reset()
})

const closeEditProjectModal = document.querySelector(".close-edit-project-modal");
closeEditProjectModal.addEventListener("click", ()=> {
    editFormModal.style.display = "none";
    editForm.reset();
})

const closeTaskFormModal = document.querySelector(".close-task-form-modal");
closeTaskFormModal.addEventListener("click", ()=> {
    taskFormSection.style.display = "none";
    taskForm.reset();
})

const closeTaskModal = document.querySelector(".close-task-modal");
closeTaskModal.addEventListener("click", ()=> {
    taskModalSection.style.display = "none";
    taskModalSection.querySelector(".tasks").innerHTML = "";
})

const createProjectButton = document.querySelector('button[type="button"]');
createProjectButton.addEventListener("click", ()=> {
    const id = document.querySelector('input[id="ID"]').value;
    const title = document.querySelector('input[id="Title"]').value;
    const description = document.querySelector('input[id="Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector("select").value;

    const checkId = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(id);
    
    if (checkId) {
        alert("ID already exists! Pick a new one");
        console.log("ID exists");
        return;
    }
    
    if (id && title) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleNewProjectCreation(id, title, description, select);
       // console.log(manager.handleGetAllProjects())
        createProjectForm.reset();
        formModal.style.display = "none";
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");
    }
})

// event listener to project section

projectSection.addEventListener("click", (event)=> {

    //if the event target is the add function, get the project ID it belongs to
    if (event.target.getAttribute("id") === "add") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");

        taskFormSection.style.display = "flex";
        const createTaskButton = document.querySelector(".create-task-form > .button-container > button:first-of-type");
        
        const initalisehandleTaskButton = () => {
            const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
            handleAddTaskButtonClick(project);
            createTaskButton.removeEventListener("click", initalisehandleTaskButton);
        }

        createTaskButton.addEventListener("click", initalisehandleTaskButton);

        //set process for adding tasks manager.handleAddTask(id, )
        return
    }

    if (event.target.getAttribute("id") === "delete") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleProjectRemoval(project, projectId);
        return;
    }

    if (event.target.getAttribute("id") === "edit") {
        const projectDetailsUI = event.target.parentElement.parentElement.nextElementSibling;
        const projectDetailsUIChildren = projectDetailsUI.children;

        editFormModal.style.display = "flex";

        const editInputId = document.querySelector(".edit-form-section #edit-ID");
        editInputId.value = projectDetailsUIChildren[0].textContent;
        editInputId.disabled = true;

        const editInputTitle = document.querySelector(".edit-form-section #edit-Title");
        editInputTitle.value = projectDetailsUIChildren[1].textContent;

        const editInputDescription = document.querySelector(".edit-form-section #edit-Description");
        editInputDescription.value = projectDetailsUIChildren[2].textContent;

        const editSelect = document.querySelector(".edit-form-section #edit-Category");
        editSelect.value = projectDetailsUIChildren[3].textContent;

        const editProjectButton = document.querySelector(".edit-form-section button");
        editProjectButton.addEventListener("click", handleEditProjectButtonClick);
        return;
    }

    if (event.target.getAttribute("id") === "view") {
        const projectId = event.target.parentElement.parentElement.parentElement.getAttribute("data-value");
        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(projectId);
        taskModalSection.style.display = "flex";
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetTasks(project);     
    }
})

function handleAddTaskButtonClick(project) {

    const taskInputName = document.querySelector('.create-task-form input[type="text"]').value;
    const taskDueDate = document.querySelector('.create-task-form input[type="date"]').value;


    if (taskInputName && taskDueDate) {
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleAddTask(project, taskInputName, taskDueDate);
    }

    else {
        alert("All Task Input Field Must Be Filled");
    }

    taskFormSection.style.display = "none";
    taskForm.reset();
    
}

function handleEditProjectButtonClick() {
    const id = document.querySelector('input[id="edit-ID"]').value;
    const title = document.querySelector('input[id="edit-Title"]').value;
    const description = document.querySelector('input[id="edit-Description"]').value;
    //const date = document.querySelector('input[id="Date"]').value;
    const select = document.querySelector('select[id="edit-Category"]').value;

    if (title) {

        const project = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleFindProject(id);
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleProjectEdit(project, id, title, description, select);

        editFormModal.style.display = "none";
        const editForm = document.querySelector(".edit-project-form");
        editForm.reset();
    }
    else {
        alert("Sections Marked with Asterisk Can't be Empty");

    }
}

function handleCorrectNav(section, device="notmobile") {
    // get name of current section
    //const currSection = manager.getCurrentSection(); 
    let currNavigation;

    if (device === "mobile") {
        currNavigation = mobileNavigationsArray.find((navigation)=> navigation.textContent === section);
    }
    else {
        currNavigation = navigationsArray.find((navigation)=> navigation.textContent === section);
    }
    const prevSection = document.getElementById("current-section");
    if (prevSection) {
        prevSection.removeAttribute("id", "current-section");
    }
    currNavigation.setAttribute("id", "current-section");
    _manager__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentSection(currNavigation.textContent);
}

if (window.innerWidth <= 500) {
    handleCorrectNav("ALL", "mobile")
}
else {
    handleCorrectNav("ALL");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLDRFQUE0RSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7O0FDeEVQOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQzs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDMUhSOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVMOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1JDOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFB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Q0E7OztBQUdBO0FBQ0EsUUFBUSxnREFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGdEQUFPO0FBQy9CLFFBQVEsZ0RBQU87O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL2NyZWF0ZVRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvZWRpdFByb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvZWRpdFRhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9tb2JpbGVNZW51Q29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFza01vZGFsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2RvbVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RPYmplY3RDcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3RTdG9yZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0NDlCQTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLm5hdi1sb2dvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5uYXYge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhhbWJ1cmdlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjdXJyZW50LXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmxvZ28tY29udGFpbmVyIHtcbiAgICBmbGV4LWJhc2lzOiAxMzBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuXG4ubWVudS1saXN0IHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5tZW51LWxpc3QgbGkge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxufVxuXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjODQ0OUJBO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIGxpIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cblxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciBsaTpsYXN0LW9mLXR5cGUge1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZVxufVxuXG4ubWVudS1saXN0IGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxRTVGO1xufVxuXG5tYWluIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgYmFja2dyb3VuZDojZmZmZmY5XG59XG5cbm1haW4gPiAuc2VhcmNoLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cbi5zZWFyY2gge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogY2xhbXAoMTUwcHgsIDI1dncsIDI1MHB4KTtcbn1cblxuLnNlYXJjaDpmb2N1cyB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDdweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTMsIDMwLCA5NSk7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMjV2dywgMjUwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWNvbnRhaW5lciA+IHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4uZm9ybS1zZWN0aW9uLCAuZWRpdC1mb3JtLXNlY3Rpb24sIC50YXNrLWZvcm0tc2VjdGlvbiwgLnRhc2stbW9kYWwtc2VjdGlvbiwgLmVkaXQtdGFzay1mb3JtLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuOSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciwuZWRpdC1mb3JtLWNvbnRhaW5lciwgLnRhc2stZm9ybS1jb250YWluZXIsIC50YXNrLW1vZGFsLWNvbnRhaW5lciwgLmVkaXQtdGFzay1mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgzMCUsIDMwMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ0OUJBO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbmZvcm0gaW5wdXQsIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5mb3JtID4gZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmZvcm0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbn1cblxubGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgID4gKiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59XG5cbi5jbG9zZS1tb2RhbCwgLmNsb3NlLXRhc2stZm9ybS1tb2RhbCwgLmNsb3NlLWVkaXQtcHJvamVjdC1tb2RhbCwgLmNsb3NlLXRhc2stbW9kYWwsIC5jbG9zZS1lZGl0LXRhc2stZm9ybS1tb2RhbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ucHJvamVjdC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMzVweCAxMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1mdW5jdGlvbnMge1xuICAgIGZsZXgtYmFzaXM6IDMwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMCwwLDAsMC41KTtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IC5pZCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi50YXNrLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnRhc2stbW9kYWwtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLnRhc2tzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhc2tzIGltZyB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDMwcHggMzBweDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubmF2LWxvZ28tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsU0FBUztJQUNULG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3QztJQUN4QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksOEJBQThCO0lBQ2xDOztBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDQ5QkE7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4ubmF2LWxvZ28tY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxubmF2IHtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uaGFtYnVyZ2VyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjdXJyZW50LXNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDEzMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuXFxuLm1lbnUtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLm1lbnUtbGlzdCBsaSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXG59XFxuXFxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICM4NDQ5QkE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIGxpIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tb2JpbGUtbWVudS1jb250YWluZXIgbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlXFxufVxcblxcbi5tZW51LWxpc3QgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxRTVGO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiNmZmZmZjlcXG59XFxuXFxubWFpbiA+IC5zZWFyY2gtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNlYXJjaCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAyNXZ3LCAyNTBweCk7XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMzAsIDk1KTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiA1cHggOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgMjV2dywgMjUwcHgpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1jb250YWluZXIgPiBzcGFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcXG59XFxuXFxuLmZvcm0tc2VjdGlvbiwgLmVkaXQtZm9ybS1zZWN0aW9uLCAudGFzay1mb3JtLXNlY3Rpb24sIC50YXNrLW1vZGFsLXNlY3Rpb24sIC5lZGl0LXRhc2stZm9ybS1zZWN0aW9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDAsMC45KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciwuZWRpdC1mb3JtLWNvbnRhaW5lciwgLnRhc2stZm9ybS1jb250YWluZXIsIC50YXNrLW1vZGFsLWNvbnRhaW5lciwgLmVkaXQtdGFzay1mb3JtLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiBtYXgoMzAlLCAzMDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NDQ5QkE7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbmZvcm0gaW5wdXQsIHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbmZvcm0gPiBkaXYge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcXG59XFxuXFxubGFiZWx7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcXG59XFxuXFxuLmJ1dHRvbi1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyICA+ICoge1xcbiAgICB3aWR0aDogNzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XFxufVxcblxcbi5jbG9zZS1tb2RhbCwgLmNsb3NlLXRhc2stZm9ybS1tb2RhbCwgLmNsb3NlLWVkaXQtcHJvamVjdC1tb2RhbCwgLmNsb3NlLXRhc2stbW9kYWwsIC5jbG9zZS1lZGl0LXRhc2stZm9ybS1tb2RhbCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvcm0tdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4uY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnByb2plY3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDM1cHggMTBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1mdW5jdGlvbnMge1xcbiAgICBmbGV4LWJhc2lzOiAzMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMCwwLDAsMC41KTtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjVweDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiAudGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiAuaWQge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnByb2plY3QtZGV0YWlscyA+IGRpdjpsYXN0LW9mLXR5cGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcblxcbi50YXNrLXRpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi50YXNrLW1vZGFsLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoZWF0O1xcbn1cXG5cXG4udGFza3Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4udGFza3MgaW1nIHtcXG4gICAgaGVpZ2h0OiAxOXB4O1xcbiAgICB3aWR0aDogMTlweDtcXG59XFxuXFxuLnRhc2stY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDMwcHggMzBweDtcXG4gICAgY29sdW1uLWdhcDogMTBweDtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gICAgbmF2IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG5cXG4gICAgLmhhbWJ1cmdlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG5cXG4gICAgLm5hdi1sb2dvLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybS1zZWN0aW9uXCIpXG4gICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtdGFzay1mb3JtXCIpO1xuXG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbG9zZUZvcm1Nb2RhbC5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIlxuICAgIGNsb3NlRm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS10YXNrLWZvcm0tbW9kYWxcIik7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWwpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUYXNrXCI7XG4gICAgZm9ybVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJmb3JtLXRpdGxlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtVGl0bGUpO1xuXG4gICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0YXNrTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgVGFzayBOYW1lKlwiO1xuICAgIHRhc2tOYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGFza05hbWVcIik7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiSURcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUlucHV0KTtcblxuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IER1ZSBEYXRlKlwiO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJEYXRlXCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG5cblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBmb3JtU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza0Zvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGVkaXRQcm9qZWN0Rm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybS1zZWN0aW9uXCIpO1xuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImVkaXQtZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC1wcm9qZWN0LWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLWVkaXQtcHJvamVjdC1tb2RhbFwiKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUZvcm1Nb2RhbCk7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm1Nb2RhbENvbnRhaW5lcik7XG5cbiAgICBcbiAgICBjb25zdCBmb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUby1Eb1wiO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGNvbnN0IGlkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaWRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgSUQqXCI7XG4gICAgaWRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0SURcIik7XG4gICAgY29uc3QgaWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1JRFwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgMCk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlkTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaWRJbnB1dCk7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IFRpdGxlKlwiO1xuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdFRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtVGl0bGVcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXREZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1EZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgXG4gICAgLypcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaWNrIER1ZSBEYXRlKlwiO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJEYXRlXCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7ICovXG5cblxuICAgIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQ2F0ZWdvcnlcIjtcbiAgICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0Q2F0ZWdvcnlcIik7XG4gICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZWRpdC1DYXRlZ29yeVwiKTtcbiAgICBcbiAgICBjb25zdCB3b3JrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB3b3JrT3B0aW9uLnZhbHVlID0gXCJXb3JrXCI7XG4gICAgd29ya09wdGlvbi50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuXG4gICAgY29uc3QgZ3ltT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBneW1PcHRpb24udmFsdWUgPSBcIkd5bVwiO1xuICAgIGd5bU9wdGlvbi50ZXh0Q29udGVudCA9IFwiR3ltXCI7XG5cbiAgICBjb25zdCBzY2hvb2xPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHNjaG9vbE9wdGlvbi52YWx1ZSA9IFwiU2Nob29sXCI7XG4gICAgc2Nob29sT3B0aW9uLnRleHRDb250ZW50ID0gXCJTY2hvb2xcIjtcblxuICAgIGNvbnN0IGNob3JlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjaG9yZU9wdGlvbi52YWx1ZSA9IFwiQ2hvcmVzXCI7XG4gICAgY2hvcmVPcHRpb24udGV4dENvbnRlbnQgPSBcIkNob3Jlc1wiO1xuXG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQod29ya09wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZ3ltT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChzY2hvb2xPcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGNob3JlT3B0aW9uKTtcblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZWxlY3RJbnB1dCk7XG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIGZvcm1TZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0UHJvamVjdEZvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEVkaXRUYXNrRm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1mb3JtLXNlY3Rpb25cIilcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLWVkaXQtdGFzay1mb3JtLW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHRhc2tOYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrIE5hbWUqXCI7XG4gICAgdGFza05hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrTmFtZVwiKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJJRFwiKTtcbiAgICB0YXNrTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrTmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lSW5wdXQpO1xuXG5cbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgRHVlIERhdGUqXCI7XG4gICAgZGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkRhdGVcIik7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkRhdGVcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KTtcblxuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBmb3JtU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFRhc2tGb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBGb290ZXIgKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJUTy1ETy1MSVNUIEJZIFZXRURFIEVTSU5cIlxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gRm9ybSgpIHtcblxuICAgIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgZm9ybVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImZvcm0tc2VjdGlvblwiKVxuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1wcm9qZWN0LWZvcm1cIik7XG5cbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VGb3JtTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8tRG9cIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCBpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IElEKlwiO1xuICAgIGlkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiSURcIik7XG4gICAgY29uc3QgaWRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiSURcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIDApO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCIyNVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaWRMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZElucHV0KTtcblxuICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgVGl0bGUqXCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJUaXRsZVwiKTtcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJDcmVhdGUgYSB0by1kbyBsaXN0XCIpXG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IERlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIFxuICAgIC8qXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUGljayBEdWUgRGF0ZSpcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpOyAqL1xuXG5cbiAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IENhdGVnb3J5XCI7XG4gICAgc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiQ2F0ZWdvcnlcIik7XG4gICAgY29uc3Qgc2VsZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHNlbGVjdElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiQ2F0ZWdvcnlcIik7XG4gICAgXG4gICAgY29uc3Qgd29ya09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgd29ya09wdGlvbi52YWx1ZSA9IFwiV29ya1wiO1xuICAgIHdvcmtPcHRpb24udGV4dENvbnRlbnQgPSBcIldvcmtcIjtcblxuICAgIGNvbnN0IGd5bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZ3ltT3B0aW9uLnZhbHVlID0gXCJHeW1cIjtcbiAgICBneW1PcHRpb24udGV4dENvbnRlbnQgPSBcIkd5bVwiO1xuXG4gICAgY29uc3Qgc2Nob29sT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBzY2hvb2xPcHRpb24udmFsdWUgPSBcIlNjaG9vbFwiO1xuICAgIHNjaG9vbE9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG5cbiAgICBjb25zdCBjaG9yZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY2hvcmVPcHRpb24udmFsdWUgPSBcIkNob3Jlc1wiO1xuICAgIGNob3JlT3B0aW9uLnRleHRDb250ZW50ID0gXCJDaG9yZXNcIjtcblxuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHdvcmtPcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGd5bU9wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoc2Nob29sT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChjaG9yZU9wdGlvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGVcIjtcbiAgICBjcmVhdGVCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcblxuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICByZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmVzZXRcIik7XG4gICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSBcIlJlc2V0XCI7XG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXRCdXR0b24pO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIGZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgZm9ybVNlY3Rpb24uYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBmb3JtU2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuLi9pbWFnZXMvbWVudS5zdmdcIlxuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gICAgLy9oZWFkZXIgY29udGFpbmVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IG5hdkxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hdkxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5hdi1sb2dvLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIpO1xuICAgIGxvZ29Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICAvKmNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29JbWFnZS5zcmMgPSBcIi4uL2ltYWdlcy9cIjtcbiAgICBsb2dvSW1hZ2UuY2xhc3NMaXN0LmFkZChcImxvZ28taW1hZ2VcIik7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpOyAqL1xuXG4gICAgbmF2TG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcblxuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhbGwudGV4dENvbnRlbnQgPSBcIkFMTFwiO1xuXG4gICAgY29uc3Qgd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB3b3JrLnRleHRDb250ZW50ID0gXCJXT1JLXCI7XG5cbiAgICBjb25zdCBneW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZ3ltLnRleHRDb250ZW50ID0gXCJHWU1cIjtcblxuICAgIGNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzY2hvb2wudGV4dENvbnRlbnQgPSBcIlNDSE9PTFwiO1xuXG4gICAgY29uc3QgY2hvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNob3Jlcy50ZXh0Q29udGVudCA9IFwiQ0hPUkVTXCJcblxuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGFsbCk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQod29yayk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoZ3ltKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChzY2hvb2wpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKGNob3Jlcyk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgY29uc3QgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFtYnVyZ2VyLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBtb2JpbGVNZW51SGFtYnVyZ2VyID0gbmV3IEltYWdlKCk7XG4gICAgbW9iaWxlTWVudUhhbWJ1cmdlci5zcmMgPSBtZW51O1xuICAgIG1vYmlsZU1lbnVIYW1idXJnZXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LWhhbWJ1cmdlclwiKVxuXG4gICAgbW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpbGVNZW51SGFtYnVyZ2VyKTtcblxuICAgIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobmF2KTtcblxuICAgIG5hdkxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobW9iaUxlTWVudUhhbWJ1cmdlckNvbnRhaW5lcik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxvZ29Db250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuXG4gICAgY29uc3Qgc2VhcmNoU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2VhcmNoU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLXNlY3Rpb25cIik7XG5cbiAgICAvL2NvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgYWRkTmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgIC8vIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAvL3NlYXJjaC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICAgIC8vc2VhcmNoLnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIGJ5IHRpdGxlXCIpO1xuICAgLy8gc2VhcmNoLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2hcIik7XG4gICAvLyBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoKTtcblxuICAgIGNvbnN0IGFkZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiPHNwYW4+JnBsdXM7PC9zcGFuPkFkZCBOZXcgUHJvamVjdFwiO1xuICAgIGFkZE5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkQ29udGFpbmVyKTtcbiAgICBhZGROZXdQcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuZXctcHJvamVjdC1jb250YWluZXJcIilcbiAgICBhZGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFkZC1jb250YWluZXJcIik7XG5cbiAgIC8vIHNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoc2VhcmNoQ29udGFpbmVyKTtcbiAgICBzZWFyY2hTZWN0aW9uLmFwcGVuZENoaWxkKGFkZE5ld1Byb2plY3RDb250YWluZXIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChzZWFyY2hTZWN0aW9uKTtcblxuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgcHJvamVjdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInByb2plY3Qtc2VjdGlvblwiKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocHJvamVjdFNlY3Rpb24pO1xuICAgXG4gICAgcmV0dXJuIG1haW47XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpblxuIiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIE1vYmlsZU1lbnUoKSB7XG5cbiAgICBjb25zdCBtb2JpbGVNZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIG1vYmlsZU1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1zZWN0aW9uXCIpO1xuXG5cbiAgICBjb25zdCBtb2JpbGVNZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlzdFwiKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtb2JpbGUtbWVudS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBhbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWxsLnRleHRDb250ZW50ID0gXCJBTExcIjtcblxuICAgIGNvbnN0IHdvcmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgd29yay50ZXh0Q29udGVudCA9IFwiV09SS1wiO1xuXG4gICAgY29uc3QgZ3ltID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGd5bS50ZXh0Q29udGVudCA9IFwiR1lNXCI7XG5cbiAgICBjb25zdCBzY2hvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgc2Nob29sLnRleHRDb250ZW50ID0gXCJTQ0hPT0xcIjtcblxuICAgIGNvbnN0IGNob3JlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjaG9yZXMudGV4dENvbnRlbnQgPSBcIkNIT1JFU1wiO1xuXG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChhbGwpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQod29yayk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChneW0pO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Nob29sKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNob3Jlcyk7XG5cbiAgICBtb2JpbGVNZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtb2JpbGVNZW51Q29udGFpbmVyKTtcblxuICAgIHJldHVybiBtb2JpbGVNZW51U2VjdGlvblxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVNZW51IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tNb2RhbCgpIHtcblxuICAgIGNvbnN0IHRhc2tNb2RhbFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICB0YXNrTW9kYWxTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLXNlY3Rpb25cIilcbiAgICBcbiAgICBjb25zdCB0YXNrTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCB0YXNrTW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrTW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLWNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBjbG9zZVRhc2tNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNsb3NlVGFza01vZGFsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiXG4gICAgY2xvc2VUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRhc2stbW9kYWxcIik7XG4gICAgY2xvc2VUYXNrTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VUYXNrTW9kYWwpO1xuICAgIGNsb3NlVGFza01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIHRhc2tNb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2VUYXNrTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpO1xuXG4gICAgdGFza01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuXG5cbiAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuXG4gICAgdGFza01vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgXG4gICAgdGFza01vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tNb2RhbENvbnRlbnQpO1xuICAgIHRhc2tNb2RhbFNlY3Rpb24uYXBwZW5kQ2hpbGQodGFza01vZGFsQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB0YXNrTW9kYWxTZWN0aW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tNb2RhbDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXG5pbXBvcnQgYWRkIGZyb20gXCIuL2ltYWdlcy9hZGQuc3ZnXCI7XG5pbXBvcnQgZGVsIGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgdmlldyBmcm9tIFwiLi9pbWFnZXMvdmlldy5zdmdcIjtcbmltcG9ydCBlZGl0IGZyb20gXCIuL2ltYWdlcy9lZGl0LnN2Z1wiO1xuXG5jb25zdCBkb20gPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdFVJID0gKHByb2plY3RPYmplY3QpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RGdW5jdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZ1bmN0aW9uc1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGVkaXRJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGVkaXRJbWFnZS5zcmMgPSBlZGl0O1xuICAgICAgICBlZGl0SW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0XCIpXG4gICAgICAgIHByb2plY3RFZGl0LmFwcGVuZENoaWxkKGVkaXRJbWFnZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB2aWV3SW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICB2aWV3SW1hZ2Uuc3JjID0gdmlldztcbiAgICAgICAgcHJvamVjdFZpZXcuYXBwZW5kQ2hpbGQodmlld0ltYWdlKTtcbiAgICAgICAgdmlld0ltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidmlld1wiKVxuXG4gICAgICAgIGNvbnN0IHByb2plY3RBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBhZGRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBhZGRJbWFnZS5zcmMgPSBhZGQ7XG4gICAgICAgIHByb2plY3RBZGQuYXBwZW5kQ2hpbGQoYWRkSW1hZ2UpO1xuICAgICAgICBhZGRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwiYWRkXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBkZWxldGVJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSBkZWw7XG4gICAgICAgIHByb2plY3REZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpO1xuICAgICAgICBkZWxldGVJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVwiKVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0RWRpdCk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdFZpZXcpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmFwcGVuZENoaWxkKHByb2plY3RBZGQpO1xuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmFwcGVuZENoaWxkKHByb2plY3REZWxldGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdERldGFpbHMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGV0YWlsc1wiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHByb2plY3RJZC50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuaWQ7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QudGl0bGU7XG4gICAgICAgIHByb2plY3REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuZGVzY3JpcHRpb247XG4gICAgICAgIHByb2plY3RDYXRlZ29yeS50ZXh0Q29udGVudCA9IHByb2plY3RPYmplY3QuY2F0ZWdvcnk7XG5cbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICAgICAgcHJvamVjdElkLmNsYXNzTGlzdC5hZGQoXCJpZFwiKTtcblxuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0SWQpO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5hcHBlbmRDaGlsZChwcm9qZWN0Q2F0ZWdvcnkpO1xuXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEZ1bmN0aW9ucyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdERldGFpbHMpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgcHJvamVjdElkLnRleHRDb250ZW50KTtcblxuICAgICAgICBwcm9qZWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0VUkgPSAocHJvamVjdElkKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS12YWx1ZT1cIiR7cHJvamVjdElkfVwiXWApO1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1zZWN0aW9uXCIpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5yZW1vdmVDaGlsZChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0UHJvamVjdFVJID0gKHByb2plY3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWU9XCIke3Byb2plY3RJZH1cIl1gKTtcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbFVJID0gcHJvamVjdC5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsVUlDaGlsZHJlbiA9IHByb2plY3REZXRhaWxVSS5jaGlsZHJlbjtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvamVjdERldGFpbFVJQ2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBjYXRlZ29yeTsgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSAodGFza09iamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stY29udGFpbmVyXCIpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFza09iamVjdC50YXNrTmFtZTtcblxuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tEdWVEYXRlLnRleHRDb250ZW50ID0gdGFza09iamVjdC50YXNrRHVlRGF0ZTtcblxuICAgICAgICBjb25zdCB0YXNrRWRpdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0YXNrRWRpdC5zcmMgPSBlZGl0O1xuICAgICAgICB0YXNrRWRpdC5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGFza0RlbGV0ZS5zcmMgPSBkZWw7XG4gICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10YXNrXCIpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VkaXQpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgYCR7dGFza09iamVjdC5nZXRVbmlxdWVJZCgpfWApXG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1wYXJlbnRcIiwgYCR7dGFza09iamVjdC50YXNrUGFyZW50fWApXG5cbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyRW1wdHlUYXNrcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBzZWUgaGVyZS4uLlwiO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAodGFza1VuaXF1ZUlkKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcbiAgICAgICAgY29uc3QgdGFza1RvRGVsZXRlID0gdGFza3MucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWUgPSBcIiR7dGFza1VuaXF1ZUlkfVwiXWApO1xuICAgICAgICB0YXNrcy5yZW1vdmVDaGlsZCh0YXNrVG9EZWxldGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRUYXNrID0gKG9sZFVuaXF1ZUlkLCBuZXdVbmlxdWVJZCwgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID0gdGFza3MucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtdmFsdWUgPSBcIiR7b2xkVW5pcXVlSWR9XCJdYCk7XG5cbiAgICAgICAgY29uc29sZS5sb2cob2xkVW5pcXVlSWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdVbmlxdWVJZCk7XG5cbiAgICAgICAgdGFza1RvRWRpdC5xdWVyeVNlbGVjdG9yKFwiZGl2OmZpcnN0LW9mLXR5cGVcIikudGV4dENvbnRlbnQgPSB0YXNrTmFtZTtcbiAgICAgICAgdGFza1RvRWRpdC5xdWVyeVNlbGVjdG9yKFwiZGl2Omxhc3Qtb2YtdHlwZVwiKS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2tUb0VkaXQuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBgJHtuZXdVbmlxdWVJZH1gKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RVSSwgZGVsZXRlUHJvamVjdFVJLCBlZGl0UHJvamVjdFVJLCByZW5kZXJUYXNrLCByZW5kZXJFbXB0eVRhc2tzLCBkZWxldGVUYXNrLCBlZGl0VGFza31cbn0pICgpXG5cbmV4cG9ydCBkZWZhdWx0IGRvbSIsImltcG9ydCBwcm9qZWN0U3RvcmFnZSBmcm9tIFwiLi9wcm9qZWN0U3RvcmVcIjtcbmltcG9ydCBjcmVhdGVOZXdQcm9qZWN0T2JqZWN0IGZyb20gXCIuL3Byb2plY3RPYmplY3RDcmVhdG9yXCI7XG5pbXBvcnQgZG9tIGZyb20gXCIuL2RvbVVwZGF0ZVwiO1xuXG5jb25zdCBtYW5hZ2VyID0gKCgpID0+IHtcblxuICAgIGxldCBjdXJyZW50U2VjdGlvbiA9IFwiQUxMXCI7XG5cbiAgICBjb25zdCBoYW5kbGVOZXdQcm9qZWN0Q3JlYXRpb24gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gY3JlYXRlTmV3UHJvamVjdE9iamVjdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmFkZE5ld1Byb2plY3Qob2JqKTtcbiAgICAgICAgZG9tLmNyZWF0ZVByb2plY3RVSShvYmopO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICAgICAgLy8gdWRwYXRlIERPTSBBRERJVElPTlxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2plY3RSZW1vdmFsID0gKHByb2plY3QsIHByb2plY3RJZCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICBkb20uZGVsZXRlUHJvamVjdFVJKHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gdXBkYXRlIERPTSBSRU1PVkFMXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJvamVjdEVkaXQgPSAocHJvamVjdCwgcHJvamVjdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmVkaXRQcm9qZWN0KHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpO1xuICAgICAgICBkb20uZWRpdFByb2plY3RVSShwcm9qZWN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIC8vIHVkcGRhdGUgRE9NIEVESVRJTkdcbiAgICB9XG5cbiAgICAvKmNvbnN0IGhhbmRsZUdldEFsbFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgICAgLy8gZG9tIHN0dWZmIGZvciBkaXNwbGF5IHByb2plY3RzIFxuICAgIH0gKi9cblxuICAgIGNvbnN0IGhhbmRsZUdldFByb2plY3RzQnlDYXRlZ29yaWVzID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGlmIChjYXRlZ29yeSA9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yeSlcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgICAgICAgICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcChkb20uY3JlYXRlUHJvamVjdFVJKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RTdG9yYWdlLmdldFByb2plY3RCeUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKGRvbS5jcmVhdGVQcm9qZWN0VUkpXG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9tIHN0dWZmIGZvciBwcm9qZXRzIGRpc3BsYXkgYnkgY2F0ZWdvcnlcbiAgICB9XG59XG5cbiAgICBjb25zdCBoYW5kbGVBZGRUYXNrID0gKHByb2plY3RUb0VkaXQsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5hZGRUYXNrKHByb2plY3RUb0VkaXQsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gZG9tIHN0dWZmIGZvciBwcm9qZWN0IHRhc2tcbiAgICB9XG5cbiAgICBjb25zdCBnZXRDdXJyZW50U2VjdGlvbiA9ICgpID0+IGN1cnJlbnRTZWN0aW9uO1xuXG4gICAgY29uc3Qgc2V0Q3VycmVudFNlY3Rpb24gPSAobmV3Q3VycmVudFNlY3Rpb24pID0+IHtcbiAgICAgICAgY3VycmVudFNlY3Rpb24gPSBuZXdDdXJyZW50U2VjdGlvblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUZpbmRQcm9qZWN0ID0gKGlkKSA9PiBwcm9qZWN0U3RvcmFnZS5maW5kUHJvamVjdEJ5SWQoaWQpO1xuXG4gICAgY29uc3QgaGFuZGxlRmluZFRhc2sgPSAocHJvamVjdCwgdGFza0lkKSA9PiBwcm9qZWN0U3RvcmFnZS5maW5kVGFza0J5SWQocHJvamVjdCwgdGFza0lkKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlbW92ZVRhc2sgPSAocHJvamVjdCwgdGFzaykgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZW1vdmVUYXNrKHByb2plY3QsIHRhc2spO1xuICAgICAgICBkb20uZGVsZXRlVGFzayh0YXNrLmdldFVuaXF1ZUlkKCkpO1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKClcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVHZXRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gcHJvamVjdFN0b3JhZ2UuZ2V0VGFza3MocHJvamVjdCk7XG4gICAgICAgIGlmICh0YXNrcyAmJiB0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXNrcy5tYXAoZG9tLnJlbmRlclRhc2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZG9tLnJlbmRlckVtcHR5VGFza3MoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRWRpdFRhc2sgPSAocHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgb2xkVW5pcXVlSWQgPSB0YXNrLmdldFVuaXF1ZUlkKCk7XG4gICAgICAgIGNvbnN0IG5ld1VuaXF1ZUlkID0gcHJvamVjdFN0b3JhZ2UuZWRpdFRhc2socHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpO1xuICAgICAgICBkb20uZWRpdFRhc2sob2xkVW5pcXVlSWQsIG5ld1VuaXF1ZUlkLCB0YXNrTmFtZSwgZHVlRGF0ZSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVXcml0ZVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS53cml0ZVRvTG9jYWxTdG9yYWdlKCk7XG5cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZWFkRnJvbUxvY2FsU3RvcmFnZSA9KCkgPT4ge1xuICAgICAgICBwcm9qZWN0U3RvcmFnZS5yZWFkRnJvbUxvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RTdG9yYWdlLmdldFByb2plY3RzKCk7XG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0cy5tYXAoZG9tLmNyZWF0ZVByb2plY3RVSSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGhhbmRsZU5ld1Byb2plY3RDcmVhdGlvbixcbiAgICAgICAgaGFuZGxlUHJvamVjdFJlbW92YWwsXG4gICAgICAgIGhhbmRsZVByb2plY3RFZGl0LFxuICAgICAgICBoYW5kbGVHZXRQcm9qZWN0c0J5Q2F0ZWdvcmllcyxcbiAgICAgICAgZ2V0Q3VycmVudFNlY3Rpb24sXG4gICAgICAgIHNldEN1cnJlbnRTZWN0aW9uLFxuICAgICAgICBoYW5kbGVBZGRUYXNrLFxuICAgICAgICBoYW5kbGVGaW5kUHJvamVjdCxcbiAgICAgICAgaGFuZGxlR2V0VGFza3MsXG4gICAgICAgIGhhbmRsZUZpbmRUYXNrLFxuICAgICAgICBoYW5kbGVSZW1vdmVUYXNrLFxuICAgICAgICBoYW5kbGVFZGl0VGFzayxcbiAgICAgICAgaGFuZGxlUmVhZEZyb21Mb2NhbFN0b3JhZ2UsXG4gICAgICAgIGhhbmRsZVdyaXRlVG9Mb2NhbFN0b3JhZ2VcbiAgICB9XG5cbn0pICgpXG5cbmV4cG9ydCBkZWZhdWx0IG1hbmFnZXIiLCJjb25zdCBjcmVhdGVOZXdQcm9qZWN0T2JqZWN0ID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIC8qZHVlRGF0ZSwqLyBjYXRlZ29yeSkgPT4ge1xuXG4gICAgLypnZXR0ZXJzIFxuICAgIGNvbnN0IGdldElkID0gKCkgPT4gaWQ7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuXG4gICAgY29uc3QgZ2V0Q2F0ZWdvcnkgPSAoKSA9PiBjYXRlZ29yeTtcblxuICAgIGNvbnN0IHNldE5ld0lkID0gKG5ld0lkKSA9PiB7XG4gICAgICAgIGlkID0gbmV3SWQ7XG4gICAgfTtcblxuICAgIC8vc2V0dGVycyAgICBcbiAgICBjb25zdCBzZXROZXdUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TmV3RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICB9O1xuICAgIGNvbnN0IHNldE5ld0NhdGVnb3J5ID0gKG5ld0NhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNhdGVnb3J5ID0gbmV3Q2F0ZWdvcnk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXRDYXRlZ29yeSwgc2V0TmV3SWQsIHNldE5ld1RpdGxlLCBzZXROZXdEZXNjcmlwdGlvbiwgc2V0TmV3Q2F0ZWdvcnlcbiAgICB9XG4gICAgfSAqL1xuXG4gICAgcmV0dXJuIHtpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeX1cbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5ld1Byb2plY3RPYmplY3RcbiIsImNvbnN0IHByb2plY3RTdG9yYWdlID0gKCgpID0+IHtcbiAgICBsZXQgcHJvamVjdHMgPSBbXVxuXG4gICAgY29uc3QgYWRkTmV3UHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdCA9ICh1bndhbnRlZFByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHVud2FudGVkUHJvamVjdCk7XG4gICAgICAgIHByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gKHByb2plY3RUb0VkaXQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0VkaXQpO1xuXG4gICAgICAgIHByb2plY3RzW2luZGV4XS50aXRsZSA9IHRpdGxlO1xuICAgICAgICBwcm9qZWN0c1tpbmRleF0uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFzayA9IChwcm9qZWN0VG9FZGl0LCB0YXNrTmFtZSwgdGFza0R1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3RUb0VkaXQpO1xuICAgICAgICBpZiAoXCJ0YXNrXCIgaW4gcHJvamVjdHNbaW5kZXhdKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IHByb2plY3RzW2luZGV4XVtcInRhc2tcIl0ubGVuZ3RoO1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXVtuZXdJbmRleF0gPSB7dGFza1BhcmVudDogcHJvamVjdHNbaW5kZXhdLmlkLCB0YXNrTmFtZTogdGFza05hbWUsIHRhc2tEdWVEYXRlOiB0YXNrRHVlRGF0ZX07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XS5pZClcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXSA9IFtdO1xuICAgICAgICAgICAgcHJvamVjdHNbaW5kZXhdW1widGFza1wiXVswXSA9IHt0YXNrUGFyZW50OiBwcm9qZWN0c1tpbmRleF0uaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgdGFza0R1ZURhdGU6IHRhc2tEdWVEYXRlLCBnZXRVbmlxdWVJZCgpIHsgcmV0dXJuIHRoaXMudGFza05hbWUrdGhpcy50YXNrRHVlRGF0ZX19XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvamVjdHNcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0QnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICAgICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkpXG4gICAgfVxuXG4gICAgY29uc3QgZmluZFByb2plY3RCeUlkID0gKGlkKSA9PiBwcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBpZClcblxuICAgIGZ1bmN0aW9uIGdldFVuaXF1ZUlkKCkge3JldHVybiB0aGlzLnRhc2tOYW1lK3RoaXMudGFza0R1ZURhdGV9O1xuXG4gICAgY29uc3QgZ2V0VGFza3MgPSAocHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tMaXN0ID0gcHJvamVjdHNbaW5kZXhdW1widGFza1wiXTtcbiAgICAgICAgY29uc29sZS5sb2codGFza0xpc3QpO1xuXG4gICAgICAgIGlmICghdGFza0xpc3QgfHwgdGFza0xpc3QubGVuZ3RoID09PSAwKSB7cmV0dXJuIHRhc2tMaXN0fVxuXG4gICAgICAgIGlmICghKHRhc2tMaXN0WzBdLmhhc093blByb3BlcnR5KFwiZ2V0VW5pcXVlSWRcIikpKSB7XG4gICAgICAgICAgICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHRhc2tbXCJnZXRVbmlxdWVJZFwiXSA9IGdldFVuaXF1ZUlkKTtcbiAgICAgICAgfSBcbiAgICAgICAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB0YXNrW1wiZ2V0VW5pcXVlSWRcIl0gPSBnZXRVbmlxdWVJZCk7XG4gICAgICAgIHJldHVybiB0YXNrTGlzdDtcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kVGFza0J5SWQgPSAocHJvamVjdCwgdGFza0lkKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaW5kZXhdW1widGFza1wiXSk7XG4gICAgICAgIGlmICghKHByb2plY3RzW2luZGV4XVtcInRhc2tcIl1bMF0uaGFzT3duUHJvcGVydHkoXCJnZXRVbmlxdWVJZFwiKSkpIHtcbiAgICAgICAgICAgIHByb2plY3RbaW5kZXhdW1widGFza1wiXS5tYXAoKHRhc2spPT4gdGFza1tcImdldFVuaXF1ZUlkXCJdID0gZ2V0VW5pcXVlSWQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdLmZpbmQoKHRhc2tPYmplY3QpID0+IHRhc2tPYmplY3QuZ2V0VW5pcXVlSWQoKSA9PT0gdGFza0lkKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlVGFzayA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IHRhc2tJbmRleCA9IHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdLmluZGV4T2YodGFzayk7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdLnNwbGljZSh0YXNrSW5kZXgsIDEpXG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAocHJvamVjdCwgdGFzaywgdGFza05hbWUsIGR1ZURhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl0uaW5kZXhPZih0YXNrKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl1bdGFza0luZGV4XVtcInRhc2tOYW1lXCJdID0gdGFza05hbWU7XG4gICAgICAgIHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdW3Rhc2tJbmRleF1bXCJ0YXNrRHVlRGF0ZVwiXSA9IGR1ZURhdGU7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1twcm9qZWN0SW5kZXhdW1widGFza1wiXVt0YXNrSW5kZXhdLmdldFVuaXF1ZUlkKCk7ICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCByZWFkRnJvbUxvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdFN0b3JhZ2VcIikpO1xuICAgICAgICBpZiAocHJvamVjdFN0b3JhZ2UgJiYgcHJvamVjdFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcHJvamVjdHMgPSBwcm9qZWN0cy5jb25jYXQocHJvamVjdFN0b3JhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgd3JpdGVUb0xvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHthZGROZXdQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBlZGl0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RCeUNhdGVnb3J5LCBcbiAgICAgICAgYWRkVGFzaywgZmluZFByb2plY3RCeUlkLCBnZXRUYXNrcywgZmluZFRhc2tCeUlkLCByZW1vdmVUYXNrLCBlZGl0VGFzaywgXG4gICAgICAgIHJlYWRGcm9tTG9jYWxTdG9yYWdlLCB3cml0ZVRvTG9jYWxTdG9yYWdlfVxuXG59KSAoKVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0U3RvcmFnZVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL21haW5cIjsgXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5pbXBvcnQgTW9iaWxlTWVudSBmcm9tIFwiLi9jb21wb25lbnRzL21vYmlsZU1lbnVDb250YWluZXJcIjtcbmltcG9ydCBtYW5hZ2VyIGZyb20gXCIuL21hbmFnZXJcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybVwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBlZGl0UHJvamVjdEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0UHJvamVjdEZvcm1cIjtcbmltcG9ydCBjcmVhdGVUYXNrRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2NyZWF0ZVRhc2tGb3JtXCI7XG5pbXBvcnQgY3JlYXRlVGFza01vZGFsIGZyb20gXCIuL2NvbXBvbmVudHMvdGFza01vZGFsXCI7XG5pbXBvcnQgRWRpdFRhc2tGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvZWRpdFRhc2tGb3JtXCI7XG5cblxuLy9sb2FkIGNvbXBvbmVudHMgaW50byB0aGUgRE9NXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTW9iaWxlTWVudSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoTWFpbigpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChGb3JtKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEZvcm0oKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tGb3JtKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVUYXNrTW9kYWwoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEVkaXRUYXNrRm9ybSgpKTtcblxubWFuYWdlci5oYW5kbGVSZWFkRnJvbUxvY2FsU3RvcmFnZSgpO1xuXG5jb25zdCBtb2JpbGVNZW51U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9iaWxlLW1lbnUtc2VjdGlvblwiKTtcbm1vYmlsZU1lbnVTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbiAgICAgICAgbW9iaWxlTWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cbmNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInNlY3Rpb24ucHJvamVjdC1zZWN0aW9uXCIpO1xuXG5cbmNvbnN0IG1vYmlsZU1lbnVIYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vYmlsZS1tZW51LWhhbWJ1cmdlclwiKTtcbm1vYmlsZU1lbnVIYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGlmIChtb2JpbGVNZW51U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICBtb2JpbGVNZW51U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBtb2JpbGVNZW51U2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG59KVxuXG5cbi8vZXZlbnQgbGlzdGVuZXJzXG5jb25zdCBuYXZpZ2F0aW9uc05vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWxpc3Q6bm90KC5tb2JpbGUtbWVudS1jb250YWluZXIpID4gbGlcIik7XG5jb25zdCBtb2JpbGVOYXZpZ2F0aW9uc05vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2JpbGUtbWVudS1jb250YWluZXIgPiBsaVwiKTtcbmNvbnN0IG5hdmlnYXRpb25zQXJyYXkgPSBbLi4ubmF2aWdhdGlvbnNOb2RlTGlzdF07XG5jb25zdCBtb2JpbGVOYXZpZ2F0aW9uc0FycmF5ID0gWy4uLm1vYmlsZU5hdmlnYXRpb25zTm9kZUxpc3RdO1xuXG5cbi8vZXZlbnQgbGlzdGVuZXIgZm9yIG5hdmlnYXRpb25zXG5cbm5hdmlnYXRpb25zQXJyYXkuZm9yRWFjaCgobmF2aWdhdGlvbikgPT4geyBcbiAgICBuYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaGFuZGxlQ29ycmVjdE5hdihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZUdldFByb2plY3RzQnlDYXRlZ29yaWVzKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgIClcbiAgICB9KTtcblxuXG4gICAgXG5tb2JpbGVOYXZpZ2F0aW9uc0FycmF5LmZvckVhY2goKG5hdmlnYXRpb24pID0+IHsgXG4gICAgbmF2aWdhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgIC8qIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAqL1xuICAgICAgICAgICBoYW5kbGVDb3JyZWN0TmF2KGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCwgXCJtb2JpbGVcIik7XG4gICAgICAgICAgIHByb2plY3RTZWN0aW9uLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgIG1hbmFnZXIuaGFuZGxlR2V0UHJvamVjdHNCeUNhdGVnb3JpZXMoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICAgKVxuICAgIH0pO1xuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBhZGQgbmV3IHByb2plY3QgYnV0dG9uICAgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zZWN0aW9uXCIpO1xuY29uc3QgZWRpdEZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb25cIik7XG5jb25zdCB0YXNrRm9ybVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS1zZWN0aW9uXCIpO1xuY29uc3QgdGFza01vZGFsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbC1zZWN0aW9uXCIpO1xuY29uc3QgZWRpdFRhc2tGb3JtU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm0tc2VjdGlvblwiKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LWZvcm1cIik7XG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWZvcm1cIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm1cIik7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gdGFza01vZGFsU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50XCIpO1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5oYW5kbGVGaW5kVGFzayhwcm9qZWN0LCB0YXNrSWQpO1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZVJlbW92ZVRhc2socHJvamVjdCwgdGFzayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcImVkaXQtdGFza1wiKSB7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXJlbnRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBtYW5hZ2VyLmhhbmRsZUZpbmRUYXNrKHByb2plY3QsIHRhc2tJZCk7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdkaXYgPiBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSB0YXNrLnRhc2tOYW1lO1xuICAgICAgICBlZGl0VGFza0Zvcm1TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2RpdiA+IGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZSA9IHRhc2sudGFza0R1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbGlzZUVkaXRUYXNrQnV0dG9uID0gKCk9PiB7XG4gICAgICAgICAgICBoYW5kbGVFZGl0VGFza0J1dHRvbkNsaWNrKHByb2plY3QsIHRhc2spO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGlhbGlzZUVkaXRUYXNrQnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRUYXNrRm9ybVNlY3Rpb24ucXVlcnlTZWxlY3RvcihcImRpdiA+IGZvcm0gYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0aWFsaXNlRWRpdFRhc2tCdXR0b24pO1xuICAgIH1cblxufSlcblxuZnVuY3Rpb24gaGFuZGxlRWRpdFRhc2tCdXR0b25DbGljayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWU7XG5cblxuICAgIGlmICh0YXNrSW5wdXROYW1lICYmIHRhc2tEdWVEYXRlKSB7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlRWRpdFRhc2socHJvamVjdCwgdGFzaywgdGFza0lucHV0TmFtZSwgdGFza0R1ZURhdGUpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIkFsbCBUYXNrIElucHV0IEZpZWxkIE11c3QgQmUgRmlsbGVkXCIpO1xuICAgIH1cblxuICAgIGVkaXRUYXNrRm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xufVxuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBmb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbilcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGZvcm0gbW9kYWxcblxuXG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2RhbFwiKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGZvcm1Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY3JlYXRlUHJvamVjdEZvcm0ucmVzZXQoKVxufSlcblxuY29uc3QgY2xvc2VFZGl0UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0LXByb2plY3QtbW9kYWxcIik7XG5jbG9zZUVkaXRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGVkaXRGb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVkaXRGb3JtLnJlc2V0KCk7XG59KVxuXG5jb25zdCBjbG9zZVRhc2tGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXRhc2stZm9ybS1tb2RhbFwiKTtcbmNsb3NlVGFza0Zvcm1Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xufSlcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXRhc2stbW9kYWxcIik7XG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza01vZGFsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza01vZGFsU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XG59KVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl0nKTtcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJJRFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJUaXRsZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJEZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgIC8vY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiRGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG5cbiAgICBjb25zdCBjaGVja0lkID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChpZCk7XG4gICAgXG4gICAgaWYgKGNoZWNrSWQpIHtcbiAgICAgICAgYWxlcnQoXCJJRCBhbHJlYWR5IGV4aXN0cyEgUGljayBhIG5ldyBvbmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSUQgZXhpc3RzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChpZCAmJiB0aXRsZSkge1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZU5ld1Byb2plY3RDcmVhdGlvbihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWxlY3QpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKG1hbmFnZXIuaGFuZGxlR2V0QWxsUHJvamVjdHMoKSlcbiAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgZm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiU2VjdGlvbnMgTWFya2VkIHdpdGggQXN0ZXJpc2sgQ2FuJ3QgYmUgRW1wdHlcIik7XG4gICAgfVxufSlcblxuLy8gZXZlbnQgbGlzdGVuZXIgdG8gcHJvamVjdCBzZWN0aW9uXG5cbnByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT4ge1xuXG4gICAgLy9pZiB0aGUgZXZlbnQgdGFyZ2V0IGlzIHRoZSBhZGQgZnVuY3Rpb24sIGdldCB0aGUgcHJvamVjdCBJRCBpdCBiZWxvbmdzIHRvXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJhZGRcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcblxuICAgICAgICB0YXNrRm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtID4gLmJ1dHRvbi1jb250YWluZXIgPiBidXR0b246Zmlyc3Qtb2YtdHlwZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluaXRhbGlzZWhhbmRsZVRhc2tCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgaGFuZGxlQWRkVGFza0J1dHRvbkNsaWNrKHByb2plY3QpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGFsaXNlaGFuZGxlVGFza0J1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0YWxpc2VoYW5kbGVUYXNrQnV0dG9uKTtcblxuICAgICAgICAvL3NldCBwcm9jZXNzIGZvciBhZGRpbmcgdGFza3MgbWFuYWdlci5oYW5kbGVBZGRUYXNrKGlkLCApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlUHJvamVjdFJlbW92YWwocHJvamVjdCwgcHJvamVjdElkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzVUkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNVSUNoaWxkcmVuID0gcHJvamVjdERldGFpbHNVSS5jaGlsZHJlbjtcblxuICAgICAgICBlZGl0Rm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb24gI2VkaXQtSURcIik7XG4gICAgICAgIGVkaXRJbnB1dElkLnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0SW5wdXRJZC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LVRpdGxlXCIpO1xuICAgICAgICBlZGl0SW5wdXRUaXRsZS52YWx1ZSA9IHByb2plY3REZXRhaWxzVUlDaGlsZHJlblsxXS50ZXh0Q29udGVudDtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb24gI2VkaXQtRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGVkaXRJbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzJdLnRleHRDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGVkaXRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LUNhdGVnb3J5XCIpO1xuICAgICAgICBlZGl0U2VsZWN0LnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzNdLnRleHRDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm0tc2VjdGlvbiBidXR0b25cIik7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFZGl0UHJvamVjdEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwidmlld1wiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICB0YXNrTW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVHZXRUYXNrcyhwcm9qZWN0KTsgICAgIFxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhwcm9qZWN0KSB7XG5cbiAgICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzay1mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWU7XG5cblxuICAgIGlmICh0YXNrSW5wdXROYW1lICYmIHRhc2tEdWVEYXRlKSB7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlQWRkVGFzayhwcm9qZWN0LCB0YXNrSW5wdXROYW1lLCB0YXNrRHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiQWxsIFRhc2sgSW5wdXQgRmllbGQgTXVzdCBCZSBGaWxsZWRcIik7XG4gICAgfVxuXG4gICAgdGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdEJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJlZGl0LUlEXCJdJykudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImVkaXQtVGl0bGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZWRpdC1EZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgIC8vY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiRGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtpZD1cImVkaXQtQ2F0ZWdvcnlcIl0nKS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KGlkKTtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVQcm9qZWN0RWRpdChwcm9qZWN0LCBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWxlY3QpO1xuXG4gICAgICAgIGVkaXRGb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWZvcm1cIik7XG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlNlY3Rpb25zIE1hcmtlZCB3aXRoIEFzdGVyaXNrIENhbid0IGJlIEVtcHR5XCIpO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb3JyZWN0TmF2KHNlY3Rpb24sIGRldmljZT1cIm5vdG1vYmlsZVwiKSB7XG4gICAgLy8gZ2V0IG5hbWUgb2YgY3VycmVudCBzZWN0aW9uXG4gICAgLy9jb25zdCBjdXJyU2VjdGlvbiA9IG1hbmFnZXIuZ2V0Q3VycmVudFNlY3Rpb24oKTsgXG4gICAgbGV0IGN1cnJOYXZpZ2F0aW9uO1xuXG4gICAgaWYgKGRldmljZSA9PT0gXCJtb2JpbGVcIikge1xuICAgICAgICBjdXJyTmF2aWdhdGlvbiA9IG1vYmlsZU5hdmlnYXRpb25zQXJyYXkuZmluZCgobmF2aWdhdGlvbik9PiBuYXZpZ2F0aW9uLnRleHRDb250ZW50ID09PSBzZWN0aW9uKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGN1cnJOYXZpZ2F0aW9uID0gbmF2aWdhdGlvbnNBcnJheS5maW5kKChuYXZpZ2F0aW9uKT0+IG5hdmlnYXRpb24udGV4dENvbnRlbnQgPT09IHNlY3Rpb24pO1xuICAgIH1cbiAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zZWN0aW9uXCIpO1xuICAgIGlmIChwcmV2U2VjdGlvbikge1xuICAgICAgICBwcmV2U2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnQtc2VjdGlvblwiKTtcbiAgICB9XG4gICAgY3Vyck5hdmlnYXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50LXNlY3Rpb25cIik7XG4gICAgbWFuYWdlci5zZXRDdXJyZW50U2VjdGlvbihjdXJyTmF2aWdhdGlvbi50ZXh0Q29udGVudCk7XG59XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA1MDApIHtcbiAgICBoYW5kbGVDb3JyZWN0TmF2KFwiQUxMXCIsIFwibW9iaWxlXCIpXG59XG5lbHNlIHtcbiAgICBoYW5kbGVDb3JyZWN0TmF2KFwiQUxMXCIpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9