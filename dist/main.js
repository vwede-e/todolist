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
___CSS_LOADER_EXPORT___.push([module.id, `header {
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
    background-color: darkblue;
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
    background: beige;
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
    background-color: #351E5F;
    font-size: 0.9rem;
    color: #fff;
    padding: 5px 8px;
    font-weight: 600;
    align-items: center;
    cursor: pointer;
    width: clamp(250px, 25vw, 250px);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["header {\n    background-color: #8449BA;\n    border-bottom: 1px solid #fff;\n}\n\n.nav-logo-container {\n    padding: 20px 30px;\n    display: flex;\n    align-items: center;\n    gap: 25px;\n    justify-content: space-between;\n}\n\nnav {\n    flex-grow: 1;\n}\n\n.hamburger-container {\n    display: none;\n}\n\n#current-section {\n    background-color: darkblue;\n}\n\n.logo-container {\n    flex-basis: 130px;\n    flex-shrink: 0;\n    color: white;\n    font-weight: bolder;\n    font-size: 1.2rem;\n}\n\n\n.menu-list {\n    list-style-type: none;\n    display: flex;\n    gap: 10px;\n    justify-content: end;\n}\n\n.menu-list li {\n    color: #fff;\n    font-weight: 600;\n    padding: 10px;\n    flex-basis: 100px;\n    text-align: center;    \n}\n\n.mobile-menu-container {\n    background: #8449BA;\n    display: block;\n}\n\n.mobile-menu-container li {\n    border: 1px solid white;\n}\n\n.mobile-menu-container li:last-of-type {\n    border-bottom: 2px solid white\n}\n\n.menu-list li:hover {\n    background-color: #351E5F;\n}\n\nmain {\n    flex-grow: 1;\n    background: beige;\n}\n\nmain > .search-section {\n    display: flex;\n    padding: 20px 30px;\n    justify-content: center;\n    gap: 20px;\n    align-items: center;\n}\n\n\n.search {\n    font-size: 0.8rem;\n    padding: 5px;\n    font-weight: 600;\n    height: 35px;\n    width: clamp(150px, 25vw, 250px);\n}\n\n.search:focus {\n    border: none;\n}\n\n.add-container {\n    display: flex;\n    gap: 7px;\n    background-color: #351E5F;\n    font-size: 0.9rem;\n    color: #fff;\n    padding: 5px 8px;\n    font-weight: 600;\n    align-items: center;\n    cursor: pointer;\n    width: clamp(250px, 25vw, 250px);\n    justify-content: center;\n}\n\n.add-container > span {\n    font-weight: bold;\n    font-size: 1.3rem;\n    color: blueviolet;\n}\n\n.form-section, .edit-form-section, .task-form-section, .task-modal-section, .edit-task-form-section {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    background-color: rgb(0,0,0,0.9);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    display: none;\n}\n\n.form-container,.edit-form-container, .task-form-container, .task-modal-container, .edit-task-form-container {\n    width: max(30%, 300px);\n    background-color: #8449BA;\n    padding: 30px;\n}\n\nform input, select {\n    font-size: 1rem;\n    border-radius: 3px;\n    width: 100%;\n    padding: 5px;\n    margin-bottom: 8px;\n}\n\nform > div {\n    text-align: center;\n    font-size: 1.3rem;\n}\n\nform {\n    color: #fff;\n    font-weight: 600;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    background-color: #E6E6E6;\n}\n\nlabel{\n    display: block;\n    margin-top: 5px;\n    margin-bottom: 2px;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    gap: 30px;\n    margin-top: 5px;\n}\n\n.button-container  > * {\n    width: 70px;\n    height: 30px;\n    padding: 5px;\n    border-radius: 4px;\n    box-shadow: 0px 0px 10px #000;\n}\n\n.close-modal, .close-task-form-modal, .close-edit-project-modal, .close-task-modal, .close-edit-task-form-modal {\n    cursor: pointer;\n}\n\n.form-title {\n    margin-bottom: 15px;\n}\n\n.close-form-modal-container {\n    display: flex;\n    justify-content: end;\n}\n\n.project-section {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n    gap: 30px;\n    padding: 20px 30px;\n}\n\n.project-container {\n    display: flex;\n    box-shadow: 1px 1px 5px black;\n    background-color: #fff;\n    border-radius: 6px;\n    padding: 35px 10px;\n    gap: 20px;\n    align-items: center;\n}\n\n.project-functions {\n    flex-basis: 30px;\n    flex-shrink: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    border-right: 2px solid rgb(0,0,0,0.5);\n}\n\n.project-details {\n    display: flex;\n    flex-direction: column;\n    gap: 25px;\n    flex-grow: 1;\n    text-align: center;\n}\n\n.project-details > .title {\n    font-size: 1.8rem;\n    font-weight: bold;\n}\n\n.project-details > .id {\n    font-size: 1.5rem;\n    color: red;\n}\n\n.project-details > div:last-of-type {\n    font-size: 1.5rem;\n    font-weight: bold;\n}\n\n\n.task-title {\n    text-align: center;\n    font-weight: bolder;\n    font-size: 1.5rem;\n    margin: 20px 0;\n}\n\n.task-modal-container {\n    background-color: wheat;\n}\n\n.tasks {\n    text-align: center;\n    height: 350px;\n    overflow: auto;\n}\n\n.tasks img {\n    height: 19px;\n    width: 19px;\n}\n\n.task-container {\n    display: grid;\n    grid-template-columns: 1fr 1fr 30px 30px;\n    column-gap: 10px;\n    margin-top: 10px;\n    text-align: start;\n    align-items: center;\n}\n\n@media only screen and (max-width: 500px) {\n    nav {\n        display: none;\n    }\n\n    .hamburger-container {\n        display: block;\n    }\n\n    .nav-logo-container {\n        justify-content: space-between;\n    }\n\n}\n"],"sourceRoot":""}]);
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
const navigationsNodeList = document.querySelectorAll(".menu-list > li");
const navigationsArray = [...navigationsNodeList];


//event listener for navigations

navigationsArray.forEach((navigation) => { 
    navigation.addEventListener("click", (event) => {
        handleCorrectNav(event.target.textContent);
        projectSection.innerHTML = "";
        _manager__WEBPACK_IMPORTED_MODULE_4__["default"].handleGetProjectsByCategories(event.target.textContent.toLowerCase());
        if (event.target.parentElement.classList.contains("mobile-menu-container")) {
            event.target.parentElement.parentElement.style.display = "none";
        }
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

function handleCorrectNav(section) {
    // get name of current section
    const currSection = _manager__WEBPACK_IMPORTED_MODULE_4__["default"].getCurrentSection(); 

    const currNavigation = navigationsArray.find((navigation)=> navigation.textContent === section);
    const prevSection = document.getElementById("current-section");
    if (prevSection) {
        prevSection.removeAttribute("id", "current-section");
    }
    currNavigation.setAttribute("id", "current-section");
    _manager__WEBPACK_IMPORTED_MODULE_4__["default"].setCurrentSection(currNavigation.textContent);
}


handleCorrectNav("ALL");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEs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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNic0I7O0FBRXRCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBLGlFQUFlLGNBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ3hFUDs7QUFFdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDekhSOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDcEVMOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQ1JDOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJ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RUEsd0JBQXdCLGdEQUFPO0FBQy9CLFFBQVEsZ0RBQU87O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixnREFBTzs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvY3JlYXRlVGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0UHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9lZGl0VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21wb25lbnRzL21vYmlsZU1lbnVDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tcG9uZW50cy90YXNrTW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZG9tVXBkYXRlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdE9iamVjdENyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdFN0b3JlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg0NDlCQTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLm5hdi1sb2dvLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDI1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5uYXYge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmhhbWJ1cmdlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjdXJyZW50LXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xufVxuXG4ubG9nby1jb250YWluZXIge1xuICAgIGZsZXgtYmFzaXM6IDEzMHB4O1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5cbi5tZW51LWxpc3Qge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLm1lbnUtbGlzdCBsaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZsZXgtYmFzaXM6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG59XG5cbi5tb2JpbGUtbWVudS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6ICM4NDQ5QkE7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5tb2JpbGUtbWVudS1jb250YWluZXIgbGkge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIGxpOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlXG59XG5cbi5tZW51LWxpc3QgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTFFNUY7XG59XG5cbm1haW4ge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcbn1cblxubWFpbiA+IC5zZWFyY2gtc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuLnNlYXJjaCB7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiBjbGFtcCgxNTBweCwgMjV2dywgMjUwcHgpO1xufVxuXG4uc2VhcmNoOmZvY3VzIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5hZGQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTFFNUY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHdpZHRoOiBjbGFtcCgyNTBweCwgMjV2dywgMjUwcHgpO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWNvbnRhaW5lciA+IHNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiBibHVldmlvbGV0O1xufVxuXG4uZm9ybS1zZWN0aW9uLCAuZWRpdC1mb3JtLXNlY3Rpb24sIC50YXNrLWZvcm0tc2VjdGlvbiwgLnRhc2stbW9kYWwtc2VjdGlvbiwgLmVkaXQtdGFzay1mb3JtLXNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuOSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLWNvbnRhaW5lciwuZWRpdC1mb3JtLWNvbnRhaW5lciwgLnRhc2stZm9ybS1jb250YWluZXIsIC50YXNrLW1vZGFsLWNvbnRhaW5lciwgLmVkaXQtdGFzay1mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IG1heCgzMCUsIDMwMHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ0OUJBO1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbmZvcm0gaW5wdXQsIHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5mb3JtID4gZGl2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmZvcm0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmZvb3RlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RTZFNjtcbn1cblxubGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJ1dHRvbi1jb250YWluZXIgID4gKiB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4ICMwMDA7XG59XG5cbi5jbG9zZS1tb2RhbCwgLmNsb3NlLXRhc2stZm9ybS1tb2RhbCwgLmNsb3NlLWVkaXQtcHJvamVjdC1tb2RhbCwgLmNsb3NlLXRhc2stbW9kYWwsIC5jbG9zZS1lZGl0LXRhc2stZm9ybS1tb2RhbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4ucHJvamVjdC1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAgICBnYXA6IDMwcHg7XG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xufVxuXG4ucHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogMzVweCAxMHB4O1xuICAgIGdhcDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC1mdW5jdGlvbnMge1xuICAgIGZsZXgtYmFzaXM6IDMwcHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2IoMCwwLDAsMC41KTtcbn1cblxuLnByb2plY3QtZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjVweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvamVjdC1kZXRhaWxzID4gLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IC5pZCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnByb2plY3QtZGV0YWlscyA+IGRpdjpsYXN0LW9mLXR5cGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi50YXNrLXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuLnRhc2stbW9kYWwtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbn1cblxuLnRhc2tzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRhc2tzIGltZyB7XG4gICAgaGVpZ2h0OiAxOXB4O1xuICAgIHdpZHRoOiAxOXB4O1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDMwcHggMzBweDtcbiAgICBjb2x1bW4tZ2FwOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgIG5hdiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmhhbWJ1cmdlci1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubmF2LWxvZ28tY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixTQUFTO0lBQ1Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYix3Q0FBd0M7SUFDeEMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLDhCQUE4QjtJQUNsQzs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ0OUJBO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuXFxuLm5hdi1sb2dvLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbm5hdiB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmhhbWJ1cmdlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY3VycmVudC1zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIGZsZXgtYmFzaXM6IDEzMHB4O1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuXFxuLm1lbnUtbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLm1lbnUtbGlzdCBsaSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBmbGV4LWJhc2lzOiAxMDBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcXG59XFxuXFxuLm1vYmlsZS1tZW51LWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICM4NDQ5QkE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9iaWxlLW1lbnUtY29udGFpbmVyIGxpIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5tb2JpbGUtbWVudS1jb250YWluZXIgbGk6bGFzdC1vZi10eXBlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlXFxufVxcblxcbi5tZW51LWxpc3QgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUxRTVGO1xcbn1cXG5cXG5tYWluIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiBiZWlnZTtcXG59XFxuXFxubWFpbiA+IC5zZWFyY2gtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuLnNlYXJjaCB7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IGNsYW1wKDE1MHB4LCAyNXZ3LCAyNTBweCk7XFxufVxcblxcbi5zZWFyY2g6Zm9jdXMge1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA3cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTFFNUY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogNXB4IDhweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogY2xhbXAoMjUwcHgsIDI1dncsIDI1MHB4KTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGQtY29udGFpbmVyID4gc3BhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY29sb3I6IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5mb3JtLXNlY3Rpb24sIC5lZGl0LWZvcm0tc2VjdGlvbiwgLnRhc2stZm9ybS1zZWN0aW9uLCAudGFzay1tb2RhbC1zZWN0aW9uLCAuZWRpdC10YXNrLWZvcm0tc2VjdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwLDAuOSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIsLmVkaXQtZm9ybS1jb250YWluZXIsIC50YXNrLWZvcm0tY29udGFpbmVyLCAudGFzay1tb2RhbC1jb250YWluZXIsIC5lZGl0LXRhc2stZm9ybS1jb250YWluZXIge1xcbiAgICB3aWR0aDogbWF4KDMwJSwgMzAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODQ0OUJBO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG5mb3JtIGlucHV0LCBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG5mb3JtID4gZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkU2RTY7XFxufVxcblxcbmxhYmVse1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMzBweDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4uYnV0dG9uLWNvbnRhaW5lciAgPiAqIHtcXG4gICAgd2lkdGg6IDcwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAjMDAwO1xcbn1cXG5cXG4uY2xvc2UtbW9kYWwsIC5jbG9zZS10YXNrLWZvcm0tbW9kYWwsIC5jbG9zZS1lZGl0LXByb2plY3QtbW9kYWwsIC5jbG9zZS10YXNrLW1vZGFsLCAuY2xvc2UtZWRpdC10YXNrLWZvcm0tbW9kYWwge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb3JtLXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLmNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMzBweDtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAzNXB4IDEwcHg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtZnVuY3Rpb25zIHtcXG4gICAgZmxleC1iYXNpczogMzBweDtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiKDAsMCwwLDAuNSk7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDI1cHg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gLnRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdC1kZXRhaWxzID4gLmlkIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5wcm9qZWN0LWRldGFpbHMgPiBkaXY6bGFzdC1vZi10eXBlIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5cXG4udGFzay10aXRsZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4udGFzay1tb2RhbC1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcXG59XFxuXFxuLnRhc2tzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnRhc2tzIGltZyB7XFxuICAgIGhlaWdodDogMTlweDtcXG4gICAgd2lkdGg6IDE5cHg7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAzMHB4IDMwcHg7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAgIG5hdiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgIC5oYW1idXJnZXItY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuXFxuICAgIC5uYXYtbG9nby1jb250YWluZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFza0Zvcm0oKSB7XG5cbiAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGZvcm1TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm0tc2VjdGlvblwiKVxuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXRhc2stZm9ybVwiKTtcblxuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VGb3JtTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtdGFzay1mb3JtLW1vZGFsXCIpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsKTtcbiAgICBjbG9zZUZvcm1Nb2RhbENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZm9ybS1tb2RhbC1jb250YWluZXJcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyKTtcblxuICAgIFxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVGFza1wiO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgTmFtZSpcIjtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tOYW1lXCIpO1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIklEXCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBEdWUgRGF0ZSpcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ3JlYXRlXCI7XG4gICAgY3JlYXRlQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cbiAgICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVzZXRCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJlc2V0XCIpO1xuICAgIHJlc2V0QnV0dG9uLnRleHRDb250ZW50ID0gXCJSZXNldFwiO1xuXG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gZm9ybVNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVRhc2tGb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBlZGl0UHJvamVjdEZvcm0oKSB7XG5cbiAgICBjb25zdCBmb3JtU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIGZvcm1TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvcm0tc2VjdGlvblwiKTtcbiAgICBcbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlZGl0LWZvcm0tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZChcImVkaXQtcHJvamVjdC1mb3JtXCIpO1xuXG4gICAgY29uc3QgY2xvc2VGb3JtTW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjbG9zZUZvcm1Nb2RhbC5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIlxuICAgIGNsb3NlRm9ybU1vZGFsLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1lZGl0LXByb2plY3QtbW9kYWxcIik7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWwpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVG8tRG9cIjtcbiAgICBmb3JtVGl0bGUuY2xhc3NMaXN0LmFkZChcImZvcm0tdGl0bGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG5cbiAgICBjb25zdCBpZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlkTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IElEKlwiO1xuICAgIGlkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdElEXCIpO1xuICAgIGNvbnN0IGlkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtSURcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIDApO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlkSW5wdXQpO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdCBUaXRsZSpcIjtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVkaXRUaXRsZVwiKTtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LVRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVJbnB1dClcblxuXG4gICAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0IERlc2NyaXB0aW9uXCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlZGl0RGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtRGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcblxuICAgIFxuICAgIC8qXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUGljayBEdWUgRGF0ZSpcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpOyAqL1xuXG5cbiAgICBjb25zdCBzZWxlY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBzZWxlY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IENhdGVnb3J5XCI7XG4gICAgc2VsZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZWRpdENhdGVnb3J5XCIpO1xuICAgIGNvbnN0IHNlbGVjdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBzZWxlY3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtQ2F0ZWdvcnlcIik7XG4gICAgXG4gICAgY29uc3Qgd29ya09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgd29ya09wdGlvbi52YWx1ZSA9IFwiV29ya1wiO1xuICAgIHdvcmtPcHRpb24udGV4dENvbnRlbnQgPSBcIldvcmtcIjtcblxuICAgIGNvbnN0IGd5bU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgZ3ltT3B0aW9uLnZhbHVlID0gXCJHeW1cIjtcbiAgICBneW1PcHRpb24udGV4dENvbnRlbnQgPSBcIkd5bVwiO1xuXG4gICAgY29uc3Qgc2Nob29sT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBzY2hvb2xPcHRpb24udmFsdWUgPSBcIlNjaG9vbFwiO1xuICAgIHNjaG9vbE9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2Nob29sXCI7XG5cbiAgICBjb25zdCBjaG9yZU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgY2hvcmVPcHRpb24udmFsdWUgPSBcIkNob3Jlc1wiO1xuICAgIGNob3JlT3B0aW9uLnRleHRDb250ZW50ID0gXCJDaG9yZXNcIjtcblxuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKHdvcmtPcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGd5bU9wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoc2Nob29sT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChjaG9yZU9wdGlvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNlbGVjdElucHV0KTtcblxuICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG5cblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm1TZWN0aW9uLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gZm9ybVNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRQcm9qZWN0Rm9ybTsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gRWRpdFRhc2tGb3JtKCkge1xuXG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBmb3JtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrLWZvcm0tc2VjdGlvblwiKVxuICAgIFxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImVkaXQtdGFzay1mb3JtLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2stZm9ybVwiKTtcblxuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VGb3JtTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZWRpdC10YXNrLWZvcm0tbW9kYWxcIik7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWwpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgdGFza05hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2sgTmFtZSpcIjtcbiAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRhc2tOYW1lXCIpO1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIklEXCIpO1xuICAgIHRhc2tOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGFza05hbWVJbnB1dCk7XG5cblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIlNlbGVjdCBEdWUgRGF0ZSpcIjtcbiAgICBkYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRGF0ZVwiKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRGF0ZVwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG5cbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG5cbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIGZvcm1TZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0VGFza0Zvcm07IiwiaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPSBcIlRPLURPLUxJU1QgQlkgVldFREUgRVNJTlwiXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBGb3JtKCkge1xuXG4gICAgY29uc3QgZm9ybVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBmb3JtU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1zZWN0aW9uXCIpXG4gICAgXG4gICAgY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9ybS1jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3QtZm9ybVwiKTtcblxuICAgIGNvbnN0IGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjbG9zZUZvcm1Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VGb3JtTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZUZvcm1Nb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtbW9kYWxcIik7XG4gICAgY2xvc2VGb3JtTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWwpO1xuICAgIGNsb3NlRm9ybU1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1mb3JtLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtTW9kYWxDb250YWluZXIpO1xuXG4gICAgXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUby1Eb1wiO1xuICAgIGZvcm1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiZm9ybS10aXRsZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcblxuICAgIGNvbnN0IGlkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgaWRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgSUQqXCI7XG4gICAgaWRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJJRFwiKTtcbiAgICBjb25zdCBpZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlkSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJJRFwiKTtcbiAgICBpZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgMCk7XG4gICAgaWRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIjI1XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpZExhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGlkSW5wdXQpO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdCBUaXRsZSpcIjtcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIlRpdGxlXCIpO1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlRpdGxlXCIpO1xuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkNyZWF0ZSBhIHRvLWRvIGxpc3RcIilcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KVxuXG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3QgRGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgXG4gICAgLypcbiAgICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaWNrIER1ZSBEYXRlKlwiO1xuICAgIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJEYXRlXCIpO1xuICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJEYXRlXCIpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7ICovXG5cblxuICAgIGNvbnN0IHNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIHNlbGVjdExhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgQ2F0ZWdvcnlcIjtcbiAgICBzZWxlY3RMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJDYXRlZ29yeVwiKTtcbiAgICBjb25zdCBzZWxlY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgc2VsZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJDYXRlZ29yeVwiKTtcbiAgICBcbiAgICBjb25zdCB3b3JrT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICB3b3JrT3B0aW9uLnZhbHVlID0gXCJXb3JrXCI7XG4gICAgd29ya09wdGlvbi50ZXh0Q29udGVudCA9IFwiV29ya1wiO1xuXG4gICAgY29uc3QgZ3ltT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBneW1PcHRpb24udmFsdWUgPSBcIkd5bVwiO1xuICAgIGd5bU9wdGlvbi50ZXh0Q29udGVudCA9IFwiR3ltXCI7XG5cbiAgICBjb25zdCBzY2hvb2xPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIHNjaG9vbE9wdGlvbi52YWx1ZSA9IFwiU2Nob29sXCI7XG4gICAgc2Nob29sT3B0aW9uLnRleHRDb250ZW50ID0gXCJTY2hvb2xcIjtcblxuICAgIGNvbnN0IGNob3JlT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjaG9yZU9wdGlvbi52YWx1ZSA9IFwiQ2hvcmVzXCI7XG4gICAgY2hvcmVPcHRpb24udGV4dENvbnRlbnQgPSBcIkNob3Jlc1wiO1xuXG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQod29ya09wdGlvbik7XG4gICAgc2VsZWN0SW5wdXQuYXBwZW5kQ2hpbGQoZ3ltT3B0aW9uKTtcbiAgICBzZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChzY2hvb2xPcHRpb24pO1xuICAgIHNlbGVjdElucHV0LmFwcGVuZENoaWxkKGNob3JlT3B0aW9uKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0TGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc2VsZWN0SW5wdXQpO1xuXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZVwiO1xuICAgIGNyZWF0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuXG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJlc2V0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyZXNldFwiKTtcbiAgICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiUmVzZXRcIjtcblxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24pO1xuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXNldEJ1dHRvbik7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChmb3JtQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIGZvcm1TZWN0aW9uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtOyIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4uL2ltYWdlcy9tZW51LnN2Z1wiXG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgICAvL2hlYWRlciBjb250YWluZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgbmF2TG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmF2TG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibmF2LWxvZ28tY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIik7XG4gICAgbG9nb0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiVG8tRG8gTGlzdFwiO1xuICAgIC8qY29uc3QgbG9nb0ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb0ltYWdlLnNyYyA9IFwiLi4vaW1hZ2VzL1wiO1xuICAgIGxvZ29JbWFnZS5jbGFzc0xpc3QuYWRkKFwibG9nby1pbWFnZVwiKTtcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSk7ICovXG5cbiAgICBuYXZMb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0XCIpO1xuXG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGFsbC50ZXh0Q29udGVudCA9IFwiQUxMXCI7XG5cbiAgICBjb25zdCB3b3JrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHdvcmsudGV4dENvbnRlbnQgPSBcIldPUktcIjtcblxuICAgIGNvbnN0IGd5bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBneW0udGV4dENvbnRlbnQgPSBcIkdZTVwiO1xuXG4gICAgY29uc3Qgc2Nob29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHNjaG9vbC50ZXh0Q29udGVudCA9IFwiU0NIT09MXCI7XG5cbiAgICBjb25zdCBjaG9yZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY2hvcmVzLnRleHRDb250ZW50ID0gXCJDSE9SRVNcIlxuXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoYWxsKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZCh3b3JrKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChneW0pO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKHNjaG9vbCk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQoY2hvcmVzKTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbiAgICBjb25zdCBtb2JpTGVNZW51SGFtYnVyZ2VyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2JpTGVNZW51SGFtYnVyZ2VyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXItY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVIYW1idXJnZXIgPSBuZXcgSW1hZ2UoKTtcbiAgICBtb2JpbGVNZW51SGFtYnVyZ2VyLnNyYyA9IG1lbnU7XG4gICAgbW9iaWxlTWVudUhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKFwibW9iaWxlLW1lbnUtaGFtYnVyZ2VyXCIpXG5cbiAgICBtb2JpTGVNZW51SGFtYnVyZ2VyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVIYW1idXJnZXIpO1xuXG4gICAgbmF2TG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuYXYpO1xuXG4gICAgbmF2TG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChtb2JpTGVNZW51SGFtYnVyZ2VyQ29udGFpbmVyKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TG9nb0NvbnRhaW5lcik7XG5cblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG5cbiAgICBjb25zdCBzZWFyY2hTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZWFyY2hTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtc2VjdGlvblwiKTtcblxuICAgIC8vY29uc3Qgc2VhcmNoQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBhZGROZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgLy8gY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIC8vc2VhcmNoLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzZWFyY2hcIik7XG4gICAgLy9zZWFyY2guc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJTZWFyY2ggYnkgdGl0bGVcIik7XG4gICAvLyBzZWFyY2guY2xhc3NMaXN0LmFkZChcInNlYXJjaFwiKTtcbiAgIC8vIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG4gICAgY29uc3QgYWRkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhZGRDb250YWluZXIuaW5uZXJIVE1MID0gXCI8c3Bhbj4mcGx1czs8L3NwYW4+QWRkIE5ldyBQcm9qZWN0XCI7XG4gICAgYWRkTmV3UHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRDb250YWluZXIpO1xuICAgIGFkZE5ld1Byb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKVxuICAgIGFkZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWRkLWNvbnRhaW5lclwiKTtcblxuICAgLy8gc2VhcmNoU2VjdGlvbi5hcHBlbmRDaGlsZChzZWFyY2hDb250YWluZXIpO1xuICAgIHNlYXJjaFNlY3Rpb24uYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdENvbnRhaW5lcik7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHNlYXJjaFNlY3Rpb24pO1xuXG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1zZWN0aW9uXCIpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChwcm9qZWN0U2VjdGlvbik7XG4gICBcbiAgICByZXR1cm4gbWFpbjtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluXG4iLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gTW9iaWxlTWVudSgpIHtcblxuICAgIGNvbnN0IG1vYmlsZU1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgbW9iaWxlTWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LXNlY3Rpb25cIik7XG5cblxuICAgIGNvbnN0IG1vYmlsZU1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1saXN0XCIpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1vYmlsZS1tZW51LWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBhbGwudGV4dENvbnRlbnQgPSBcIkFMTFwiO1xuXG4gICAgY29uc3Qgd29yayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB3b3JrLnRleHRDb250ZW50ID0gXCJXT1JLXCI7XG5cbiAgICBjb25zdCBneW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZ3ltLnRleHRDb250ZW50ID0gXCJHWU1cIjtcblxuICAgIGNvbnN0IHNjaG9vbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBzY2hvb2wudGV4dENvbnRlbnQgPSBcIlNDSE9PTFwiO1xuXG4gICAgY29uc3QgY2hvcmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGNob3Jlcy50ZXh0Q29udGVudCA9IFwiQ0hPUkVTXCI7XG5cbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGFsbCk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3JrKTtcbiAgICBtb2JpbGVNZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGd5bSk7XG4gICAgbW9iaWxlTWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChzY2hvb2wpO1xuICAgIG1vYmlsZU1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hvcmVzKTtcblxuICAgIG1vYmlsZU1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1vYmlsZU1lbnVDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG1vYmlsZU1lbnVTZWN0aW9uXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vYmlsZU1lbnUiLCJpbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxuZnVuY3Rpb24gY3JlYXRlVGFza01vZGFsKCkge1xuXG4gICAgY29uc3QgdGFza01vZGFsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHRhc2tNb2RhbFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhc2stbW9kYWwtc2VjdGlvblwiKVxuICAgIFxuICAgIGNvbnN0IHRhc2tNb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza01vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLW1vZGFsLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHRhc2tNb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tNb2RhbENvbnRlbnQuY2xhc3NMaXN0LmFkZChcInRhc2stbW9kYWwtY29udGVudFwiKTtcblxuICAgIGNvbnN0IGNsb3NlVGFza01vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2xvc2VUYXNrTW9kYWwuaW5uZXJIVE1MID0gXCImdGltZXM7XCJcbiAgICBjbG9zZVRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtdGFzay1tb2RhbFwiKTtcbiAgICBjbG9zZVRhc2tNb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZVRhc2tNb2RhbCk7XG4gICAgY2xvc2VUYXNrTW9kYWxDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNsb3NlLWZvcm0tbW9kYWwtY29udGFpbmVyXCIpO1xuXG4gICAgdGFza01vZGFsQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZVRhc2tNb2RhbENvbnRhaW5lcik7XG5cbiAgICBcbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IFwiVGFza3NcIjtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIik7XG5cbiAgICB0YXNrTW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG5cblxuICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG5cbiAgICB0YXNrTW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgICBcbiAgICB0YXNrTW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza01vZGFsQ29udGVudCk7XG4gICAgdGFza01vZGFsU2VjdGlvbi5hcHBlbmRDaGlsZCh0YXNrTW9kYWxDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIHRhc2tNb2RhbFNlY3Rpb25cbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVGFza01vZGFsOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcbmltcG9ydCBhZGQgZnJvbSBcIi4vaW1hZ2VzL2FkZC5zdmdcIjtcbmltcG9ydCBkZWwgZnJvbSBcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCB2aWV3IGZyb20gXCIuL2ltYWdlcy92aWV3LnN2Z1wiO1xuaW1wb3J0IGVkaXQgZnJvbSBcIi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5cbmNvbnN0IGRvbSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0VUkgPSAocHJvamVjdE9iamVjdCkgPT4ge1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3Qtc2VjdGlvblwiKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEZ1bmN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZnVuY3Rpb25zXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgZWRpdEltYWdlID0gbmV3IEltYWdlKClcbiAgICAgICAgZWRpdEltYWdlLnNyYyA9IGVkaXQ7XG4gICAgICAgIGVkaXRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXRcIilcbiAgICAgICAgcHJvamVjdEVkaXQuYXBwZW5kQ2hpbGQoZWRpdEltYWdlKTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0VmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHZpZXdJbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgICAgIHZpZXdJbWFnZS5zcmMgPSB2aWV3O1xuICAgICAgICBwcm9qZWN0Vmlldy5hcHBlbmRDaGlsZCh2aWV3SW1hZ2UpO1xuICAgICAgICB2aWV3SW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ2aWV3XCIpXG5cbiAgICAgICAgY29uc3QgcHJvamVjdEFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGFkZEltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGFkZEltYWdlLnNyYyA9IGFkZDtcbiAgICAgICAgcHJvamVjdEFkZC5hcHBlbmRDaGlsZChhZGRJbWFnZSk7XG4gICAgICAgIGFkZEltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJhZGRcIik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IGRlbDtcbiAgICAgICAgcHJvamVjdERlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSk7XG4gICAgICAgIGRlbGV0ZUltYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlXCIpXG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0RnVuY3Rpb25zLmFwcGVuZENoaWxkKHByb2plY3RFZGl0KTtcbiAgICAgICAgcHJvamVjdEZ1bmN0aW9ucy5hcHBlbmRDaGlsZChwcm9qZWN0Vmlldyk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdEFkZCk7XG4gICAgICAgIHByb2plY3RGdW5jdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdERlbGV0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0RGV0YWlscy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1kZXRhaWxzXCIpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgcHJvamVjdElkLnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5pZDtcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC50aXRsZTtcbiAgICAgICAgcHJvamVjdERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5kZXNjcmlwdGlvbjtcbiAgICAgICAgcHJvamVjdENhdGVnb3J5LnRleHRDb250ZW50ID0gcHJvamVjdE9iamVjdC5jYXRlZ29yeTtcblxuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgICAgICBwcm9qZWN0SWQuY2xhc3NMaXN0LmFkZChcImlkXCIpO1xuXG4gICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RJZCk7XG4gICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3REZXNjcmlwdGlvbik7XG4gICAgICAgIHByb2plY3REZXRhaWxzLmFwcGVuZENoaWxkKHByb2plY3RDYXRlZ29yeSk7XG5cbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RnVuY3Rpb25zKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0RGV0YWlscyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBwcm9qZWN0SWQudGV4dENvbnRlbnQpO1xuXG4gICAgICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RVSSA9IChwcm9qZWN0SWQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdltkYXRhLXZhbHVlPVwiJHtwcm9qZWN0SWR9XCJdYCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXNlY3Rpb25cIik7XG4gICAgICAgIHByb2plY3RTZWN0aW9uLnJlbW92ZUNoaWxkKHByb2plY3QpO1xuICAgIH1cblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0VUkgPSAocHJvamVjdElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS12YWx1ZT1cIiR7cHJvamVjdElkfVwiXWApO1xuICAgICAgICBjb25zdCBwcm9qZWN0RGV0YWlsVUkgPSBwcm9qZWN0Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxVSUNoaWxkcmVuID0gcHJvamVjdERldGFpbFVJLmNoaWxkcmVuO1xuICAgICAgICBwcm9qZWN0RGV0YWlsVUlDaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBwcm9qZWN0RGV0YWlsVUlDaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9qZWN0RGV0YWlsVUlDaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGNhdGVnb3J5OyAgICAgICAgXG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrT2JqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1jb250YWluZXJcIik7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnRhc2tOYW1lO1xuXG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnRhc2tEdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tFZGl0ID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRhc2tFZGl0LnNyYyA9IGVkaXQ7XG4gICAgICAgIHRhc2tFZGl0LmNsYXNzTGlzdC5hZGQoXCJlZGl0LXRhc2tcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0RlbGV0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICB0YXNrRGVsZXRlLnNyYyA9IGRlbDtcbiAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRhc2tcIik7XG5cbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRWRpdCk7XG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBgJHt0YXNrT2JqZWN0LmdldFVuaXF1ZUlkKCl9YClcbiAgICAgICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBhcmVudFwiLCBgJHt0YXNrT2JqZWN0LnRhc2tQYXJlbnR9YClcblxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJFbXB0eVRhc2tzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gICAgICAgIHRhc2tzLnRleHRDb250ZW50ID0gXCJOb3RoaW5nIHRvIHNlZSBoZXJlLi4uXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrVW5pcXVlSWQpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xuICAgICAgICBjb25zdCB0YXNrVG9EZWxldGUgPSB0YXNrcy5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS12YWx1ZSA9IFwiJHt0YXNrVW5pcXVlSWR9XCJdYCk7XG4gICAgICAgIHRhc2tzLnJlbW92ZUNoaWxkKHRhc2tUb0RlbGV0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdFRhc2sgPSAob2xkVW5pcXVlSWQsIG5ld1VuaXF1ZUlkLCB0YXNrTmFtZSwgZHVlRGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XG4gICAgICAgIGNvbnN0IHRhc2tUb0VkaXQgPSB0YXNrcy5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS12YWx1ZSA9IFwiJHtvbGRVbmlxdWVJZH1cIl1gKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhvbGRVbmlxdWVJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1VuaXF1ZUlkKTtcblxuICAgICAgICB0YXNrVG9FZGl0LnF1ZXJ5U2VsZWN0b3IoXCJkaXY6Zmlyc3Qtb2YtdHlwZVwiKS50ZXh0Q29udGVudCA9IHRhc2tOYW1lO1xuICAgICAgICB0YXNrVG9FZGl0LnF1ZXJ5U2VsZWN0b3IoXCJkaXY6bGFzdC1vZi10eXBlXCIpLnRleHRDb250ZW50ID0gZHVlRGF0ZTtcbiAgICAgICAgdGFza1RvRWRpdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIGAke25ld1VuaXF1ZUlkfWApO1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlUHJvamVjdFVJLCBkZWxldGVQcm9qZWN0VUksIGVkaXRQcm9qZWN0VUksIHJlbmRlclRhc2ssIHJlbmRlckVtcHR5VGFza3MsIGRlbGV0ZVRhc2ssIGVkaXRUYXNrfVxufSkgKClcblxuZXhwb3J0IGRlZmF1bHQgZG9tIiwiaW1wb3J0IHByb2plY3RTdG9yYWdlIGZyb20gXCIuL3Byb2plY3RTdG9yZVwiO1xuaW1wb3J0IGNyZWF0ZU5ld1Byb2plY3RPYmplY3QgZnJvbSBcIi4vcHJvamVjdE9iamVjdENyZWF0b3JcIjtcbmltcG9ydCBkb20gZnJvbSBcIi4vZG9tVXBkYXRlXCI7XG5cbmNvbnN0IG1hbmFnZXIgPSAoKCkgPT4ge1xuXG4gICAgbGV0IGN1cnJlbnRTZWN0aW9uID0gXCJBTExcIjtcblxuICAgIGNvbnN0IGhhbmRsZU5ld1Byb2plY3RDcmVhdGlvbiA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBvYmogPSBjcmVhdGVOZXdQcm9qZWN0T2JqZWN0KGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5KTtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2UuYWRkTmV3UHJvamVjdChvYmopO1xuICAgICAgICBkb20uY3JlYXRlUHJvamVjdFVJKG9iaik7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgICAvLyB1ZHBhdGUgRE9NIEFERElUSU9OXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUHJvamVjdFJlbW92YWwgPSAocHJvamVjdCwgcHJvamVjdElkKSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLnJlbW92ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGRvbS5kZWxldGVQcm9qZWN0VUkocHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2Uud3JpdGVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAvLyB1cGRhdGUgRE9NIFJFTU9WQUxcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcm9qZWN0RWRpdCA9IChwcm9qZWN0LCBwcm9qZWN0SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2UuZWRpdFByb2plY3QocHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSk7XG4gICAgICAgIGRvbS5lZGl0UHJvamVjdFVJKHByb2plY3RJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgLy8gdWRwZGF0ZSBET00gRURJVElOR1xuICAgIH1cblxuICAgIC8qY29uc3QgaGFuZGxlR2V0QWxsUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0U3RvcmFnZS5nZXRQcm9qZWN0cygpO1xuICAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICAgICAvLyBkb20gc3R1ZmYgZm9yIGRpc3BsYXkgcHJvamVjdHMgXG4gICAgfSAqL1xuXG4gICAgY29uc3QgaGFuZGxlR2V0UHJvamVjdHNCeUNhdGVnb3JpZXMgPSAoY2F0ZWdvcnkpID0+IHtcbiAgICAgICAgaWYgKGNhdGVnb3J5ID09IFwiYWxsXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5KVxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0U3RvcmFnZS5nZXRQcm9qZWN0cygpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICAgICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKGRvbS5jcmVhdGVQcm9qZWN0VUkpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdEJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoZG9tLmNyZWF0ZVByb2plY3RVSSlcbiAgICAgICAgfVxuICAgICAgICAvLyBkb20gc3R1ZmYgZm9yIHByb2pldHMgZGlzcGxheSBieSBjYXRlZ29yeVxuICAgIH1cbn1cblxuICAgIGNvbnN0IGhhbmRsZUFkZFRhc2sgPSAocHJvamVjdFRvRWRpdCwgdGFza05hbWUsIHRhc2tEdWVEYXRlKSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLmFkZFRhc2socHJvamVjdFRvRWRpdCwgdGFza05hbWUsIHRhc2tEdWVEYXRlKTtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2Uud3JpdGVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAvLyBkb20gc3R1ZmYgZm9yIHByb2plY3QgdGFza1xuICAgIH1cblxuICAgIGNvbnN0IGdldEN1cnJlbnRTZWN0aW9uID0gKCkgPT4gY3VycmVudFNlY3Rpb247XG5cbiAgICBjb25zdCBzZXRDdXJyZW50U2VjdGlvbiA9IChuZXdDdXJyZW50U2VjdGlvbikgPT4ge1xuICAgICAgICBjdXJyZW50U2VjdGlvbiA9IG5ld0N1cnJlbnRTZWN0aW9uXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRmluZFByb2plY3QgPSAoaWQpID0+IHByb2plY3RTdG9yYWdlLmZpbmRQcm9qZWN0QnlJZChpZCk7XG5cbiAgICBjb25zdCBoYW5kbGVGaW5kVGFzayA9IChwcm9qZWN0LCB0YXNrSWQpID0+IHByb2plY3RTdG9yYWdlLmZpbmRUYXNrQnlJZChwcm9qZWN0LCB0YXNrSWQpO1xuXG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9IChwcm9qZWN0LCB0YXNrKSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLnJlbW92ZVRhc2socHJvamVjdCwgdGFzayk7XG4gICAgICAgIGRvbS5kZWxldGVUYXNrKHRhc2suZ2V0VW5pcXVlSWQoKSk7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUdldFRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICAgICAgY29uc3QgdGFza3MgPSBwcm9qZWN0U3RvcmFnZS5nZXRUYXNrcyhwcm9qZWN0KTtcbiAgICAgICAgaWYgKHRhc2tzICYmIHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhc2tzLm1hcChkb20ucmVuZGVyVGFzayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVuZGVyRW1wdHlUYXNrcygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFZGl0VGFzayA9IChwcm9qZWN0LCB0YXNrLCB0YXNrTmFtZSwgZHVlRGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBvbGRVbmlxdWVJZCA9IHRhc2suZ2V0VW5pcXVlSWQoKTtcbiAgICAgICAgY29uc3QgbmV3VW5pcXVlSWQgPSBwcm9qZWN0U3RvcmFnZS5lZGl0VGFzayhwcm9qZWN0LCB0YXNrLCB0YXNrTmFtZSwgZHVlRGF0ZSk7XG4gICAgICAgIGRvbS5lZGl0VGFzayhvbGRVbmlxdWVJZCwgbmV3VW5pcXVlSWQsIHRhc2tOYW1lLCBkdWVEYXRlKTtcbiAgICAgICAgcHJvamVjdFN0b3JhZ2Uud3JpdGVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVdyaXRlVG9Mb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLndyaXRlVG9Mb2NhbFN0b3JhZ2UoKTtcblxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlYWRGcm9tTG9jYWxTdG9yYWdlID0oKSA9PiB7XG4gICAgICAgIHByb2plY3RTdG9yYWdlLnJlYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdFN0b3JhZ2UuZ2V0UHJvamVjdHMoKTtcbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHByb2plY3RzLm1hcChkb20uY3JlYXRlUHJvamVjdFVJKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGFuZGxlTmV3UHJvamVjdENyZWF0aW9uLFxuICAgICAgICBoYW5kbGVQcm9qZWN0UmVtb3ZhbCxcbiAgICAgICAgaGFuZGxlUHJvamVjdEVkaXQsXG4gICAgICAgIGhhbmRsZUdldFByb2plY3RzQnlDYXRlZ29yaWVzLFxuICAgICAgICBnZXRDdXJyZW50U2VjdGlvbixcbiAgICAgICAgc2V0Q3VycmVudFNlY3Rpb24sXG4gICAgICAgIGhhbmRsZUFkZFRhc2ssXG4gICAgICAgIGhhbmRsZUZpbmRQcm9qZWN0LFxuICAgICAgICBoYW5kbGVHZXRUYXNrcyxcbiAgICAgICAgaGFuZGxlRmluZFRhc2ssXG4gICAgICAgIGhhbmRsZVJlbW92ZVRhc2ssXG4gICAgICAgIGhhbmRsZUVkaXRUYXNrLFxuICAgICAgICBoYW5kbGVSZWFkRnJvbUxvY2FsU3RvcmFnZSxcbiAgICAgICAgaGFuZGxlV3JpdGVUb0xvY2FsU3RvcmFnZVxuICAgIH1cblxufSkgKClcblxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlciIsImNvbnN0IGNyZWF0ZU5ld1Byb2plY3RPYmplY3QgPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgLypkdWVEYXRlLCovIGNhdGVnb3J5KSA9PiB7XG5cbiAgICAvKmdldHRlcnMgXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiBpZDtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG5cbiAgICBjb25zdCBnZXRDYXRlZ29yeSA9ICgpID0+IGNhdGVnb3J5O1xuXG4gICAgY29uc3Qgc2V0TmV3SWQgPSAobmV3SWQpID0+IHtcbiAgICAgICAgaWQgPSBuZXdJZDtcbiAgICB9O1xuXG4gICAgLy9zZXR0ZXJzICAgIFxuICAgIGNvbnN0IHNldE5ld1RpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4gICAgfTtcbiAgICBjb25zdCBzZXROZXdEZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgIH07XG4gICAgY29uc3Qgc2V0TmV3Q2F0ZWdvcnkgPSAobmV3Q2F0ZWdvcnkpID0+IHtcbiAgICAgICAgY2F0ZWdvcnkgPSBuZXdDYXRlZ29yeTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgICAgIGdldElkLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldENhdGVnb3J5LCBzZXROZXdJZCwgc2V0TmV3VGl0bGUsIHNldE5ld0Rlc2NyaXB0aW9uLCBzZXROZXdDYXRlZ29yeVxuICAgIH1cbiAgICB9ICovXG5cbiAgICByZXR1cm4ge2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5fVxuIH1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmV3UHJvamVjdE9iamVjdFxuIiwiY29uc3QgcHJvamVjdFN0b3JhZ2UgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0cyA9IFtdXG5cbiAgICBjb25zdCBhZGROZXdQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG5cbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHVud2FudGVkUHJvamVjdCkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YodW53YW50ZWRQcm9qZWN0KTtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSAocHJvamVjdFRvRWRpdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRWRpdCk7XG5cbiAgICAgICAgcHJvamVjdHNbaW5kZXhdLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHByb2plY3RzW2luZGV4XS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9qZWN0c1tpbmRleF0uY2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrID0gKHByb2plY3RUb0VkaXQsIHRhc2tOYW1lLCB0YXNrRHVlRGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRWRpdCk7XG4gICAgICAgIGlmIChcInRhc2tcIiBpbiBwcm9qZWN0c1tpbmRleF0pIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gcHJvamVjdHNbaW5kZXhdW1widGFza1wiXS5sZW5ndGg7XG4gICAgICAgICAgICBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdW25ld0luZGV4XSA9IHt0YXNrUGFyZW50OiBwcm9qZWN0c1tpbmRleF0uaWQsIHRhc2tOYW1lOiB0YXNrTmFtZSwgdGFza0R1ZURhdGU6IHRhc2tEdWVEYXRlfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XVtcInRhc2tcIl0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNbaW5kZXhdLmlkKVxuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdID0gW107XG4gICAgICAgICAgICBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdWzBdID0ge3Rhc2tQYXJlbnQ6IHByb2plY3RzW2luZGV4XS5pZCwgdGFza05hbWU6IHRhc2tOYW1lLCB0YXNrRHVlRGF0ZTogdGFza0R1ZURhdGUsIGdldFVuaXF1ZUlkKCkgeyByZXR1cm4gdGhpcy50YXNrTmFtZSt0aGlzLnRhc2tEdWVEYXRlfX1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzW2luZGV4XVtcInRhc2tcIl0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0c1xuICAgIH1cblxuICAgIGNvbnN0IGdldFByb2plY3RCeUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gICAgICAgcmV0dXJuIHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBjYXRlZ29yeSlcbiAgICB9XG5cbiAgICBjb25zdCBmaW5kUHJvamVjdEJ5SWQgPSAoaWQpID0+IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IGlkKVxuXG4gICAgZnVuY3Rpb24gZ2V0VW5pcXVlSWQoKSB7cmV0dXJuIHRoaXMudGFza05hbWUrdGhpcy50YXNrRHVlRGF0ZX07XG5cbiAgICBjb25zdCBnZXRUYXNrcyA9IChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza0xpc3QgPSBwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdO1xuICAgICAgICBjb25zb2xlLmxvZyh0YXNrTGlzdCk7XG5cbiAgICAgICAgaWYgKCF0YXNrTGlzdCB8fCB0YXNrTGlzdC5sZW5ndGggPT09IDApIHtyZXR1cm4gdGFza0xpc3R9XG5cbiAgICAgICAgaWYgKCEodGFza0xpc3RbMF0uaGFzT3duUHJvcGVydHkoXCJnZXRVbmlxdWVJZFwiKSkpIHtcbiAgICAgICAgICAgIHRhc2tMaXN0Lm1hcCgodGFzaykgPT4gdGFza1tcImdldFVuaXF1ZUlkXCJdID0gZ2V0VW5pcXVlSWQpO1xuICAgICAgICB9IFxuICAgICAgICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHRhc2tbXCJnZXRVbmlxdWVJZFwiXSA9IGdldFVuaXF1ZUlkKTtcbiAgICAgICAgcmV0dXJuIHRhc2tMaXN0O1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRUYXNrQnlJZCA9IChwcm9qZWN0LCB0YXNrSWQpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c1tpbmRleF1bXCJ0YXNrXCJdKTtcbiAgICAgICAgaWYgKCEocHJvamVjdHNbaW5kZXhdW1widGFza1wiXVswXS5oYXNPd25Qcm9wZXJ0eShcImdldFVuaXF1ZUlkXCIpKSkge1xuICAgICAgICAgICAgcHJvamVjdFtpbmRleF1bXCJ0YXNrXCJdLm1hcCgodGFzayk9PiB0YXNrW1wiZ2V0VW5pcXVlSWRcIl0gPSBnZXRVbmlxdWVJZCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFzayA9IHByb2plY3RzW2luZGV4XVtcInRhc2tcIl0uZmluZCgodGFza09iamVjdCkgPT4gdGFza09iamVjdC5nZXRVbmlxdWVJZCgpID09PSB0YXNrSWQpO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVUYXNrID0gKHByb2plY3QsIHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuaW5kZXhPZihwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl0uaW5kZXhPZih0YXNrKTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl0uc3BsaWNlKHRhc2tJbmRleCwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0VGFzayA9IChwcm9qZWN0LCB0YXNrLCB0YXNrTmFtZSwgZHVlRGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5pbmRleE9mKHByb2plY3QpO1xuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSBwcm9qZWN0c1twcm9qZWN0SW5kZXhdW1widGFza1wiXS5pbmRleE9mKHRhc2spO1xuICAgICAgICBwcm9qZWN0c1twcm9qZWN0SW5kZXhdW1widGFza1wiXVt0YXNrSW5kZXhdW1widGFza05hbWVcIl0gPSB0YXNrTmFtZTtcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdEluZGV4XVtcInRhc2tcIl1bdGFza0luZGV4XVtcInRhc2tEdWVEYXRlXCJdID0gZHVlRGF0ZTtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW3Byb2plY3RJbmRleF1bXCJ0YXNrXCJdW3Rhc2tJbmRleF0uZ2V0VW5pcXVlSWQoKTsgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IHJlYWRGcm9tTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0U3RvcmFnZVwiKSk7XG4gICAgICAgIGlmIChwcm9qZWN0U3RvcmFnZSAmJiBwcm9qZWN0U3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBwcm9qZWN0cyA9IHByb2plY3RzLmNvbmNhdChwcm9qZWN0U3RvcmFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCB3cml0ZVRvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RTdG9yYWdlXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2FkZE5ld1Byb2plY3QsIHJlbW92ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBnZXRQcm9qZWN0cywgZ2V0UHJvamVjdEJ5Q2F0ZWdvcnksIFxuICAgICAgICBhZGRUYXNrLCBmaW5kUHJvamVjdEJ5SWQsIGdldFRhc2tzLCBmaW5kVGFza0J5SWQsIHJlbW92ZVRhc2ssIGVkaXRUYXNrLCBcbiAgICAgICAgcmVhZEZyb21Mb2NhbFN0b3JhZ2UsIHdyaXRlVG9Mb2NhbFN0b3JhZ2V9XG5cbn0pICgpXG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RTdG9yYWdlXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL2NvbXBvbmVudHMvbWFpblwiOyBcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBNb2JpbGVNZW51IGZyb20gXCIuL2NvbXBvbmVudHMvbW9iaWxlTWVudUNvbnRhaW5lclwiO1xuaW1wb3J0IG1hbmFnZXIgZnJvbSBcIi4vbWFuYWdlclwiO1xuaW1wb3J0IEZvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGVkaXRQcm9qZWN0Rm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL2VkaXRQcm9qZWN0Rm9ybVwiO1xuaW1wb3J0IGNyZWF0ZVRhc2tGb3JtIGZyb20gXCIuL2NvbXBvbmVudHMvY3JlYXRlVGFza0Zvcm1cIjtcbmltcG9ydCBjcmVhdGVUYXNrTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy90YXNrTW9kYWxcIjtcbmltcG9ydCBFZGl0VGFza0Zvcm0gZnJvbSBcIi4vY29tcG9uZW50cy9lZGl0VGFza0Zvcm1cIjtcblxuXG4vL2xvYWQgY29tcG9uZW50cyBpbnRvIHRoZSBET01cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChNb2JpbGVNZW51KCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChNYWluKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEZvcm0oKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0Rm9ybSgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0Zvcm0oKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tNb2RhbCgpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoRWRpdFRhc2tGb3JtKCkpO1xuXG5tYW5hZ2VyLmhhbmRsZVJlYWRGcm9tTG9jYWxTdG9yYWdlKCk7XG5cbmNvbnN0IG1vYmlsZU1lbnVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudS1zZWN0aW9uXCIpO1xubW9iaWxlTWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG5jb25zdCBwcm9qZWN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWN0aW9uLnByb2plY3Qtc2VjdGlvblwiKTtcblxuXG5jb25zdCBtb2JpbGVNZW51SGFtYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2JpbGUtbWVudS1oYW1idXJnZXJcIik7XG5tb2JpbGVNZW51SGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBpZiAobW9iaWxlTWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgbW9iaWxlTWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgbW9iaWxlTWVudVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxufSlcblxuXG4vL2V2ZW50IGxpc3RlbmVyc1xuY29uc3QgbmF2aWdhdGlvbnNOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudS1saXN0ID4gbGlcIik7XG5jb25zdCBuYXZpZ2F0aW9uc0FycmF5ID0gWy4uLm5hdmlnYXRpb25zTm9kZUxpc3RdO1xuXG5cbi8vZXZlbnQgbGlzdGVuZXIgZm9yIG5hdmlnYXRpb25zXG5cbm5hdmlnYXRpb25zQXJyYXkuZm9yRWFjaCgobmF2aWdhdGlvbikgPT4geyBcbiAgICBuYXZpZ2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaGFuZGxlQ29ycmVjdE5hdihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICBwcm9qZWN0U2VjdGlvbi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZUdldFByb2plY3RzQnlDYXRlZ29yaWVzKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm1vYmlsZS1tZW51LWNvbnRhaW5lclwiKSkge1xuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIClcbiAgICB9KTtcblxuXG4vL2V2ZW50IGxpc3RlbmVyIGZvciBhZGQgbmV3IHByb2plY3QgYnV0dG9uICAgXG5cbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWNvbnRhaW5lclwiKTtcbmNvbnN0IGZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1zZWN0aW9uXCIpO1xuY29uc3QgZWRpdEZvcm1Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb25cIik7XG5jb25zdCB0YXNrRm9ybVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybS1zZWN0aW9uXCIpO1xuY29uc3QgdGFza01vZGFsU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1tb2RhbC1zZWN0aW9uXCIpO1xuY29uc3QgZWRpdFRhc2tGb3JtU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm0tc2VjdGlvblwiKTtcblxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS1wcm9qZWN0LWZvcm1cIik7XG5jb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWZvcm1cIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKTtcbmNvbnN0IGVkaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC10YXNrLWZvcm1cIik7XG5cbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gdGFza01vZGFsU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSA9PT0gXCJkZWxldGUtdGFza1wiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtcGFyZW50XCIpO1xuICAgICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gbWFuYWdlci5oYW5kbGVGaW5kVGFzayhwcm9qZWN0LCB0YXNrSWQpO1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZVJlbW92ZVRhc2socHJvamVjdCwgdGFzayk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcImVkaXQtdGFza1wiKSB7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXJlbnRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBtYW5hZ2VyLmhhbmRsZUZpbmRUYXNrKHByb2plY3QsIHRhc2tJZCk7XG5cbiAgICAgICAgZWRpdFRhc2tGb3JtU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCdkaXYgPiBmb3JtIGlucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSB0YXNrLnRhc2tOYW1lO1xuICAgICAgICBlZGl0VGFza0Zvcm1TZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJ2RpdiA+IGZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0nKS52YWx1ZSA9IHRhc2sudGFza0R1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgaW5pdGlhbGlzZUVkaXRUYXNrQnV0dG9uID0gKCk9PiB7XG4gICAgICAgICAgICBoYW5kbGVFZGl0VGFza0J1dHRvbkNsaWNrKHByb2plY3QsIHRhc2spO1xuICAgICAgICAgICAgZWRpdEJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGlhbGlzZUVkaXRUYXNrQnV0dG9uKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGVkaXRUYXNrRm9ybVNlY3Rpb24ucXVlcnlTZWxlY3RvcihcImRpdiA+IGZvcm0gYnV0dG9uXCIpO1xuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0aWFsaXNlRWRpdFRhc2tCdXR0b24pO1xuICAgIH1cblxufSlcblxuZnVuY3Rpb24gaGFuZGxlRWRpdFRhc2tCdXR0b25DbGljayhwcm9qZWN0LCB0YXNrKSB7XG4gICAgY29uc3QgdGFza0lucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRhc2stZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtdGFzay1mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWU7XG5cblxuICAgIGlmICh0YXNrSW5wdXROYW1lICYmIHRhc2tEdWVEYXRlKSB7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlRWRpdFRhc2socHJvamVjdCwgdGFzaywgdGFza0lucHV0TmFtZSwgdGFza0R1ZURhdGUpO1xuICAgIH1cblxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIkFsbCBUYXNrIElucHV0IEZpZWxkIE11c3QgQmUgRmlsbGVkXCIpO1xuICAgIH1cblxuICAgIGVkaXRUYXNrRm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVkaXRUYXNrRm9ybS5yZXNldCgpO1xufVxuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+IHtcbiAgICBmb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbilcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIGNsb3NlIGZvcm0gbW9kYWxcblxuXG5jb25zdCBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1tb2RhbFwiKTtcbmNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGZvcm1Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY3JlYXRlUHJvamVjdEZvcm0ucmVzZXQoKVxufSlcblxuY29uc3QgY2xvc2VFZGl0UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0LXByb2plY3QtbW9kYWxcIik7XG5jbG9zZUVkaXRQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGVkaXRGb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGVkaXRGb3JtLnJlc2V0KCk7XG59KVxuXG5jb25zdCBjbG9zZVRhc2tGb3JtTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXRhc2stZm9ybS1tb2RhbFwiKTtcbmNsb3NlVGFza0Zvcm1Nb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xufSlcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLXRhc2stbW9kYWxcIik7XG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB7XG4gICAgdGFza01vZGFsU2VjdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgdGFza01vZGFsU2VjdGlvbi5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTCA9IFwiXCI7XG59KVxuXG5jb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl0nKTtcbmNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT4ge1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJJRFwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJUaXRsZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJEZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgIC8vY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiRGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzZWxlY3RcIikudmFsdWU7XG5cbiAgICBjb25zdCBjaGVja0lkID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChpZCk7XG4gICAgXG4gICAgaWYgKGNoZWNrSWQpIHtcbiAgICAgICAgYWxlcnQoXCJJRCBhbHJlYWR5IGV4aXN0cyEgUGljayBhIG5ldyBvbmVcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSUQgZXhpc3RzXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmIChpZCAmJiB0aXRsZSkge1xuICAgICAgICBtYW5hZ2VyLmhhbmRsZU5ld1Byb2plY3RDcmVhdGlvbihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWxlY3QpO1xuICAgICAgIC8vIGNvbnNvbGUubG9nKG1hbmFnZXIuaGFuZGxlR2V0QWxsUHJvamVjdHMoKSlcbiAgICAgICAgY3JlYXRlUHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICAgICAgZm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiU2VjdGlvbnMgTWFya2VkIHdpdGggQXN0ZXJpc2sgQ2FuJ3QgYmUgRW1wdHlcIik7XG4gICAgfVxufSlcblxuLy8gZXZlbnQgbGlzdGVuZXIgdG8gcHJvamVjdCBzZWN0aW9uXG5cbnByb2plY3RTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpPT4ge1xuXG4gICAgLy9pZiB0aGUgZXZlbnQgdGFyZ2V0IGlzIHRoZSBhZGQgZnVuY3Rpb24sIGdldCB0aGUgcHJvamVjdCBJRCBpdCBiZWxvbmdzIHRvXG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gXCJhZGRcIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0SWQgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtcblxuICAgICAgICB0YXNrRm9ybVNlY3Rpb24uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtID4gLmJ1dHRvbi1jb250YWluZXIgPiBidXR0b246Zmlyc3Qtb2YtdHlwZVwiKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGluaXRhbGlzZWhhbmRsZVRhc2tCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICAgICAgaGFuZGxlQWRkVGFza0J1dHRvbkNsaWNrKHByb2plY3QpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaW5pdGFsaXNlaGFuZGxlVGFza0J1dHRvbik7XG4gICAgICAgIH1cblxuICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbml0YWxpc2VoYW5kbGVUYXNrQnV0dG9uKTtcblxuICAgICAgICAvL3NldCBwcm9jZXNzIGZvciBhZGRpbmcgdGFza3MgbWFuYWdlci5oYW5kbGVBZGRUYXNrKGlkLCApXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiZGVsZXRlXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdElkID0gZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlUHJvamVjdFJlbW92YWwocHJvamVjdCwgcHJvamVjdElkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwiZWRpdFwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3REZXRhaWxzVUkgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgcHJvamVjdERldGFpbHNVSUNoaWxkcmVuID0gcHJvamVjdERldGFpbHNVSS5jaGlsZHJlbjtcblxuICAgICAgICBlZGl0Rm9ybU1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXRJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb24gI2VkaXQtSURcIik7XG4gICAgICAgIGVkaXRJbnB1dElkLnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzBdLnRleHRDb250ZW50O1xuICAgICAgICBlZGl0SW5wdXRJZC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZWRpdElucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LVRpdGxlXCIpO1xuICAgICAgICBlZGl0SW5wdXRUaXRsZS52YWx1ZSA9IHByb2plY3REZXRhaWxzVUlDaGlsZHJlblsxXS50ZXh0Q29udGVudDtcblxuICAgICAgICBjb25zdCBlZGl0SW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1mb3JtLXNlY3Rpb24gI2VkaXQtRGVzY3JpcHRpb25cIik7XG4gICAgICAgIGVkaXRJbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzJdLnRleHRDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGVkaXRTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtZm9ybS1zZWN0aW9uICNlZGl0LUNhdGVnb3J5XCIpO1xuICAgICAgICBlZGl0U2VsZWN0LnZhbHVlID0gcHJvamVjdERldGFpbHNVSUNoaWxkcmVuWzNdLnRleHRDb250ZW50O1xuXG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWZvcm0tc2VjdGlvbiBidXR0b25cIik7XG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFZGl0UHJvamVjdEJ1dHRvbkNsaWNrKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwidmlld1wiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJZCA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbWFuYWdlci5oYW5kbGVGaW5kUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICB0YXNrTW9kYWxTZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVHZXRUYXNrcyhwcm9qZWN0KTsgICAgIFxuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRhc2tCdXR0b25DbGljayhwcm9qZWN0KSB7XG5cbiAgICBjb25zdCB0YXNrSW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrLWZvcm0gaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZTtcbiAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdGFzay1mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJdJykudmFsdWU7XG5cblxuICAgIGlmICh0YXNrSW5wdXROYW1lICYmIHRhc2tEdWVEYXRlKSB7XG4gICAgICAgIG1hbmFnZXIuaGFuZGxlQWRkVGFzayhwcm9qZWN0LCB0YXNrSW5wdXROYW1lLCB0YXNrRHVlRGF0ZSk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGFsZXJ0KFwiQWxsIFRhc2sgSW5wdXQgRmllbGQgTXVzdCBCZSBGaWxsZWRcIik7XG4gICAgfVxuXG4gICAgdGFza0Zvcm1TZWN0aW9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIFxufVxuXG5mdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdEJ1dHRvbkNsaWNrKCkge1xuICAgIGNvbnN0IGlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJlZGl0LUlEXCJdJykudmFsdWU7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImVkaXQtVGl0bGVcIl0nKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiZWRpdC1EZXNjcmlwdGlvblwiXScpLnZhbHVlO1xuICAgIC8vY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W2lkPVwiRGF0ZVwiXScpLnZhbHVlO1xuICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtpZD1cImVkaXQtQ2F0ZWdvcnlcIl0nKS52YWx1ZTtcblxuICAgIGlmICh0aXRsZSkge1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBtYW5hZ2VyLmhhbmRsZUZpbmRQcm9qZWN0KGlkKTtcbiAgICAgICAgbWFuYWdlci5oYW5kbGVQcm9qZWN0RWRpdChwcm9qZWN0LCBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBzZWxlY3QpO1xuXG4gICAgICAgIGVkaXRGb3JtTW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBjb25zdCBlZGl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdC1wcm9qZWN0LWZvcm1cIik7XG4gICAgICAgIGVkaXRGb3JtLnJlc2V0KCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBhbGVydChcIlNlY3Rpb25zIE1hcmtlZCB3aXRoIEFzdGVyaXNrIENhbid0IGJlIEVtcHR5XCIpO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb3JyZWN0TmF2KHNlY3Rpb24pIHtcbiAgICAvLyBnZXQgbmFtZSBvZiBjdXJyZW50IHNlY3Rpb25cbiAgICBjb25zdCBjdXJyU2VjdGlvbiA9IG1hbmFnZXIuZ2V0Q3VycmVudFNlY3Rpb24oKTsgXG5cbiAgICBjb25zdCBjdXJyTmF2aWdhdGlvbiA9IG5hdmlnYXRpb25zQXJyYXkuZmluZCgobmF2aWdhdGlvbik9PiBuYXZpZ2F0aW9uLnRleHRDb250ZW50ID09PSBzZWN0aW9uKTtcbiAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3VycmVudC1zZWN0aW9uXCIpO1xuICAgIGlmIChwcmV2U2VjdGlvbikge1xuICAgICAgICBwcmV2U2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnJlbnQtc2VjdGlvblwiKTtcbiAgICB9XG4gICAgY3Vyck5hdmlnYXRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJyZW50LXNlY3Rpb25cIik7XG4gICAgbWFuYWdlci5zZXRDdXJyZW50U2VjdGlvbihjdXJyTmF2aWdhdGlvbi50ZXh0Q29udGVudCk7XG59XG5cblxuaGFuZGxlQ29ycmVjdE5hdihcIkFMTFwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==